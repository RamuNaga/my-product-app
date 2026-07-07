import { PrismaPg } from '@prisma/adapter-pg';
export declare const PRISMA_WORKORDER: unique symbol;
export declare const workorderPrismaProvider: {
    provide: symbol;
    useFactory: () => import("libs/backend/workorder-prisma/generated/workorder-client/runtime/client").DynamicClientExtensionThis<import("@my-product-app/backend-prisma/workorder-client").Prisma.TypeMap<import("libs/backend/workorder-prisma/generated/workorder-client/runtime/client").InternalArgs & {
        result: {};
        model: {};
        query: {};
        client: {};
    }, {}>, import("@my-product-app/backend-prisma/workorder-client").Prisma.TypeMapCb<{
        adapter: PrismaPg;
    }>, {
        result: {};
        model: {};
        query: {};
        client: {};
    }>;
};
