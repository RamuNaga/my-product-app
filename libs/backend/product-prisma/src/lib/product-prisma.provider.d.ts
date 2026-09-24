import { PrismaPg } from '@prisma/adapter-pg';
export declare const PRISMA_PRODUCT: unique symbol;
export declare const productPrismaProvider: {
    provide: symbol;
    useFactory: () => import("product-prisma-client/runtime/client").DynamicClientExtensionThis<import("product-prisma-client").Prisma.TypeMap<import("product-prisma-client/runtime/client").InternalArgs & {
        result: {};
        model: {};
        query: {};
        client: {};
    }, {}>, import("product-prisma-client").Prisma.TypeMapCb<{
        adapter: PrismaPg;
    }>, {
        result: {};
        model: {};
        query: {};
        client: {};
    }>;
};
