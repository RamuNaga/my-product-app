const grpc = require('@grpc/grpc-js');
const loader = require('/workspace/node_modules/.pnpm/@grpc+proto-loader@0.8.1/node_modules/@grpc/proto-loader');

const definition = loader.loadSync('/workspace/dist/product.proto', {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const client = new (grpc.loadPackageDefinition(definition).product.ItemService)(
  'backend-product-service:4001',
  grpc.credentials.createInsecure(),
);

const call = (method, request) =>
  new Promise((resolve, reject) =>
    client[method](request, (error, response) =>
      error ? reject(error) : resolve(response),
    ),
  );

let passed = 0;
let failed = 0;

async function test(name, fn) {
  try {
    await fn();
    console.log('PASS:', name);
    passed++;
  } catch (error) {
    console.error('FAIL:', name, error.message);
    failed++;
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function expectError(method, request, code) {
  try {
    await call(method, request);
    throw new Error('Expected gRPC error ' + code);
  } catch (error) {
    assert(
      error.code === code,
      'Expected code ' + code + ', got ' + error.code,
    );
  }
}

(async () => {
  let originalStatus;

  try {
    const original = await call('getItemById', { id: 2 });
    originalStatus = original.item.isActive;

    await test('Deactivate Item', async () => {
      const response = await call('deactivateItem', { id: 2 });
      assert(response.item.isActive === false, 'Item should be inactive');
    });

    await test('Repeated deactivation', async () => {
      const response = await call('deactivateItem', { id: 2 });
      assert(response.item.isActive === false, 'Item should remain inactive');
    });

    await test('Deactivation persistence', async () => {
      const response = await call('getItemById', { id: 2 });
      assert(response.item.isActive === false, 'Inactive status not persisted');
    });

    await test('Reactivate Item', async () => {
      const response = await call('reactivateItem', { id: 2 });
      assert(response.item.isActive === true, 'Item should be active');
    });

    await test('Repeated reactivation', async () => {
      const response = await call('reactivateItem', { id: 2 });
      assert(response.item.isActive === true, 'Item should remain active');
    });

    await test('Reactivation persistence', async () => {
      const response = await call('getItemById', { id: 2 });
      assert(response.item.isActive === true, 'Active status not persisted');
    });

    for (const method of ['deactivateItem', 'reactivateItem']) {
      await test(method + ' rejects ID zero', () =>
        expectError(method, { id: 0 }, grpc.status.INVALID_ARGUMENT),
      );

      await test(method + ' rejects nonexistent Item', () =>
        expectError(method, { id: 2147483647 }, grpc.status.NOT_FOUND),
      );
    }
  } catch (error) {
    console.error('SETUP ERROR:', error.message);
    failed++;
  } finally {
    if (originalStatus !== undefined) {
      try {
        await call(originalStatus ? 'reactivateItem' : 'deactivateItem', {
          id: 2,
        });
        const restored = await call('getItemById', { id: 2 });
        assert(
          restored.item.isActive === originalStatus,
          'Restore verification failed',
        );
        console.log('Original active status restored:', originalStatus);
      } catch (error) {
        console.error('RESTORE FAILED:', error.message);
        failed++;
      }
    }

    console.log(`Results: ${passed} passed, ${failed} failed`);
    client.close();
    if (failed) process.exitCode = 1;
  }
})();
