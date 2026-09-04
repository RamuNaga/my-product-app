import { OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'workorder-prisma-client';
export declare class WorkorderPrismaService implements OnModuleDestroy {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    get client(): PrismaClient<import("workorder-prisma-client").Prisma.PrismaClientOptions, never, import("workorder-prisma-client/runtime/client").DefaultArgs>;
    onModuleDestroy(): Promise<void>;
}
