import { OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'product-prisma-client';
export declare class ProductPrismaService implements OnModuleDestroy {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    get client(): PrismaClient<import("product-prisma-client").Prisma.PrismaClientOptions, never, import("product-prisma-client/runtime/client").DefaultArgs>;
    onModuleDestroy(): Promise<void>;
}
