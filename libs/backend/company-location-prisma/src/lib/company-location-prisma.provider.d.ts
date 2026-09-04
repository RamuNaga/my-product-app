import { PrismaPg } from '@prisma/adapter-pg';
export declare const PRISMA_COMPANY_LOCATION: unique symbol;
export declare const companyLocationPrismaProvider: {
    provide: symbol;
    useFactory: () => import("company-location-prisma-client/runtime/client").DynamicClientExtensionThis<import("company-location-prisma-client").Prisma.TypeMap<import("company-location-prisma-client/runtime/client").InternalArgs & {
        result: {};
        model: {};
        query: {};
        client: {};
    }, {}>, import("company-location-prisma-client").Prisma.TypeMapCb<{
        adapter: PrismaPg;
    }>, {
        result: {};
        model: {};
        query: {};
        client: {};
    }>;
};
