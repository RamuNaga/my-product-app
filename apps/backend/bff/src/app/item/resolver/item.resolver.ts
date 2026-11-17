import { Logger, UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { status } from '@grpc/grpc-js';
import { GraphQLError } from 'graphql';

import { JwtAuthGuard } from '@my-product-app/backend-shared';
import { ItemGrpcClientService } from '@my-product-app/product';

import {
  Item,
  ItemKind,
  SupplyType,
  ProcessType,
  UnitOfMeasure,
  CreateItemInput,
  CreateItemsInput,
  UpdateItemInput,
} from '@my-product-app/backend-graphql-types';

import {
  CreateItemRequest,
  UpdateItemRequest,
  ProtoItemKind,
  ProtoSupplyType,
  ProtoProcessType,
  ProtoUnitOfMeasure,
} from '@my-product-app/backend-proto/generated';

import type { ProtoItem } from '@my-product-app/backend-proto/generated';

type GrpcError = {
  code?: number;
  details?: string;
};

const KIND_TO_PROTO: Record<ItemKind, ProtoItemKind> = {
  [ItemKind.RAW_MATERIAL]: ProtoItemKind.RAW_MATERIAL,
  [ItemKind.PURCHASED_PREPARED]: ProtoItemKind.PURCHASED_PREPARED,
  [ItemKind.MANUFACTURED_COMPONENT]: ProtoItemKind.MANUFACTURED_COMPONENT,
  [ItemKind.SAUCE]: ProtoItemKind.SAUCE,
  [ItemKind.GARNISH]: ProtoItemKind.GARNISH,
  [ItemKind.PACKAGING]: ProtoItemKind.PACKAGING,
  [ItemKind.OTHER]: ProtoItemKind.OTHER,
};

const SUPPLY_TO_PROTO: Record<SupplyType, ProtoSupplyType> = {
  [SupplyType.PURCHASED]: ProtoSupplyType.PURCHASED,
  [SupplyType.MANUFACTURED]: ProtoSupplyType.MANUFACTURED,
  [SupplyType.BOTH]: ProtoSupplyType.BOTH,
};

const PROCESS_TO_PROTO: Record<ProcessType, ProtoProcessType> = {
  [ProcessType.NONE]: ProtoProcessType.NONE,
  [ProcessType.OVEN]: ProtoProcessType.OVEN,
  [ProcessType.STEAM]: ProtoProcessType.STEAM,
  [ProcessType.SAUCE_PREPARATION]: ProtoProcessType.SAUCE_PREPARATION,
  [ProcessType.MIXING]: ProtoProcessType.MIXING,
  [ProcessType.OTHER_PROCESS]: ProtoProcessType.OTHER_PROCESS,
};

const UNIT_TO_PROTO: Record<UnitOfMeasure, ProtoUnitOfMeasure> = {
  [UnitOfMeasure.G]: ProtoUnitOfMeasure.G,
  [UnitOfMeasure.KG]: ProtoUnitOfMeasure.KG,
  [UnitOfMeasure.ML]: ProtoUnitOfMeasure.ML,
  [UnitOfMeasure.L]: ProtoUnitOfMeasure.L,
  [UnitOfMeasure.EACH]: ProtoUnitOfMeasure.EACH,
};

function reverseEnum<T extends string>(
  value: number,
  mapping: Record<T, number>,
  field: string,
): T {
  const entry = Object.entries(mapping).find(
    ([, protoValue]) => protoValue === value,
  );

  if (!entry) {
    throw new GraphQLError(`Unknown ${field} value returned by Item Service`, {
      extensions: { code: 'INTERNAL_SERVER_ERROR' },
    });
  }

  return entry[0] as T;
}

function mapItem(item: ProtoItem): Item {
  return {
    id: item.id,
    code: item.code,
    name: item.name,
    description: item.description,
    kind: reverseEnum(item.kind, KIND_TO_PROTO, 'item kind'),
    supplyType: reverseEnum(item.supplyType, SUPPLY_TO_PROTO, 'supply type'),
    processType: reverseEnum(
      item.processType,
      PROCESS_TO_PROTO,
      'process type',
    ),
    baseUnit: reverseEnum(item.baseUnit, UNIT_TO_PROTO, 'base unit'),
    allergenDeclaration: item.allergenDeclaration,
    origin: item.origin,
    manufacturer: item.manufacturer,
    defaultSupplierId: item.defaultSupplierId ?? null,
    packSizeDescription: item.packSizeDescription,
    netContentDescription: item.netContentDescription,
    isActive: item.isActive,
    createdAt: new Date(item.createdAt),
    updatedAt: new Date(item.updatedAt),
  };
}

function mapCreateInput(input: CreateItemInput): CreateItemRequest {
  return {
    name: input.name,
    description: input.description ?? '',
    kind: KIND_TO_PROTO[input.kind],
    supplyType: SUPPLY_TO_PROTO[input.supplyType],
    processType: PROCESS_TO_PROTO[input.processType],
    baseUnit: UNIT_TO_PROTO[input.baseUnit],
    allergenDeclaration: input.allergenDeclaration ?? '',
    origin: input.origin ?? '',
    manufacturer: input.manufacturer ?? '',
    defaultSupplierId: input.defaultSupplierId ?? undefined,
    packSizeDescription: input.packSizeDescription ?? '',
    netContentDescription: input.netContentDescription ?? '',
  };
}

function mapUpdateInput(input: UpdateItemInput): UpdateItemRequest {
  if (
    input.clearDefaultSupplierId === true &&
    input.defaultSupplierId != null
  ) {
    throw new GraphQLError(
      'Cannot set and clear default supplier in the same request',
      { extensions: { code: 'BAD_USER_INPUT' } },
    );
  }

  return {
    id: input.id,
    name: input.name ?? undefined,
    description: input.description ?? undefined,
    supplyType:
      input.supplyType == null ? undefined : SUPPLY_TO_PROTO[input.supplyType],
    processType:
      input.processType == null
        ? undefined
        : PROCESS_TO_PROTO[input.processType],
    baseUnit:
      input.baseUnit == null ? undefined : UNIT_TO_PROTO[input.baseUnit],
    allergenDeclaration: input.allergenDeclaration ?? undefined,
    origin: input.origin ?? undefined,
    manufacturer: input.manufacturer ?? undefined,
    defaultSupplierId: input.defaultSupplierId ?? undefined,
    packSizeDescription: input.packSizeDescription ?? undefined,
    netContentDescription: input.netContentDescription ?? undefined,
    clearDefaultSupplierId: input.clearDefaultSupplierId ?? false,
  };
}

@UseGuards(JwtAuthGuard)
@Resolver(() => Item)
export class ItemResolver {
  private readonly logger = new Logger(ItemResolver.name);

  constructor(private readonly itemGrpcClient: ItemGrpcClientService) {}

  @Query(() => [Item], { name: 'items' })
  async items(): Promise<Item[]> {
    try {
      const response = await this.itemGrpcClient.getAllItems();
      return response.items.map(mapItem);
    } catch (error: unknown) {
      this.throwGraphQLError(error, 'Failed to fetch items');
    }
  }

  @Query(() => Item, { name: 'item' })
  async item(@Args('id', { type: () => Int }) id: number): Promise<Item> {
    try {
      const response = await this.itemGrpcClient.getItemById({ id });
      return mapItem(this.requireItem(response.item));
    } catch (error: unknown) {
      this.throwGraphQLError(error, 'Failed to fetch item');
    }
  }

  @Mutation(() => Item)
  async createItem(@Args('input') input: CreateItemInput): Promise<Item> {
    try {
      const response = await this.itemGrpcClient.createItem(
        mapCreateInput(input),
      );

      return mapItem(this.requireItem(response.item));
    } catch (error: unknown) {
      this.throwGraphQLError(error, 'Failed to create item');
    }
  }

  @Mutation(() => [Item])
  async createItems(@Args('input') input: CreateItemsInput): Promise<Item[]> {
    try {
      const response = await this.itemGrpcClient.createItems({
        items: input.items.map(mapCreateInput),
      });

      return response.items.map(mapItem);
    } catch (error: unknown) {
      this.throwGraphQLError(error, 'Failed to create items');
    }
  }

  @Mutation(() => Item)
  async updateItem(@Args('input') input: UpdateItemInput): Promise<Item> {
    try {
      const response = await this.itemGrpcClient.updateItem(
        mapUpdateInput(input),
      );

      return mapItem(this.requireItem(response.item));
    } catch (error: unknown) {
      this.throwGraphQLError(error, 'Failed to update item');
    }
  }

  @Mutation(() => Item)
  async deactivateItem(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Item> {
    try {
      const response = await this.itemGrpcClient.deactivateItem({ id });
      return mapItem(this.requireItem(response.item));
    } catch (error: unknown) {
      this.throwGraphQLError(error, 'Failed to deactivate item');
    }
  }

  @Mutation(() => Item)
  async reactivateItem(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Item> {
    try {
      const response = await this.itemGrpcClient.reactivateItem({ id });
      return mapItem(this.requireItem(response.item));
    } catch (error: unknown) {
      this.throwGraphQLError(error, 'Failed to reactivate item');
    }
  }

  private requireItem(item: ProtoItem | undefined): ProtoItem {
    if (!item) {
      throw new GraphQLError('Item Service returned an empty item response', {
        extensions: { code: 'INTERNAL_SERVER_ERROR' },
      });
    }

    return item;
  }

  private throwGraphQLError(error: unknown, fallbackMessage: string): never {
    if (error instanceof GraphQLError) {
      throw error;
    }

    const grpcError = error as GrpcError;
    const grpcCode = grpcError?.code;

    switch (grpcCode) {
      case status.INVALID_ARGUMENT:
        throw new GraphQLError(grpcError.details || 'Invalid item data', {
          extensions: { code: 'BAD_USER_INPUT', grpcCode },
        });

      case status.ALREADY_EXISTS:
        throw new GraphQLError(grpcError.details || 'Item already exists', {
          extensions: { code: 'CONFLICT', grpcCode },
        });

      case status.NOT_FOUND:
        throw new GraphQLError(grpcError.details || 'Item not found', {
          extensions: { code: 'NOT_FOUND', grpcCode },
        });

      case status.FAILED_PRECONDITION:
        throw new GraphQLError(
          grpcError.details || 'Item operation is not permitted',
          {
            extensions: { code: 'FAILED_PRECONDITION', grpcCode },
          },
        );

      default:
        this.logger.error(
          fallbackMessage,
          error instanceof Error ? error.stack : String(error),
        );

        throw new GraphQLError(fallbackMessage, {
          extensions: { code: 'INTERNAL_SERVER_ERROR' },
        });
    }
  }
}
