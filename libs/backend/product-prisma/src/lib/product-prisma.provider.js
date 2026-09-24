"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productPrismaProvider = exports.PRISMA_PRODUCT = void 0;
const product_prisma_client_1 = require("product-prisma-client");
const adapter_pg_1 = require("@prisma/adapter-pg");
exports.PRISMA_PRODUCT = Symbol('PRISMA_PRODUCT');
function createPrismaClient() {
    const connectionString = process.env['DATABASE_URL_PRODUCT'];
    if (!connectionString) {
        throw new Error('DATABASE_URL_PRODUCT is not defined');
    }
    const adapter = new adapter_pg_1.PrismaPg({
        connectionString,
    });
    const client = new product_prisma_client_1.PrismaClient({
        adapter,
    });
    return client.$extends({
        query: {
            $allModels: {
                async $allOperations({ model, operation, args, query }) {
                    const start = Date.now();
                    const result = await query(args);
                    const duration = Date.now() - start;
                    console.log(`[Prisma] ${String(model)}.${String(operation)} ${duration}ms`);
                    return result;
                },
            },
        },
    });
}
exports.productPrismaProvider = {
    provide: exports.PRISMA_PRODUCT,
    useFactory: () => createPrismaClient(),
};
//# sourceMappingURL=product-prisma.provider.js.map