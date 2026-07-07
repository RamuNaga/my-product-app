import { OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@my-product-app/backend-prisma/workorder-client';
export declare class WorkorderPrismaService implements OnModuleDestroy {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    get client(): PrismaClient<import("@my-product-app/backend-prisma/workorder-client").Prisma.PrismaClientOptions, never, import("libs/backend/workorder-prisma/generated/workorder-client/runtime/client").DefaultArgs>;
    onModuleDestroy(): Promise<void>;
}
