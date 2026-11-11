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

const runId = `${Date.now()}-${process.pid}`;

function makeItem(name, kind = 'RAW_MATERIAL') {
  return {
    name: `${runId}-${name}`,
    description: '',
    kind,
    supplyType: 'PURCHASED',
    processType: 'NONE',
    baseUnit: 'KG',
    allergenDeclaration: '',
    origin: '',
    manufacturer: '',
    packSizeDescription: '',
    netContentDescription: '',
  };
}

function codeNumber(code) {
  const match = /^([A-Z]{2})-(\d{6})$/.exec(code);
  assert(match, `Invalid Item code: ${code}`);
  return Number(match[2]);
}

(async () => {
  try {
    await test('Bulk creates three raw materials', async () => {
      const response = await call('createItems', {
        items: [makeItem('Flour'), makeItem('Sugar'), makeItem('Salt')],
      });

      assert(response.items.length === 3, 'Expected three Items');
      assert(
        response.items.every((item) => item.code.startsWith('RM-')),
        'Expected RM codes',
      );
    });

    await test('Bulk codes are sequential', async () => {
      const response = await call('createItems', {
        items: [
          makeItem('Sequential-A'),
          makeItem('Sequential-B'),
          makeItem('Sequential-C'),
        ],
      });

      const numbers = response.items.map((item) => codeNumber(item.code));

      assert(numbers[1] === numbers[0] + 1, 'Second code not sequential');
      assert(numbers[2] === numbers[1] + 1, 'Third code not sequential');
    });

    await test('Mixed Item kinds receive correct prefixes', async () => {
      const response = await call('createItems', {
        items: [
          makeItem('Mixed-Raw', 'RAW_MATERIAL'),
          makeItem('Mixed-Packaging', 'PACKAGING'),
          makeItem('Mixed-Sauce', 'SAUCE'),
        ],
      });

      assert(response.items.length === 3, 'Expected three Items');
      assert(response.items[0].code.startsWith('RM-'), 'Wrong RM prefix');
      assert(response.items[1].code.startsWith('PK-'), 'Wrong PK prefix');
      assert(response.items[2].code.startsWith('SC-'), 'Wrong SC prefix');
    });

    await test('Bulk response preserves request order', async () => {
      const items = [
        makeItem('Order-Box', 'PACKAGING'),
        makeItem('Order-Flour', 'RAW_MATERIAL'),
        makeItem('Order-Sauce', 'SAUCE'),
      ];

      const response = await call('createItems', { items });

      assert(
        response.items.every((item, index) => item.name === items[index].name),
        'Bulk response order differs from request order',
      );
    });

    await test('Created Items persist in database', async () => {
      const response = await call('createItems', {
        items: [makeItem('Persistence')],
      });

      const created = response.items[0];

      const fetched = await call('getItemById', {
        id: created.id,
      });

      assert(fetched.item.id === created.id, 'Item ID mismatch');
      assert(fetched.item.code === created.code, 'Item code mismatch');
      assert(fetched.item.name === created.name, 'Item name mismatch');
    });

    await test('Rejects empty bulk request', async () => {
      await expectError(
        'createItems',
        { items: [] },
        grpc.status.INVALID_ARGUMENT,
      );
    });

    await test('Rejects more than 100 Items', async () => {
      const items = Array.from({ length: 101 }, (_, index) =>
        makeItem(`Limit-${index}`),
      );

      await expectError('createItems', { items }, grpc.status.INVALID_ARGUMENT);
    });

    await test('Rejects invalid row without creating valid rows', async () => {
      const validName = `${runId}-Atomicity-Valid`;

      await expectError(
        'createItems',
        {
          items: [
            makeItem('Atomicity-First'),
            {
              ...makeItem('Atomicity-Invalid'),
              name: '   ',
            },
            {
              ...makeItem('Atomicity-Last'),
              name: validName,
            },
          ],
        },
        grpc.status.INVALID_ARGUMENT,
      );

      const response = await call('getAllItems', {});

      assert(
        !response.items.some(
          (item) =>
            item.name === `${runId}-Atomicity-First` || item.name === validName,
        ),
        'Valid rows were persisted despite bulk validation failure',
      );
    });
  } catch (error) {
    console.error('SETUP ERROR:', error.message);
    failed++;
  } finally {
    console.log(`Results: ${passed} passed, ${failed} failed`);
    client.close();
    if (failed) process.exitCode = 1;
  }
})();
