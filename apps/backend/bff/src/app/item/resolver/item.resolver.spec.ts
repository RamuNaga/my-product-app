import { status } from '@grpc/grpc-js';
import { GraphQLError } from 'graphql';

import { ItemGrpcClientService } from '@my-product-app/product';
import {
  ItemKind,
  ProcessType,
  SupplyType,
  UnitOfMeasure,
  CreateItemInput,
  UpdateItemInput,
} from '@my-product-app/backend-graphql-types';
import {
  ProtoItemKind,
  ProtoProcessType,
  ProtoSupplyType,
  ProtoUnitOfMeasure,
} from '@my-product-app/backend-proto/generated';

import type { ProtoItem } from '@my-product-app/backend-proto/generated';

import { ItemResolver } from './item.resolver';

describe('ItemResolver', () => {
  const grpcItem: ProtoItem = {
    id: 1,
    code: 'RM-000001',
    name: 'Flour',
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
    isActive: true,
    createdAt: '2026-11-11T10:00:00.000Z',
    updatedAt: '2026-11-11T10:00:00.000Z',
  };

  let resolver: ItemResolver;

  const grpcClient = {
    getAllItems: jest.fn(),
    getItemById: jest.fn(),
    createItem: jest.fn(),
    createItems: jest.fn(),
    updateItem: jest.fn(),
    deactivateItem: jest.fn(),
    reactivateItem: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();

    resolver = new ItemResolver(grpcClient as unknown as ItemGrpcClientService);
  });

  describe('items', () => {
    it('returns mapped items', async () => {
      grpcClient.getAllItems.mockResolvedValue({
        items: [grpcItem],
      });

      const result = await resolver.items();

      expect(grpcClient.getAllItems).toHaveBeenCalledTimes(1);
      expect(result).toHaveLength(1);

      expect(result[0]).toMatchObject({
        id: 1,
        code: 'RM-000001',
        name: 'Flour',
        kind: ItemKind.RAW_MATERIAL,
        supplyType: SupplyType.PURCHASED,
        processType: ProcessType.NONE,
        baseUnit: UnitOfMeasure.KG,
        defaultSupplierId: null,
        isActive: true,
      });

      expect(result[0].createdAt).toEqual(new Date('2026-11-11T10:00:00.000Z'));

      expect(result[0].updatedAt).toBeInstanceOf(Date);
    });

    it('returns an empty array when no items exist', async () => {
      grpcClient.getAllItems.mockResolvedValue({
        items: [],
      });

      await expect(resolver.items()).resolves.toEqual([]);
    });

    it('rejects unknown protobuf enum values', async () => {
      grpcClient.getAllItems.mockResolvedValue({
        items: [{ ...grpcItem, kind: 999 }],
      });

      await expect(resolver.items()).rejects.toMatchObject({
        extensions: {
          code: 'INTERNAL_SERVER_ERROR',
        },
      });
    });
  });

  describe('item', () => {
    it('retrieves an item by ID', async () => {
      grpcClient.getItemById.mockResolvedValue({
        item: grpcItem,
      });

      const result = await resolver.item(1);

      expect(grpcClient.getItemById).toHaveBeenCalledWith({
        id: 1,
      });

      expect(result.id).toBe(1);
      expect(result.name).toBe('Flour');
    });

    it('rejects an empty item response', async () => {
      grpcClient.getItemById.mockResolvedValue({
        item: undefined,
      });

      await expect(resolver.item(1)).rejects.toMatchObject({
        extensions: {
          code: 'INTERNAL_SERVER_ERROR',
        },
      });
    });

    it('maps gRPC NOT_FOUND to GraphQL NOT_FOUND', async () => {
      grpcClient.getItemById.mockRejectedValue({
        code: status.NOT_FOUND,
        details: 'Item not found',
      });

      try {
        await resolver.item(999);
        throw new Error('Expected resolver to throw');
      } catch (error) {
        expect(error).toBeInstanceOf(GraphQLError);

        expect((error as GraphQLError).extensions).toMatchObject({
          code: 'NOT_FOUND',
          grpcCode: status.NOT_FOUND,
        });
      }
    });
  });

  const createInput: CreateItemInput = {
    name: 'Flour',
    kind: ItemKind.RAW_MATERIAL,
    supplyType: SupplyType.PURCHASED,
    processType: ProcessType.NONE,
    baseUnit: UnitOfMeasure.KG,
  };

  describe('createItem', () => {
    it('maps GraphQL input to protobuf and returns the created item', async () => {
      grpcClient.createItem.mockResolvedValue({ item: grpcItem });

      const result = await resolver.createItem(createInput);

      expect(grpcClient.createItem).toHaveBeenCalledWith({
        name: 'Flour',
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

      expect(result.code).toBe('RM-000001');
    });

    it('maps gRPC INVALID_ARGUMENT to BAD_USER_INPUT', async () => {
      grpcClient.createItem.mockRejectedValue({
        code: status.INVALID_ARGUMENT,
        details: 'Invalid item data',
      });

      await expect(resolver.createItem(createInput)).rejects.toMatchObject({
        extensions: {
          code: 'BAD_USER_INPUT',
          grpcCode: status.INVALID_ARGUMENT,
        },
      });
    });

    it('maps gRPC ALREADY_EXISTS to CONFLICT', async () => {
      grpcClient.createItem.mockRejectedValue({
        code: status.ALREADY_EXISTS,
        details: 'Item already exists',
      });

      await expect(resolver.createItem(createInput)).rejects.toMatchObject({
        extensions: {
          code: 'CONFLICT',
          grpcCode: status.ALREADY_EXISTS,
        },
      });
    });
  });

  describe('createItems', () => {
    it('creates multiple items', async () => {
      const secondItem = {
        ...grpcItem,
        id: 2,
        code: 'RM-000002',
        name: 'Sugar',
      };

      grpcClient.createItems.mockResolvedValue({
        items: [grpcItem, secondItem],
      });

      const result = await resolver.createItems({
        items: [createInput, { ...createInput, name: 'Sugar' }],
      });

      expect(grpcClient.createItems).toHaveBeenCalledWith({
        items: [
          expect.objectContaining({ name: 'Flour' }),
          expect.objectContaining({ name: 'Sugar' }),
        ],
      });

      expect(result).toHaveLength(2);
      expect(result.map((item) => item.code)).toEqual([
        'RM-000001',
        'RM-000002',
      ]);
    });
  });

  describe('updateItem', () => {
    it('preserves empty strings for clearing optional fields', async () => {
      const input: UpdateItemInput = {
        id: 1,
        description: '',
        origin: '',
      };

      grpcClient.updateItem.mockResolvedValue({ item: grpcItem });

      await resolver.updateItem(input);

      expect(grpcClient.updateItem).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 1,
          description: '',
          origin: '',
          clearDefaultSupplierId: false,
        }),
      );
    });

    it('supports clearing the default supplier', async () => {
      grpcClient.updateItem.mockResolvedValue({ item: grpcItem });

      await resolver.updateItem({
        id: 1,
        clearDefaultSupplierId: true,
      });

      expect(grpcClient.updateItem).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 1,
          defaultSupplierId: undefined,
          clearDefaultSupplierId: true,
        }),
      );
    });

    it('rejects setting and clearing the supplier simultaneously', async () => {
      await expect(
        resolver.updateItem({
          id: 1,
          defaultSupplierId: 5,
          clearDefaultSupplierId: true,
        }),
      ).rejects.toMatchObject({
        extensions: { code: 'BAD_USER_INPUT' },
      });

      expect(grpcClient.updateItem).not.toHaveBeenCalled();
    });

    it('maps gRPC FAILED_PRECONDITION correctly', async () => {
      grpcClient.updateItem.mockRejectedValue({
        code: status.FAILED_PRECONDITION,
        details: 'Item cannot be updated',
      });

      await expect(
        resolver.updateItem({ id: 1, name: 'Updated Flour' }),
      ).rejects.toMatchObject({
        extensions: {
          code: 'FAILED_PRECONDITION',
          grpcCode: status.FAILED_PRECONDITION,
        },
      });
    });
  });

  describe('deactivateItem', () => {
    it('deactivates an item', async () => {
      grpcClient.deactivateItem.mockResolvedValue({
        item: { ...grpcItem, isActive: false },
      });

      const result = await resolver.deactivateItem(1);

      expect(grpcClient.deactivateItem).toHaveBeenCalledWith({ id: 1 });
      expect(result.isActive).toBe(false);
    });
  });

  describe('reactivateItem', () => {
    it('reactivates an item', async () => {
      grpcClient.reactivateItem.mockResolvedValue({
        item: { ...grpcItem, isActive: true },
      });

      const result = await resolver.reactivateItem(1);

      expect(grpcClient.reactivateItem).toHaveBeenCalledWith({ id: 1 });
      expect(result.isActive).toBe(true);
    });
  });
});
