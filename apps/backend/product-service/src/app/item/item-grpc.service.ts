import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

import {
  CreateItemRequest,
  CreateItemsRequest,
  CreateItemsResponse,
  GetItemByIdRequest,
  EmptyRequest,
  ItemResponse,
  ItemListResponse,
  ProtoItemKind,
  ProtoSupplyType,
  ProtoProcessType,
  ProtoUnitOfMeasure,
} from '@my-product-app/backend-proto/generated';

import {
  ProductPrismaService,
  Prisma,
} from '@my-product-app/backend-prisma/product-prisma';

type ItemRecord = Prisma.ItemGetPayload<Record<string, never>>;
type ItemCreateData = Prisma.ItemCreateInput;

const MAX_BULK_ITEMS = 100;
const MAX_CODE_NUMBER = 999999;
const MAX_TRANSACTION_ATTEMPTS = 3;
const RETRY_DELAY_MS = 50;

const KIND_MAP = {
  [ProtoItemKind.RAW_MATERIAL]: 'RAW_MATERIAL',
  [ProtoItemKind.PURCHASED_PREPARED]: 'PURCHASED_PREPARED',
  [ProtoItemKind.MANUFACTURED_COMPONENT]: 'MANUFACTURED_COMPONENT',
  [ProtoItemKind.SAUCE]: 'SAUCE',
  [ProtoItemKind.GARNISH]: 'GARNISH',
  [ProtoItemKind.PACKAGING]: 'PACKAGING',
  [ProtoItemKind.OTHER]: 'OTHER',
} as const;

const SUPPLY_MAP = {
  [ProtoSupplyType.PURCHASED]: 'PURCHASED',
  [ProtoSupplyType.MANUFACTURED]: 'MANUFACTURED',
  [ProtoSupplyType.BOTH]: 'BOTH',
} as const;

const PROCESS_MAP = {
  [ProtoProcessType.NONE]: 'NONE',
  [ProtoProcessType.OVEN]: 'OVEN',
  [ProtoProcessType.STEAM]: 'STEAM',
  [ProtoProcessType.SAUCE_PREPARATION]: 'SAUCE_PREPARATION',
  [ProtoProcessType.MIXING]: 'MIXING',
  [ProtoProcessType.OTHER_PROCESS]: 'OTHER',
} as const;

const UNIT_MAP = {
  [ProtoUnitOfMeasure.G]: 'G',
  [ProtoUnitOfMeasure.KG]: 'KG',
  [ProtoUnitOfMeasure.ML]: 'ML',
  [ProtoUnitOfMeasure.L]: 'L',
  [ProtoUnitOfMeasure.EACH]: 'EACH',
} as const;

const PREFIX_MAP: Record<string, string> = {
  RAW_MATERIAL: 'RM',
  PURCHASED_PREPARED: 'PP',
  MANUFACTURED_COMPONENT: 'MC',
  SAUCE: 'SC',
  GARNISH: 'GN',
  PACKAGING: 'PK',
  OTHER: 'OT',
};

function rpcError(code: number, message: string): never {
  throw new RpcException({ code, message });
}

function enumValue<T extends string>(
  value: number,
  mapping: Record<number, T>,
  field: string,
): T {
  const result = mapping[value];

  if (result === undefined) {
    return rpcError(status.INVALID_ARGUMENT, `Invalid ${field}`);
  }

  return result;
}

function optionalText(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed || null;
}

type PreparedItem = Omit<ItemCreateData, 'code'> & {
  prefix: string;
};

@Injectable()
export class ItemGrpcService {
  constructor(private readonly prisma: ProductPrismaService) {}

  async createItem(request: CreateItemRequest): Promise<ItemResponse> {
    const prepared = this.prepareItem(request);
    const [item] = await this.createPreparedItems([prepared]);

    return { item: this.mapToProtoItem(item) };
  }

  async createItems(request: CreateItemsRequest): Promise<CreateItemsResponse> {
    if (!Array.isArray(request.items)) {
      return rpcError(status.INVALID_ARGUMENT, 'Items array is required');
    }

    if (request.items.length === 0 || request.items.length > MAX_BULK_ITEMS) {
      return rpcError(
        status.INVALID_ARGUMENT,
        `CreateItems requires between 1 and ${MAX_BULK_ITEMS} items`,
      );
    }

    // Validate every row before making database changes.
    const prepared = request.items.map((item, index) => {
      try {
        return this.prepareItem(item);
      } catch (error) {
        if (error instanceof RpcException) {
          return rpcError(
            status.INVALID_ARGUMENT,
            `Item at row ${index + 1} is invalid`,
          );
        }

        throw error;
      }
    });

    const items = await this.createPreparedItems(prepared);

    return {
      items: items.map((item) => this.mapToProtoItem(item)),
    };
  }

  private prepareItem(request: CreateItemRequest): PreparedItem {
    const name = request.name?.trim();

    if (!name) {
      return rpcError(status.INVALID_ARGUMENT, 'Item name is required');
    }

    const kind = enumValue(request.kind, KIND_MAP, 'item kind');

    const supplyType =
      request.supplyType === ProtoSupplyType.SUPPLY_TYPE_UNSPECIFIED
        ? 'PURCHASED'
        : enumValue(request.supplyType, SUPPLY_MAP, 'supply type');

    const processType =
      request.processType === ProtoProcessType.PROCESS_TYPE_UNSPECIFIED
        ? 'NONE'
        : enumValue(request.processType, PROCESS_MAP, 'process type');

    const baseUnit = enumValue(request.baseUnit, UNIT_MAP, 'base unit');

    const supplierId = request.defaultSupplierId;

    if (
      supplierId != null &&
      (!Number.isInteger(supplierId) || supplierId <= 0)
    ) {
      return rpcError(
        status.INVALID_ARGUMENT,
        'Default supplier ID must be a positive integer',
      );
    }

    return {
      prefix: PREFIX_MAP[kind],
      name,
      description: optionalText(request.description),
      kind,
      supplyType,
      processType,
      baseUnit,
      allergenDeclaration: optionalText(request.allergenDeclaration),
      origin: optionalText(request.origin),
      manufacturer: optionalText(request.manufacturer),
      defaultSupplierId: supplierId ?? null,
      packSizeDescription: optionalText(request.packSizeDescription),
      netContentDescription: optionalText(request.netContentDescription),
    };
  }

  private async createPreparedItems(
    prepared: PreparedItem[],
  ): Promise<ItemRecord[]> {
    for (let attempt = 1; attempt <= MAX_TRANSACTION_ATTEMPTS; attempt++) {
      try {
        return await this.prisma.client.$transaction(
          async (tx) => {
            const created: ItemRecord[] = [];

            // Count required codes per prefix.
            const counts = new Map<string, number>();

            for (const item of prepared) {
              counts.set(item.prefix, (counts.get(item.prefix) ?? 0) + 1);
            }

            const allocations = new Map<string, number>();

            // Consistent ordering reduces deadlock risk.
            for (const prefix of [...counts.keys()].sort()) {
              const count = counts.get(prefix)!;

              const sequence = await tx.itemCodeSequence.upsert({
                where: { prefix },
                create: {
                  prefix,
                  nextNumber: count + 1,
                },
                update: {
                  nextNumber: { increment: count },
                },
              });

              const firstNumber = sequence.nextNumber - count;

              if (
                firstNumber < 1 ||
                sequence.nextNumber - 1 > MAX_CODE_NUMBER
              ) {
                return rpcError(
                  status.RESOURCE_EXHAUSTED,
                  `Item code sequence exhausted for ${prefix}`,
                );
              }

              allocations.set(prefix, firstNumber);
            }

            // Create every item within the same transaction.
            for (const preparedItem of prepared) {
              const { prefix, ...data } = preparedItem;

              const nextNumber = allocations.get(prefix)!;
              allocations.set(prefix, nextNumber + 1);

              const code = `${prefix}-${String(nextNumber).padStart(6, '0')}`;

              const item = await tx.item.create({
                data: {
                  ...data,
                  code,
                },
              });

              created.push(item);
            }

            return created;
          },
          {
            maxWait: 10000,
            timeout: 30000,
          },
        );
      } catch (error: unknown) {
        // Preserve intentional gRPC business errors.
        if (error instanceof RpcException) {
          throw error;
        }

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const isRetryable = error.code === 'P2034' || error.code === 'P2002';

          if (isRetryable && attempt < MAX_TRANSACTION_ATTEMPTS) {
            // Small exponential backoff before retrying.
            const delay = RETRY_DELAY_MS * Math.pow(2, attempt - 1);

            await new Promise<void>((resolve) => setTimeout(resolve, delay));

            continue;
          }

          if (isRetryable) {
            return rpcError(
              status.ABORTED,
              'Item creation conflicted with another request. Please retry.',
            );
          }
        }

        console.error('Item creation transaction failed:', error);

        return rpcError(status.INTERNAL, 'Could not create items');
      }
    }

    return rpcError(
      status.ABORTED,
      'Item creation could not complete. Please retry.',
    );
  }

  async getItemById(request: GetItemByIdRequest): Promise<ItemResponse> {
    if (!Number.isInteger(request.id) || request.id <= 0) {
      return rpcError(status.INVALID_ARGUMENT, 'Valid Item ID is required');
    }

    const item = await this.prisma.client.item.findUnique({
      where: { id: request.id },
    });

    if (!item) {
      return rpcError(status.NOT_FOUND, 'Item not found');
    }

    return { item: this.mapToProtoItem(item) };
  }

  async getAllItems(_request: EmptyRequest): Promise<ItemListResponse> {
    const items = await this.prisma.client.item.findMany({
      orderBy: { id: 'asc' },
    });

    return {
      items: items.map((item) => this.mapToProtoItem(item)),
    };
  }

  private mapToProtoItem(item: ItemRecord) {
    const reverseEnum = (
      mapping: Record<number, string>,
      value: string,
    ): number => {
      const entry = Object.entries(mapping).find(([, name]) => name === value);

      if (!entry) {
        throw new Error(`Unsupported enum value: ${value}`);
      }

      return Number(entry[0]);
    };

    return {
      id: item.id,
      code: item.code,
      name: item.name,
      description: item.description ?? '',
      kind: reverseEnum(KIND_MAP, item.kind),
      supplyType: reverseEnum(SUPPLY_MAP, item.supplyType),
      processType: reverseEnum(PROCESS_MAP, item.processType),
      baseUnit: reverseEnum(UNIT_MAP, item.baseUnit),
      allergenDeclaration: item.allergenDeclaration ?? '',
      origin: item.origin ?? '',
      manufacturer: item.manufacturer ?? '',
      defaultSupplierId: item.defaultSupplierId ?? undefined,
      packSizeDescription: item.packSizeDescription ?? '',
      netContentDescription: item.netContentDescription ?? '',
      isActive: item.isActive,
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
    };
  }
}
