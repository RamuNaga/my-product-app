import { PrismaPg } from '@prisma/adapter-pg';
export declare const PRISMA_COMPANY_LOCATION: unique symbol;
export declare const companyLocationPrismaProvider: {
    provide: symbol;
    useFactory: () => import("libs/backend/company-location-prisma/generated/company-location-client/runtime/client").DynamicClientExtensionThis<import("@my-product-app/backend-prisma/company-location-client").Prisma.TypeMap<import("libs/backend/company-location-prisma/generated/company-location-client/runtime/client").InternalArgs & {
        result: {};
        model: {};
        query: {};
        client: {};
    }, {}>, import("@my-product-app/backend-prisma/company-location-client").Prisma.TypeMapCb<{
        adapter: PrismaPg;
    }>, {
        result: {};
        model: {};
        query: {};
        client: {};
    }>;
};
