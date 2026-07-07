import { OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@my-product-app/backend-prisma/company-location-client';
export declare class CompanyLocationPrismaService implements OnModuleDestroy {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    get client(): PrismaClient<import("@my-product-app/backend-prisma/company-location-client").Prisma.PrismaClientOptions, never, import("libs/backend/company-location-prisma/generated/company-location-client/runtime/client").DefaultArgs>;
    onModuleDestroy(): Promise<void>;
}
