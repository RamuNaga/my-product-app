import { status } from '@grpc/grpc-js';
import { ItemGrpcService } from './item-grpc.service';

import {
  Prisma,
  ProductPrismaService,
} from '@my-product-app/backend-prisma/product-prisma';

import {
  CreateItemRequest,
  ProtoItemKind,
  ProtoSupplyType,
  ProtoProcessType,
  ProtoUnitOfMeasure,
} from '@my-product-app/backend-proto/generated';

describe('ItemGrpcService', () => {
  let service: ItemGrpcService;
  const transactionMock = {
    itemCodeSequence: {
      upsert: jest.fn(),
    },
    item: {
      create: jest.fn(),
    },
  };

  const prismaMock = {
    client: {
      item: {
        update: jest.fn(),
        findUnique: jest.fn(),
        findMany: jest.fn(),
      },
      recipeLine: {
        count: jest.fn(),
      },
      recipeRevision: {
        count: jest.fn(),
      },
      productPackagingLine: {
        count: jest.fn(),
      },
      $transaction: jest.fn(
        async (callback: (tx: typeof transactionMock) => Promise<unknown>) =>
          callback(transactionMock),
      ),
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();

    service = new ItemGrpcService(
      prismaMock as unknown as ProductPrismaService,
    );
  });

  describe('Item active-status validation', () => {
    it.each([
      ['deactivateItem', 0],
      ['deactivateItem', -1],
      ['reactivateItem', 0],
      ['reactivateItem', -1],
    ] as const)('%s rejects invalid Item ID %i', async (method, id) => {
      await expect(service[method]({ id })).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
        },
      });

      expect(prismaMock.client.item.update).not.toHaveBeenCalled();
    });
  });

  describe('Item active-status NOT_FOUND handling', () => {
    it.each([
      ['deactivateItem', false],
      ['reactivateItem', true],
    ] as const)(
      '%s returns NOT_FOUND when Item does not exist',
      async (method, isActive) => {
        const prismaError = new Prisma.PrismaClientKnownRequestError(
          'Record to update not found',
          {
            code: 'P2025',
            clientVersion: 'test',
          },
        );

        prismaMock.client.item.update.mockRejectedValueOnce(prismaError);

        await expect(service[method]({ id: 999999 })).rejects.toMatchObject({
          error: {
            code: status.NOT_FOUND,
            message: 'Item not found',
          },
        });

        expect(prismaMock.client.item.update).toHaveBeenCalledWith({
          where: { id: 999999 },
          data: { isActive },
        });
      },
    );
  });

  describe('Item active-status success', () => {
    it.each([
      ['deactivateItem', false],
      ['reactivateItem', true],
    ] as const)(
      '%s updates and returns the correct active status',
      async (method, isActive) => {
        const item = {
          id: 2,
          code: 'RM-000002',
          name: 'Test Item',
          description: null,
          kind: 'RAW_MATERIAL',
          supplyType: 'PURCHASED',
          processType: 'NONE',
          baseUnit: 'KG',
          allergenDeclaration: null,
          origin: null,
          manufacturer: null,
          defaultSupplierId: null,
          packSizeDescription: null,
          netContentDescription: null,
          isActive,
          createdAt: new Date('2026-01-01T00:00:00.000Z'),
          updatedAt: new Date('2026-01-02T00:00:00.000Z'),
        };

        prismaMock.client.item.update.mockResolvedValueOnce(item);

        const result = await service[method]({ id: 2 });

        expect(prismaMock.client.item.update).toHaveBeenCalledWith({
          where: { id: 2 },
          data: { isActive },
        });

        expect(result.item).toMatchObject({
          id: 2,
          code: 'RM-000002',
          isActive,
          createdAt: '2026-01-01T00:00:00.000Z',
          updatedAt: '2026-01-02T00:00:00.000Z',
        });
      },
    );
  });

  describe('Item active-status database errors', () => {
    it.each([
      ['deactivateItem', false],
      ['reactivateItem', true],
    ] as const)(
      '%s returns INTERNAL when the database fails',
      async (method, isActive) => {
        const consoleSpy = jest
          .spyOn(console, 'error')
          .mockImplementation(() => undefined);

        try {
          prismaMock.client.item.update.mockRejectedValueOnce(
            new Error('Database connection failed'),
          );

          await expect(service[method]({ id: 2 })).rejects.toMatchObject({
            error: {
              code: status.INTERNAL,
              message: 'Could not change Item active status',
            },
          });

          expect(prismaMock.client.item.update).toHaveBeenCalledWith({
            where: { id: 2 },
            data: { isActive },
          });
        } finally {
          consoleSpy.mockRestore();
        }
      },
    );
  });

  describe('GetItemById validation', () => {
    it.each([0, -1, 1.5])('rejects invalid Item ID %s', async (id) => {
      await expect(service.getItemById({ id })).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
          message: 'Valid Item ID is required',
        },
      });

      expect(prismaMock.client.item.findUnique).not.toHaveBeenCalled();
    });
  });

  describe('GetItemById NOT_FOUND handling', () => {
    it('returns NOT_FOUND when the Item does not exist', async () => {
      prismaMock.client.item.findUnique.mockResolvedValueOnce(null);

      await expect(service.getItemById({ id: 999999 })).rejects.toMatchObject({
        error: {
          code: status.NOT_FOUND,
          message: 'Item not found',
        },
      });

      expect(prismaMock.client.item.findUnique).toHaveBeenCalledWith({
        where: { id: 999999 },
      });
    });
  });

  describe('GetItemById success', () => {
    it('returns the Item with correctly mapped fields', async () => {
      const item = {
        id: 2,
        code: 'RM-000002',
        name: 'Test Raw Material',
        description: null,
        kind: 'RAW_MATERIAL',
        supplyType: 'PURCHASED',
        processType: 'NONE',
        baseUnit: 'KG',
        allergenDeclaration: null,
        origin: null,
        manufacturer: null,
        defaultSupplierId: null,
        packSizeDescription: null,
        netContentDescription: null,
        isActive: true,
        createdAt: new Date('2026-01-01T00:00:00.000Z'),
        updatedAt: new Date('2026-01-02T00:00:00.000Z'),
      };

      prismaMock.client.item.findUnique.mockResolvedValueOnce(item);

      const result = await service.getItemById({ id: 2 });

      expect(prismaMock.client.item.findUnique).toHaveBeenCalledWith({
        where: { id: 2 },
      });

      expect(result.item).toMatchObject({
        id: 2,
        code: 'RM-000002',
        name: 'Test Raw Material',
        description: '',
        isActive: true,
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-02T00:00:00.000Z',
      });

      expect(result.item?.defaultSupplierId).toBeUndefined();
      expect(result.item).toMatchObject({
        kind: ProtoItemKind.RAW_MATERIAL,
        supplyType: ProtoSupplyType.PURCHASED,
        processType: ProtoProcessType.NONE,
        baseUnit: ProtoUnitOfMeasure.KG,
      });
    });
  });

  describe('GetAllItems', () => {
    it('returns an empty array when no Items exist', async () => {
      prismaMock.client.item.findMany.mockResolvedValueOnce([]);

      const result = await service.getAllItems({});

      expect(prismaMock.client.item.findMany).toHaveBeenCalledWith({
        orderBy: { id: 'asc' },
      });

      expect(result).toEqual({
        items: [],
      });
    });

    it('returns multiple Items with correctly mapped fields', async () => {
      const firstItem = {
        id: 1,
        code: 'RM-000001',
        name: 'Flour',
        description: null,
        kind: 'RAW_MATERIAL',
        supplyType: 'PURCHASED',
        processType: 'NONE',
        baseUnit: 'KG',
        allergenDeclaration: null,
        origin: null,
        manufacturer: null,
        defaultSupplierId: null,
        packSizeDescription: null,
        netContentDescription: null,
        isActive: true,
        createdAt: new Date('2026-01-01T00:00:00.000Z'),
        updatedAt: new Date('2026-01-02T00:00:00.000Z'),
      };

      const secondItem = {
        ...firstItem,
        id: 2,
        code: 'RM-000002',
        name: 'Sugar',
        isActive: false,
      };

      prismaMock.client.item.findMany.mockResolvedValueOnce([
        firstItem,
        secondItem,
      ]);

      const result = await service.getAllItems({});

      expect(prismaMock.client.item.findMany).toHaveBeenCalledWith({
        orderBy: { id: 'asc' },
      });

      expect(result.items).toHaveLength(2);

      expect(result.items[0]).toMatchObject({
        id: 1,
        code: 'RM-000001',
        name: 'Flour',
        kind: ProtoItemKind.RAW_MATERIAL,
        baseUnit: ProtoUnitOfMeasure.KG,
        isActive: true,
      });

      expect(result.items[1]).toMatchObject({
        id: 2,
        code: 'RM-000002',
        name: 'Sugar',
        isActive: false,
      });
    });
  });

  describe('UpdateItem validation', () => {
    it.each([0, -1, 1.5])('rejects invalid Item ID %s', async (id) => {
      await expect(
        service.updateItem({
          id,
          name: 'Updated Item',
          defaultSupplierId: undefined,
          clearDefaultSupplierId: false,
        }),
      ).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
          message: 'Valid Item ID is required',
        },
      });

      expect(prismaMock.client.item.findUnique).not.toHaveBeenCalled();
      expect(prismaMock.client.item.update).not.toHaveBeenCalled();
    });

    it('rejects an update with no fields provided', async () => {
      await expect(
        service.updateItem({
          id: 2,
          defaultSupplierId: undefined,
          clearDefaultSupplierId: false,
        }),
      ).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
          message: 'At least one field must be provided for update',
        },
      });

      expect(prismaMock.client.item.findUnique).not.toHaveBeenCalled();
      expect(prismaMock.client.item.update).not.toHaveBeenCalled();
    });

    it('rejects setting and clearing the default supplier simultaneously', async () => {
      await expect(
        service.updateItem({
          id: 2,
          defaultSupplierId: 5,
          clearDefaultSupplierId: true,
        }),
      ).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
          message: 'Cannot set and clear default supplier in the same request',
        },
      });

      expect(prismaMock.client.item.findUnique).not.toHaveBeenCalled();
      expect(prismaMock.client.item.update).not.toHaveBeenCalled();
    });

    it('rejects an Item name containing only whitespace', async () => {
      await expect(
        service.updateItem({
          id: 2,
          name: '   ',
          defaultSupplierId: undefined,
          clearDefaultSupplierId: false,
        }),
      ).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
          message: 'Item name is required',
        },
      });

      expect(prismaMock.client.item.findUnique).not.toHaveBeenCalled();
      expect(prismaMock.client.item.update).not.toHaveBeenCalled();
    });

    it.each([
      {
        scenario: 'supplier ID 0',
        changes: { defaultSupplierId: 0 },
        message: 'Default supplier ID must be a positive integer',
      },
      {
        scenario: 'negative supplier ID',
        changes: { defaultSupplierId: -1 },
        message: 'Default supplier ID must be a positive integer',
      },
      {
        scenario: 'decimal supplier ID',
        changes: { defaultSupplierId: 1.5 },
        message: 'Default supplier ID must be a positive integer',
      },
      {
        scenario: 'invalid supplyType',
        changes: { supplyType: 999 },
        message: 'Invalid supply type',
      },
      {
        scenario: 'invalid processType',
        changes: { processType: 999 },
        message: 'Invalid process type',
      },
      {
        scenario: 'invalid baseUnit',
        changes: { baseUnit: 999 },
        message: 'Invalid base unit',
      },
    ])('rejects $scenario', async ({ changes, message }) => {
      await expect(
        service.updateItem({
          id: 2,
          defaultSupplierId: undefined,
          clearDefaultSupplierId: false,
          ...changes,
        }),
      ).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
          message,
        },
      });

      expect(prismaMock.client.item.findUnique).not.toHaveBeenCalled();
      expect(prismaMock.client.item.update).not.toHaveBeenCalled();
    });
  });

  describe('UpdateItem database operations', () => {
    const existingItem = {
      id: 2,
      code: 'RM-000002',
      name: 'Original Item',
      description: null,
      kind: 'RAW_MATERIAL',
      supplyType: 'PURCHASED',
      processType: 'NONE',
      baseUnit: 'KG',
      allergenDeclaration: null,
      origin: null,
      manufacturer: null,
      defaultSupplierId: null,
      packSizeDescription: null,
      netContentDescription: null,
      isActive: true,
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
      updatedAt: new Date('2026-01-02T00:00:00.000Z'),
    };

    it('returns NOT_FOUND when the Item does not exist', async () => {
      prismaMock.client.item.findUnique.mockResolvedValueOnce(null);

      await expect(
        service.updateItem({
          id: 999999,
          name: 'Updated Item',
          defaultSupplierId: undefined,
          clearDefaultSupplierId: false,
        }),
      ).rejects.toMatchObject({
        error: {
          code: status.NOT_FOUND,
          message: 'Item not found',
        },
      });

      expect(prismaMock.client.item.update).not.toHaveBeenCalled();
    });

    it.each([
      {
        scenario: 'name',
        changes: { name: '  Updated Item  ' },
        expected: { name: 'Updated Item' },
      },
      {
        scenario: 'description',
        changes: { description: '  New description  ' },
        expected: { description: 'New description' },
      },
      {
        scenario: 'origin',
        changes: { origin: '  United Kingdom  ' },
        expected: { origin: 'United Kingdom' },
      },
      {
        scenario: 'manufacturer',
        changes: { manufacturer: '  Test Manufacturer  ' },
        expected: { manufacturer: 'Test Manufacturer' },
      },
      {
        scenario: 'default supplier',
        changes: { defaultSupplierId: 5 },
        expected: { defaultSupplierId: 5 },
      },
      {
        scenario: 'cleared default supplier',
        changes: { clearDefaultSupplierId: true },
        expected: { defaultSupplierId: null },
      },
      {
        scenario: 'cleared description',
        changes: { description: '   ' },
        expected: { description: null },
      },
    ])('successfully updates $scenario', async ({ changes, expected }) => {
      prismaMock.client.item.findUnique.mockResolvedValueOnce(existingItem);

      prismaMock.client.item.update.mockResolvedValueOnce({
        ...existingItem,
        ...expected,
      });

      const result = await service.updateItem({
        id: 2,
        defaultSupplierId: undefined,
        clearDefaultSupplierId: false,
        ...changes,
      });

      expect(prismaMock.client.item.findUnique).toHaveBeenCalledWith({
        where: { id: 2 },
      });

      expect(prismaMock.client.item.update).toHaveBeenCalledWith({
        where: { id: 2 },
        data: expected,
      });

      expect(result.item).toMatchObject({
        id: 2,
        code: 'RM-000002',
      });
    });

    it.each([
      {
        scenario: 'supply type',
        changes: { supplyType: ProtoSupplyType.MANUFACTURED },
        expected: { supplyType: 'MANUFACTURED' },
      },
      {
        scenario: 'process type',
        changes: { processType: ProtoProcessType.NONE },
        expected: { processType: 'NONE' },
      },
      {
        scenario: 'allergen declaration',
        changes: { allergenDeclaration: '  Contains wheat  ' },
        expected: { allergenDeclaration: 'Contains wheat' },
      },
      {
        scenario: 'pack size description',
        changes: { packSizeDescription: '  25 kg bag  ' },
        expected: { packSizeDescription: '25 kg bag' },
      },
      {
        scenario: 'net content description',
        changes: { netContentDescription: '  500 g  ' },
        expected: { netContentDescription: '500 g' },
      },
      {
        scenario: 'clearing allergen declaration',
        changes: { allergenDeclaration: '   ' },
        expected: { allergenDeclaration: null },
      },
    ])('updates $scenario', async ({ changes, expected }) => {
      prismaMock.client.item.findUnique.mockResolvedValueOnce(existingItem);

      prismaMock.client.item.update.mockResolvedValueOnce({
        ...existingItem,
        ...expected,
      });

      await service.updateItem({
        id: 2,
        defaultSupplierId: undefined,
        clearDefaultSupplierId: false,
        ...changes,
      });

      expect(prismaMock.client.item.update).toHaveBeenCalledWith({
        where: { id: 2 },
        data: expected,
      });
    });
  });

  describe('UpdateItem referential integrity and errors', () => {
    const existingItem = {
      id: 2,
      code: 'RM-000002',
      name: 'Flour',
      description: null,
      kind: 'RAW_MATERIAL',
      supplyType: 'PURCHASED',
      processType: 'NONE',
      baseUnit: 'KG',
      allergenDeclaration: null,
      origin: null,
      manufacturer: null,
      defaultSupplierId: null,
      packSizeDescription: null,
      netContentDescription: null,
      isActive: true,
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
      updatedAt: new Date('2026-01-02T00:00:00.000Z'),
    };

    const request = {
      id: 2,
      name: 'Updated Flour',
      defaultSupplierId: undefined,
      clearDefaultSupplierId: false,
    };

    it.each([
      ['recipe component', 1, 0, 0],
      ['recipe output', 0, 1, 0],
      ['packaging line', 0, 0, 1],
    ])(
      'rejects base-unit changes referenced by %s',
      async (_source, recipeLines, revisions, packagingLines) => {
        prismaMock.client.item.findUnique.mockResolvedValueOnce(existingItem);
        prismaMock.client.recipeLine.count.mockResolvedValueOnce(recipeLines);
        prismaMock.client.recipeRevision.count.mockResolvedValueOnce(revisions);
        prismaMock.client.productPackagingLine.count.mockResolvedValueOnce(
          packagingLines,
        );

        await expect(
          service.updateItem({
            ...request,
            baseUnit: ProtoUnitOfMeasure.L,
          }),
        ).rejects.toMatchObject({
          error: {
            code: status.FAILED_PRECONDITION,
            message:
              'Cannot change base unit of an Item referenced by recipes or packaging',
          },
        });

        expect(prismaMock.client.item.update).not.toHaveBeenCalled();
      },
    );

    it('allows base-unit changes when the Item is unreferenced', async () => {
      prismaMock.client.item.findUnique.mockResolvedValueOnce(existingItem);
      prismaMock.client.recipeLine.count.mockResolvedValueOnce(0);
      prismaMock.client.recipeRevision.count.mockResolvedValueOnce(0);
      prismaMock.client.productPackagingLine.count.mockResolvedValueOnce(0);

      prismaMock.client.item.update.mockResolvedValueOnce({
        ...existingItem,
        name: 'Updated Flour',
        baseUnit: 'L',
      });

      const result = await service.updateItem({
        ...request,
        baseUnit: ProtoUnitOfMeasure.L,
      });

      expect(prismaMock.client.item.update).toHaveBeenCalledWith({
        where: { id: 2 },
        data: {
          name: 'Updated Flour',
          baseUnit: 'L',
        },
      });

      expect(result.item?.baseUnit).toBe(ProtoUnitOfMeasure.L);
    });

    it('skips reference checks when the base unit is unchanged', async () => {
      prismaMock.client.item.findUnique.mockResolvedValueOnce(existingItem);
      prismaMock.client.item.update.mockResolvedValueOnce({
        ...existingItem,
        name: 'Updated Flour',
      });

      await service.updateItem({
        ...request,
        baseUnit: ProtoUnitOfMeasure.KG,
      });

      expect(prismaMock.client.recipeLine.count).not.toHaveBeenCalled();
      expect(prismaMock.client.recipeRevision.count).not.toHaveBeenCalled();
      expect(
        prismaMock.client.productPackagingLine.count,
      ).not.toHaveBeenCalled();
    });

    it('returns NOT_FOUND for Prisma P2025 during update', async () => {
      prismaMock.client.item.findUnique.mockResolvedValueOnce(existingItem);

      prismaMock.client.item.update.mockRejectedValueOnce(
        new Prisma.PrismaClientKnownRequestError('Record not found', {
          code: 'P2025',
          clientVersion: 'test',
        }),
      );

      await expect(service.updateItem(request)).rejects.toMatchObject({
        error: {
          code: status.NOT_FOUND,
          message: 'Item not found',
        },
      });
    });

    it('returns INTERNAL for unexpected database errors', async () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => undefined);

      try {
        prismaMock.client.item.findUnique.mockResolvedValueOnce(existingItem);
        prismaMock.client.item.update.mockRejectedValueOnce(
          new Error('Database connection failed'),
        );

        await expect(service.updateItem(request)).rejects.toMatchObject({
          error: {
            code: status.INTERNAL,
            message: 'Could not update Item',
          },
        });
      } finally {
        consoleSpy.mockRestore();
      }
    });
  });

  describe('CreateItem validation', () => {
    const validRequest: CreateItemRequest = {
      name: 'Test Flour',
      description: '',
      kind: ProtoItemKind.RAW_MATERIAL,
      supplyType: ProtoSupplyType.PURCHASED,
      processType: ProtoProcessType.NONE,
      baseUnit: ProtoUnitOfMeasure.KG,
      allergenDeclaration: '',
      origin: '',
      manufacturer: '',
      defaultSupplierId: undefined,
      packSizeDescription: '',
      netContentDescription: '',
    };

    it.each([
      {
        scenario: 'empty name',
        changes: { name: '' },
        message: 'Item name is required',
      },
      {
        scenario: 'whitespace-only name',
        changes: { name: '   ' },
        message: 'Item name is required',
      },
      {
        scenario: 'invalid Item kind',
        changes: { kind: 999 },
        message: 'Invalid item kind',
      },
      {
        scenario: 'invalid supply type',
        changes: { supplyType: 999 },
        message: 'Invalid supply type',
      },
      {
        scenario: 'invalid process type',
        changes: { processType: 999 },
        message: 'Invalid process type',
      },
      {
        scenario: 'invalid base unit',
        changes: { baseUnit: 999 },
        message: 'Invalid base unit',
      },
      {
        scenario: 'supplier ID 0',
        changes: { defaultSupplierId: 0 },
        message: 'Default supplier ID must be a positive integer',
      },
      {
        scenario: 'negative supplier ID',
        changes: { defaultSupplierId: -1 },
        message: 'Default supplier ID must be a positive integer',
      },
      {
        scenario: 'decimal supplier ID',
        changes: { defaultSupplierId: 1.5 },
        message: 'Default supplier ID must be a positive integer',
      },
    ])('rejects $scenario', async ({ changes, message }) => {
      await expect(
        service.createItem({
          ...validRequest,
          ...changes,
        } as unknown as CreateItemRequest),
      ).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
          message,
        },
      });
    });
  });

  describe('CreateItem success and code generation', () => {
    const validRequest: CreateItemRequest = {
      name: '  Test Flour  ',
      description: '  Premium flour  ',
      kind: ProtoItemKind.RAW_MATERIAL,
      supplyType: ProtoSupplyType.PURCHASED,
      processType: ProtoProcessType.NONE,
      baseUnit: ProtoUnitOfMeasure.KG,
      allergenDeclaration: '  Wheat  ',
      origin: '  UK  ',
      manufacturer: '  Test Mill  ',
      defaultSupplierId: undefined,
      packSizeDescription: '  25 kg bag  ',
      netContentDescription: '  25 kg  ',
    };

    const makeItem = (code: string) => ({
      id: 1,
      code,
      name: 'Test Flour',
      description: 'Premium flour',
      kind: 'RAW_MATERIAL',
      supplyType: 'PURCHASED',
      processType: 'NONE',
      baseUnit: 'KG',
      allergenDeclaration: 'Wheat',
      origin: 'UK',
      manufacturer: 'Test Mill',
      defaultSupplierId: null,
      packSizeDescription: '25 kg bag',
      netContentDescription: '25 kg',
      isActive: true,
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
      updatedAt: new Date('2026-01-02T00:00:00.000Z'),
    });

    it('creates a raw material with a zero-padded Item code', async () => {
      transactionMock.itemCodeSequence.upsert.mockResolvedValueOnce({
        prefix: 'RM',
        nextNumber: 2,
      });

      transactionMock.item.create.mockResolvedValueOnce(makeItem('RM-000001'));

      const result = await service.createItem(validRequest);

      expect(transactionMock.itemCodeSequence.upsert).toHaveBeenCalledWith({
        where: { prefix: 'RM' },
        create: { prefix: 'RM', nextNumber: 2 },
        update: { nextNumber: { increment: 1 } },
      });

      expect(transactionMock.item.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          code: 'RM-000001',
          name: 'Test Flour',
          description: 'Premium flour',
          allergenDeclaration: 'Wheat',
          origin: 'UK',
          manufacturer: 'Test Mill',
          defaultSupplierId: null,
          packSizeDescription: '25 kg bag',
          netContentDescription: '25 kg',
        }),
      });

      expect(result.item).toMatchObject({
        id: 1,
        code: 'RM-000001',
        name: 'Test Flour',
        kind: ProtoItemKind.RAW_MATERIAL,
        baseUnit: ProtoUnitOfMeasure.KG,
      });
    });

    it('uses the next available sequence number', async () => {
      transactionMock.itemCodeSequence.upsert.mockResolvedValueOnce({
        prefix: 'RM',
        nextNumber: 43,
      });

      transactionMock.item.create.mockResolvedValueOnce(makeItem('RM-000042'));

      await service.createItem(validRequest);

      expect(transactionMock.item.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          code: 'RM-000042',
        }),
      });
    });

    it('uses the packaging prefix for packaging Items', async () => {
      transactionMock.itemCodeSequence.upsert.mockResolvedValueOnce({
        prefix: 'PK',
        nextNumber: 2,
      });

      transactionMock.item.create.mockResolvedValueOnce({
        ...makeItem('PK-000001'),
        kind: 'PACKAGING',
      });

      await service.createItem({
        ...validRequest,
        kind: ProtoItemKind.PACKAGING,
      });

      expect(transactionMock.item.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          code: 'PK-000001',
          kind: 'PACKAGING',
        }),
      });
    });

    it('defaults unspecified supply and process types', async () => {
      transactionMock.itemCodeSequence.upsert.mockResolvedValueOnce({
        prefix: 'RM',
        nextNumber: 2,
      });

      transactionMock.item.create.mockResolvedValueOnce(makeItem('RM-000001'));

      await service.createItem({
        ...validRequest,
        supplyType: ProtoSupplyType.SUPPLY_TYPE_UNSPECIFIED,
        processType: ProtoProcessType.PROCESS_TYPE_UNSPECIFIED,
      });

      expect(transactionMock.item.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          supplyType: 'PURCHASED',
          processType: 'NONE',
        }),
      });
    });
  });

  describe('CreateItems validation', () => {
    const validItem: CreateItemRequest = {
      name: 'Test Flour',
      description: '',
      kind: ProtoItemKind.RAW_MATERIAL,
      supplyType: ProtoSupplyType.PURCHASED,
      processType: ProtoProcessType.NONE,
      baseUnit: ProtoUnitOfMeasure.KG,
      allergenDeclaration: '',
      origin: '',
      manufacturer: '',
      defaultSupplierId: undefined,
      packSizeDescription: '',
      netContentDescription: '',
    };

    it('rejects a missing Items array', async () => {
      await expect(
        service.createItems({
          items: undefined,
        } as unknown as Parameters<typeof service.createItems>[0]),
      ).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
          message: 'Items array is required',
        },
      });

      expect(prismaMock.client.$transaction).not.toHaveBeenCalled();
    });

    it('rejects an empty Items array', async () => {
      await expect(service.createItems({ items: [] })).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
          message: 'CreateItems requires between 1 and 100 items',
        },
      });

      expect(prismaMock.client.$transaction).not.toHaveBeenCalled();
    });

    it('rejects more than 100 Items', async () => {
      await expect(
        service.createItems({
          items: Array.from({ length: 101 }, () => ({ ...validItem })),
        }),
      ).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
          message: 'CreateItems requires between 1 and 100 items',
        },
      });

      expect(prismaMock.client.$transaction).not.toHaveBeenCalled();
    });

    it.each([
      [1, 0],
      [2, 1],
      [3, 2],
    ])('rejects an invalid Item at row %i', async (rowNumber, invalidIndex) => {
      const items = Array.from({ length: 3 }, (_, index) => ({
        ...validItem,
        name: index === invalidIndex ? '   ' : `Item ${index + 1}`,
      }));

      await expect(service.createItems({ items })).rejects.toMatchObject({
        error: {
          code: status.INVALID_ARGUMENT,
          message: `Item at row ${rowNumber} is invalid`,
        },
      });

      expect(prismaMock.client.$transaction).not.toHaveBeenCalled();
    });
  });

  describe('CreateItems successful bulk creation', () => {
    const makeRequestItem = (
      name: string,
      kind: ProtoItemKind = ProtoItemKind.RAW_MATERIAL,
    ): CreateItemRequest => ({
      name,
      description: '',
      kind,
      supplyType: ProtoSupplyType.PURCHASED,
      processType: ProtoProcessType.NONE,
      baseUnit: ProtoUnitOfMeasure.KG,
      allergenDeclaration: '',
      origin: '',
      manufacturer: '',
      defaultSupplierId: undefined,
      packSizeDescription: '',
      netContentDescription: '',
    });

    const makeDatabaseItem = (
      id: number,
      code: string,
      name: string,
      kind = 'RAW_MATERIAL',
    ) => ({
      id,
      code,
      name,
      description: null,
      kind,
      supplyType: 'PURCHASED',
      processType: 'NONE',
      baseUnit: 'KG',
      allergenDeclaration: null,
      origin: null,
      manufacturer: null,
      defaultSupplierId: null,
      packSizeDescription: null,
      netContentDescription: null,
      isActive: true,
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
      updatedAt: new Date('2026-01-02T00:00:00.000Z'),
    });

    it('generates sequential codes for Items of the same kind', async () => {
      transactionMock.itemCodeSequence.upsert.mockResolvedValueOnce({
        prefix: 'RM',
        nextNumber: 4,
      });

      transactionMock.item.create
        .mockResolvedValueOnce(makeDatabaseItem(1, 'RM-000001', 'Flour'))
        .mockResolvedValueOnce(makeDatabaseItem(2, 'RM-000002', 'Sugar'))
        .mockResolvedValueOnce(makeDatabaseItem(3, 'RM-000003', 'Salt'));

      const result = await service.createItems({
        items: [
          makeRequestItem('Flour'),
          makeRequestItem('Sugar'),
          makeRequestItem('Salt'),
        ],
      });

      expect(
        transactionMock.item.create.mock.calls.map(([call]) => call.data.code),
      ).toEqual(['RM-000001', 'RM-000002', 'RM-000003']);

      expect(result.items.map((item) => item.code)).toEqual([
        'RM-000001',
        'RM-000002',
        'RM-000003',
      ]);

      expect(transactionMock.itemCodeSequence.upsert).toHaveBeenCalledWith({
        where: { prefix: 'RM' },
        create: { prefix: 'RM', nextNumber: 4 },
        update: { nextNumber: { increment: 3 } },
      });
    });

    it('allocates independent sequences for different Item kinds', async () => {
      transactionMock.itemCodeSequence.upsert
        .mockResolvedValueOnce({ prefix: 'PK', nextNumber: 2 })
        .mockResolvedValueOnce({ prefix: 'RM', nextNumber: 3 });

      transactionMock.item.create
        .mockResolvedValueOnce(makeDatabaseItem(1, 'RM-000001', 'Flour'))
        .mockResolvedValueOnce(
          makeDatabaseItem(2, 'PK-000001', 'Box', 'PACKAGING'),
        )
        .mockResolvedValueOnce(makeDatabaseItem(3, 'RM-000002', 'Sugar'));

      const result = await service.createItems({
        items: [
          makeRequestItem('Flour'),
          makeRequestItem('Box', ProtoItemKind.PACKAGING),
          makeRequestItem('Sugar'),
        ],
      });

      expect(
        transactionMock.itemCodeSequence.upsert.mock.calls.map(
          ([call]) => call.where.prefix,
        ),
      ).toEqual(['PK', 'RM']);

      expect(
        transactionMock.item.create.mock.calls.map(([call]) => call.data.code),
      ).toEqual(['RM-000001', 'PK-000001', 'RM-000002']);

      expect(result.items.map((item) => item.code)).toEqual([
        'RM-000001',
        'PK-000001',
        'RM-000002',
      ]);
    });

    it('preserves the original request order', async () => {
      transactionMock.itemCodeSequence.upsert
        .mockResolvedValueOnce({ prefix: 'PK', nextNumber: 2 })
        .mockResolvedValueOnce({ prefix: 'RM', nextNumber: 2 });

      transactionMock.item.create
        .mockResolvedValueOnce(
          makeDatabaseItem(1, 'PK-000001', 'Box', 'PACKAGING'),
        )
        .mockResolvedValueOnce(makeDatabaseItem(2, 'RM-000001', 'Flour'));

      const result = await service.createItems({
        items: [
          makeRequestItem('Box', ProtoItemKind.PACKAGING),
          makeRequestItem('Flour'),
        ],
      });

      expect(result.items.map((item) => item.name)).toEqual(['Box', 'Flour']);
    });

    it('uses the configured Prisma transaction options', async () => {
      transactionMock.itemCodeSequence.upsert.mockResolvedValueOnce({
        prefix: 'RM',
        nextNumber: 2,
      });

      transactionMock.item.create.mockResolvedValueOnce(
        makeDatabaseItem(1, 'RM-000001', 'Flour'),
      );

      await service.createItems({
        items: [makeRequestItem('Flour')],
      });

      expect(prismaMock.client.$transaction).toHaveBeenCalledWith(
        expect.any(Function),
        {
          maxWait: 10000,
          timeout: 30000,
        },
      );
    });
  });

  describe('Item creation transaction errors', () => {
    const validItem: CreateItemRequest = {
      name: 'Test Flour',
      description: '',
      kind: ProtoItemKind.RAW_MATERIAL,
      supplyType: ProtoSupplyType.PURCHASED,
      processType: ProtoProcessType.NONE,
      baseUnit: ProtoUnitOfMeasure.KG,
      allergenDeclaration: '',
      origin: '',
      manufacturer: '',
      defaultSupplierId: undefined,
      packSizeDescription: '',
      netContentDescription: '',
    };

    const prismaError = (code: string, meta?: Record<string, unknown>) =>
      new Prisma.PrismaClientKnownRequestError('Test Prisma error', {
        code,
        clientVersion: 'test',
        ...(meta !== undefined ? { meta } : {}),
      });

    it.each([
      ['CreateItem', false],
      ['CreateItems', true],
    ] as const)(
      '%s rejects an exhausted Item code sequence',
      async (_operation, bulk) => {
        transactionMock.itemCodeSequence.upsert.mockResolvedValueOnce({
          prefix: 'RM',
          nextNumber: 1000001,
        });

        const operation = bulk
          ? service.createItems({ items: [validItem] })
          : service.createItem(validItem);

        await expect(operation).rejects.toMatchObject({
          error: {
            code: status.RESOURCE_EXHAUSTED,
            message: 'Item code sequence exhausted for RM',
          },
        });

        expect(transactionMock.item.create).not.toHaveBeenCalled();
      },
    );

    it('returns ALREADY_EXISTS for a non-sequence unique conflict', async () => {
      prismaMock.client.$transaction.mockRejectedValueOnce(
        prismaError('P2002', { target: ['code'] }),
      );

      await expect(service.createItem(validItem)).rejects.toMatchObject({
        error: {
          code: status.ALREADY_EXISTS,
          message: 'An item with the same unique value already exists',
        },
      });

      expect(prismaMock.client.$transaction).toHaveBeenCalledTimes(1);
    });

    it('returns INTERNAL for an unexpected transaction failure', async () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => undefined);

      try {
        prismaMock.client.$transaction.mockRejectedValueOnce(
          new Error('Database unavailable'),
        );

        await expect(service.createItem(validItem)).rejects.toMatchObject({
          error: {
            code: status.INTERNAL,
            message: 'Could not create items',
          },
        });

        expect(prismaMock.client.$transaction).toHaveBeenCalledTimes(1);
      } finally {
        consoleSpy.mockRestore();
      }
    });

    it('returns ABORTED after three transaction conflicts', async () => {
      prismaMock.client.$transaction
        .mockRejectedValueOnce(prismaError('P2034'))
        .mockRejectedValueOnce(prismaError('P2034'))
        .mockRejectedValueOnce(prismaError('P2034'));

      await expect(service.createItem(validItem)).rejects.toMatchObject({
        error: {
          code: status.ABORTED,
          message:
            'Item creation conflicted with another request. Please retry.',
        },
      });

      expect(prismaMock.client.$transaction).toHaveBeenCalledTimes(3);
    });

    it.each([
      {
        scenario: 'P2034 transaction conflict',
        error: () => prismaError('P2034'),
      },
      {
        scenario: 'P2002 sequence prefix conflict',
        error: () => prismaError('P2002', { target: ['prefix'] }),
      },
      {
        scenario: 'P2002 sequence constraint conflict',
        error: () =>
          prismaError('P2002', {
            target: 'ItemCodeSequence_prefix_key',
          }),
      },
    ])('retries and succeeds after $scenario', async ({ error }) => {
      const createdItem = {
        id: 1,
        code: 'RM-000001',
        name: 'Test Flour',
        description: null,
        kind: 'RAW_MATERIAL',
        supplyType: 'PURCHASED',
        processType: 'NONE',
        baseUnit: 'KG',
        allergenDeclaration: null,
        origin: null,
        manufacturer: null,
        defaultSupplierId: null,
        packSizeDescription: null,
        netContentDescription: null,
        isActive: true,
        createdAt: new Date('2026-01-01T00:00:00.000Z'),
        updatedAt: new Date('2026-01-02T00:00:00.000Z'),
      };

      prismaMock.client.$transaction.mockRejectedValueOnce(error());

      transactionMock.itemCodeSequence.upsert.mockResolvedValueOnce({
        prefix: 'RM',
        nextNumber: 2,
      });

      transactionMock.item.create.mockResolvedValueOnce(createdItem);

      const result = await service.createItem(validItem);

      expect(prismaMock.client.$transaction).toHaveBeenCalledTimes(2);

      expect(transactionMock.item.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          code: 'RM-000001',
          name: 'Test Flour',
        }),
      });

      expect(result.item).toMatchObject({
        id: 1,
        code: 'RM-000001',
        name: 'Test Flour',
      });
    });
  });

  describe('CreateItems transaction edge cases', () => {
    const makeItem = (name: string): CreateItemRequest => ({
      name,
      description: '',
      kind: ProtoItemKind.RAW_MATERIAL,
      supplyType: ProtoSupplyType.PURCHASED,
      processType: ProtoProcessType.NONE,
      baseUnit: ProtoUnitOfMeasure.KG,
      allergenDeclaration: '',
      origin: '',
      manufacturer: '',
      defaultSupplierId: undefined,
      packSizeDescription: '',
      netContentDescription: '',
    });

    const prismaError = (code: string) =>
      new Prisma.PrismaClientKnownRequestError('Test Prisma error', {
        code,
        clientVersion: 'test',
      });

    const databaseItem = (id: number, code: string, name: string) => ({
      id,
      code,
      name,
      description: null,
      kind: 'RAW_MATERIAL',
      supplyType: 'PURCHASED',
      processType: 'NONE',
      baseUnit: 'KG',
      allergenDeclaration: null,
      origin: null,
      manufacturer: null,
      defaultSupplierId: null,
      packSizeDescription: null,
      netContentDescription: null,
      isActive: true,
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
      updatedAt: new Date('2026-01-02T00:00:00.000Z'),
    });

    it('allows allocation of the final valid Item code', async () => {
      transactionMock.itemCodeSequence.upsert.mockResolvedValueOnce({
        prefix: 'RM',
        nextNumber: 1000000,
      });

      transactionMock.item.create.mockResolvedValueOnce(
        databaseItem(1, 'RM-999999', 'Flour'),
      );

      const result = await service.createItems({
        items: [makeItem('Flour')],
      });

      expect(result.items[0].code).toBe('RM-999999');
    });

    it('rejects a bulk allocation that exceeds the code limit', async () => {
      transactionMock.itemCodeSequence.upsert.mockResolvedValueOnce({
        prefix: 'RM',
        nextNumber: 1000001,
      });

      await expect(
        service.createItems({
          items: [makeItem('Flour'), makeItem('Sugar')],
        }),
      ).rejects.toMatchObject({
        error: {
          code: status.RESOURCE_EXHAUSTED,
          message: 'Item code sequence exhausted for RM',
        },
      });

      expect(transactionMock.item.create).not.toHaveBeenCalled();
    });

    it('returns ALREADY_EXISTS for a bulk unique constraint failure', async () => {
      prismaMock.client.$transaction.mockRejectedValueOnce(
        prismaError('P2002'),
      );

      await expect(
        service.createItems({
          items: [makeItem('Flour'), makeItem('Sugar')],
        }),
      ).rejects.toMatchObject({
        error: {
          code: status.ALREADY_EXISTS,
          message: 'An item with the same unique value already exists',
        },
      });

      expect(prismaMock.client.$transaction).toHaveBeenCalledTimes(1);
    });

    it('returns ABORTED when bulk transaction retries are exhausted', async () => {
      prismaMock.client.$transaction
        .mockRejectedValueOnce(prismaError('P2034'))
        .mockRejectedValueOnce(prismaError('P2034'))
        .mockRejectedValueOnce(prismaError('P2034'));

      await expect(
        service.createItems({
          items: [makeItem('Flour'), makeItem('Sugar')],
        }),
      ).rejects.toMatchObject({
        error: {
          code: status.ABORTED,
          message:
            'Item creation conflicted with another request. Please retry.',
        },
      });

      expect(prismaMock.client.$transaction).toHaveBeenCalledTimes(3);
    });

    it('propagates a failure from the second Item creation', async () => {
      transactionMock.itemCodeSequence.upsert.mockResolvedValueOnce({
        prefix: 'RM',
        nextNumber: 3,
      });

      transactionMock.item.create
        .mockResolvedValueOnce(databaseItem(1, 'RM-000001', 'Flour'))
        .mockRejectedValueOnce(prismaError('P2002'));

      await expect(
        service.createItems({
          items: [makeItem('Flour'), makeItem('Sugar')],
        }),
      ).rejects.toMatchObject({
        error: {
          code: status.ALREADY_EXISTS,
          message: 'An item with the same unique value already exists',
        },
      });

      expect(transactionMock.item.create).toHaveBeenCalledTimes(2);
      expect(prismaMock.client.$transaction).toHaveBeenCalledTimes(1);
    });
  });
});
