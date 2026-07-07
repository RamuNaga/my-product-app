import { OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@my-product-app/backend-prisma/product-client';
export declare class ProductPrismaService implements OnModuleDestroy {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    get client(): PrismaClient<import("@my-product-app/backend-prisma/product-client").Prisma.PrismaClientOptions, never, import("libs/backend/product-prisma/generated/product-client/runtime/client").DefaultArgs>;
    onModuleDestroy(): Promise<void>;
}
