const grpc = require('@grpc/grpc-js');
const loader = require('/workspace/node_modules/.pnpm/@grpc+proto-loader@0.8.1/node_modules/@grpc/proto-loader');

const proto = loader.loadSync('/workspace/dist/product.proto', {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const ItemService = grpc.loadPackageDefinition(proto).product.ItemService;
const client = new ItemService(
  'backend-product-service:4001',
  grpc.credentials.createInsecure(),
);

const ITEM_ID = 2;
let passed = 0;
let failed = 0;

function rpc(method, request) {
  return new Promise((resolve, reject) => {
    client[method](request, (error, response) => {
      if (error) reject(error);
      else resolve(response);
    });
  });
}

async function test(name, fn) {
  try {
    await fn();
    passed++;
    console.log(`PASS: ${name}`);
  } catch (error) {
    failed++;
    console.error(`FAIL: ${name} — ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function expectError(request, code, message) {
  try {
    await rpc('updateItem', request);
    throw new Error('Expected gRPC error, but request succeeded');
  } catch (error) {
    assert(error.code === code, `Expected status ${code}, got ${error.code}`);
    assert(
      error.message.includes(message),
      `Unexpected error: ${error.message}`,
    );
  }
}

async function main() {
  const original = (await rpc('getItemById', { id: ITEM_ID })).item;

  assert(original, `Test Item ${ITEM_ID} not found`);
  console.log(`Testing Item ${ITEM_ID}: ${original.code}`);

  try {
    await test('Reject blank name', async () => {
      await expectError(
        { id: ITEM_ID, name: '   ' },
        grpc.status.INVALID_ARGUMENT,
        'Item name is required',
      );
    });

    await test('Reject empty update', async () => {
      await expectError(
        { id: ITEM_ID },
        grpc.status.INVALID_ARGUMENT,
        'At least one field',
      );
    });

    await test('Reject invalid Item ID', async () => {
      await expectError(
        { id: 0, name: 'Invalid' },
        grpc.status.INVALID_ARGUMENT,
        'Valid Item ID',
      );
    });

    await test('Reject nonexistent Item', async () => {
      await expectError(
        { id: 999999, name: 'Missing' },
        grpc.status.NOT_FOUND,
        'Item not found',
      );
    });

    await test('Reject invalid supplier ID', async () => {
      await expectError(
        { id: ITEM_ID, defaultSupplierId: { value: 0 } },
        grpc.status.INVALID_ARGUMENT,
        'positive integer',
      );
    });

    await test('Reject conflicting supplier instructions', async () => {
      await expectError(
        {
          id: ITEM_ID,
          defaultSupplierId: { value: 1 },
          clearDefaultSupplierId: true,
        },
        grpc.status.INVALID_ARGUMENT,
        'Cannot set and clear',
      );
    });

    await test('Reject invalid supply type', async () => {
      await expectError(
        { id: ITEM_ID, supplyType: 999 },
        grpc.status.INVALID_ARGUMENT,
        'Invalid supply type',
      );
    });

    await test('Reject invalid process type', async () => {
      await expectError(
        { id: ITEM_ID, processType: 999 },
        grpc.status.INVALID_ARGUMENT,
        'Invalid process type',
      );
    });

    await test('Reject invalid base unit', async () => {
      await expectError(
        { id: ITEM_ID, baseUnit: 999 },
        grpc.status.INVALID_ARGUMENT,
        'Invalid base unit',
      );
    });

    await test('Update multiple fields', async () => {
      const result = await rpc('updateItem', {
        id: ITEM_ID,
        name: 'Automated Test Sugar',
        description: 'Automated integration test',
        origin: 'Test Origin',
      });

      assert(result.item.name === 'Automated Test Sugar', 'Name not updated');
      assert(
        result.item.description === 'Automated integration test',
        'Description not updated',
      );
      assert(result.item.origin === 'Test Origin', 'Origin not updated');
      assert(result.item.code === original.code, 'Item code changed');
      assert(result.item.kind === original.kind, 'Item kind changed');
    });

    await test('Clear optional description', async () => {
      const result = await rpc('updateItem', {
        id: ITEM_ID,
        description: '',
      });

      assert(result.item.description === '', 'Description not cleared');
    });

    await test('Clear default supplier', async () => {
      const result = await rpc('updateItem', {
        id: ITEM_ID,
        clearDefaultSupplierId: true,
      });

      assert(result.item.defaultSupplierId == null, 'Supplier not cleared');
    });

    await test('Verify GetItemById persistence', async () => {
      const result = await rpc('getItemById', { id: ITEM_ID });

      assert(result.item.name === 'Automated Test Sugar', 'Name not persisted');
      assert(result.item.origin === 'Test Origin', 'Origin not persisted');
    });
  } finally {
    console.log('\nRestoring original Item values...');

    try {
      await rpc('updateItem', {
        id: ITEM_ID,
        name: original.name,
        description: original.description || '',
        origin: original.origin || '',
        manufacturer: original.manufacturer || '',
        allergenDeclaration: original.allergenDeclaration || '',
        packSizeDescription: original.packSizeDescription || '',
        netContentDescription: original.netContentDescription || '',
        supplyType: original.supplyType,
        processType: original.processType,
        baseUnit: original.baseUnit,
        ...(original.defaultSupplierId != null
          ? { defaultSupplierId: { value: original.defaultSupplierId } }
          : { clearDefaultSupplierId: true }),
      });

      console.log('Original Item values restored.');
    } catch (error) {
      failed++;
      console.error('RESTORE FAILED:', error.message);
    }

    client.close();
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error('Test setup failed:', error.message);
  client.close();
  process.exitCode = 1;
});
