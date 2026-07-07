import { PrismaPg } from '@prisma/adapter-pg';
export declare const PRISMA_PRODUCT: unique symbol;
export declare const productPrismaProvider: {
    provide: symbol;
    useFactory: () => import("libs/backend/product-prisma/generated/product-client/runtime/client").DynamicClientExtensionThis<import("@my-product-app/backend-prisma/product-client").Prisma.TypeMap<import("libs/backend/product-prisma/generated/product-client/runtime/client").InternalArgs & {
        result: {};
        model: {};
        query: {};
        client: {};
    }, {}>, import("@my-product-app/backend-prisma/product-client").Prisma.TypeMapCb<{
        adapter: PrismaPg;
    }>, {
        result: {};
        model: {};
        query: {};
        client: {};
    }>;
};
