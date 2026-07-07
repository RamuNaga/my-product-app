"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workorderPrismaProvider = exports.PRISMA_WORKORDER = void 0;
const workorder_client_1 = require("@my-product-app/backend-prisma/workorder-client");
const adapter_pg_1 = require("@prisma/adapter-pg");
exports.PRISMA_WORKORDER = Symbol('PRISMA_WORKORDER');
function createPrismaClient() {
    const connectionString = process.env['DATABASE_URL_WORKORDER'];
    if (!connectionString) {
        throw new Error('DATABASE_URL_WORKORDER is not defined');
    }
    const adapter = new adapter_pg_1.PrismaPg({
        connectionString,
    });
    const client = new workorder_client_1.PrismaClient({
        adapter,
    });
    return client.$extends({
        query: {
            $allModels: {
                async $allOperations({ model, operation, args, query }) {
                    const start = Date.now();
                    const result = await query(args);
                    const duration = Date.now() - start;
                    console.log(`[Workorder Prisma] ${String(model)}.${String(operation)} ${duration}ms`);
                    return result;
                },
            },
        },
    });
}
exports.workorderPrismaProvider = {
    provide: exports.PRISMA_WORKORDER,
    useFactory: () => createPrismaClient(),
};
//# sourceMappingURL=workorder-primsa.provider.js.map