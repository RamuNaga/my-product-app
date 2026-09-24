import { OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'company-location-prisma-client';
export declare class CompanyLocationPrismaService implements OnModuleDestroy {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    get client(): PrismaClient<import("company-location-prisma-client").Prisma.PrismaClientOptions, never, import("company-location-prisma-client/runtime/client").DefaultArgs>;
    onModuleDestroy(): Promise<void>;
}
