import { PrismaClient } from '@my-product-app/backend-prisma/user-client';
import { PrismaPg } from '@prisma/adapter-pg';
export declare const PRISMA_USER: unique symbol;
export declare const userPrismaProvider: {
    provide: symbol;
    useFactory: () => PrismaClient<{
        adapter: PrismaPg;
    }, never, import("libs/backend/user-prisma/generated/user-client/runtime/client").DefaultArgs>;
};
//# sourceMappingURL=user-prisma.provider.d.ts.map