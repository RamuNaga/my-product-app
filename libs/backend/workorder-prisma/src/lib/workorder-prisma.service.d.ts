import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@my-product-app/backend-prisma/workorder-client';
export declare class WorkorderPrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
