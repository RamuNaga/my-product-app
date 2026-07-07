import { PrismaPg } from '@prisma/adapter-pg';
export declare const PRISMA_USER: unique symbol;
export declare const userPrismaProvider: {
    provide: symbol;
    useFactory: () => import("libs/backend/user-prisma/generated/user-client/runtime/client").DynamicClientExtensionThis<import("@my-product-app/backend-prisma/user-client").Prisma.TypeMap<import("libs/backend/user-prisma/generated/user-client/runtime/client").InternalArgs & {
        result: {};
        model: {};
        query: {};
        client: {};
    }, {}>, import("@my-product-app/backend-prisma/user-client").Prisma.TypeMapCb<{
        adapter: PrismaPg;
    }>, {
        result: {};
        model: {};
        query: {};
        client: {};
    }>;
};
//# sourceMappingURL=user-prisma.provider.d.ts.map