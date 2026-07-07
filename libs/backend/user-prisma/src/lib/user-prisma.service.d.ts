import { OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@my-product-app/backend-prisma/user-client';
export declare class UserPrismaService implements OnModuleDestroy {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    get client(): PrismaClient<import("@my-product-app/backend-prisma/user-client").Prisma.PrismaClientOptions, never, import("libs/backend/user-prisma/generated/user-client/runtime/client").DefaultArgs>;
    onModuleDestroy(): Promise<void>;
}
//# sourceMappingURL=user-prisma.service.d.ts.map