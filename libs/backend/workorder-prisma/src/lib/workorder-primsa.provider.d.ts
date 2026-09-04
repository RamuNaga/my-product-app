import { PrismaPg } from '@prisma/adapter-pg';
export declare const PRISMA_WORKORDER: unique symbol;
export declare const workorderPrismaProvider: {
    provide: symbol;
    useFactory: () => import("workorder-prisma-client/runtime/client").DynamicClientExtensionThis<import("workorder-prisma-client").Prisma.TypeMap<import("workorder-prisma-client/runtime/client").InternalArgs & {
        result: {};
        model: {};
        query: {};
        client: {};
    }, {}>, import("workorder-prisma-client").Prisma.TypeMapCb<{
        adapter: PrismaPg;
    }>, {
        result: {};
        model: {};
        query: {};
        client: {};
    }>;
};
