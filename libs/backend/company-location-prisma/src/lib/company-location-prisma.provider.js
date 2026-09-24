"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyLocationPrismaProvider = exports.PRISMA_COMPANY_LOCATION = void 0;
const company_location_prisma_client_1 = require("company-location-prisma-client");
const adapter_pg_1 = require("@prisma/adapter-pg");
exports.PRISMA_COMPANY_LOCATION = Symbol('PRISMA_COMPANY_LOCATION');
function createPrismaClient() {
    const connectionString = process.env['DATABASE_URL_COMPANY_LOCATION'];
    if (!connectionString) {
        throw new Error('DATABASE_URL_COMPANY_LOCATION is not defined');
    }
    const adapter = new adapter_pg_1.PrismaPg({
        connectionString,
    });
    const client = new company_location_prisma_client_1.PrismaClient({
        adapter,
    });
    return client.$extends({
        query: {
            $allModels: {
                async $allOperations({ model, operation, args, query }) {
                    const start = Date.now();
                    const result = await query(args);
                    const duration = Date.now() - start;
                    console.log(`[Company Location Prisma] ${String(model)}.${String(operation)} ${duration}ms`);
                    return result;
                },
            },
        },
    });
}
exports.companyLocationPrismaProvider = {
    provide: exports.PRISMA_COMPANY_LOCATION,
    useFactory: () => createPrismaClient(),
};
//# sourceMappingURL=company-location-prisma.provider.js.map