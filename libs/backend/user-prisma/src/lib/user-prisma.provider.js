"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPrismaProvider = exports.PRISMA_USER = void 0;
const user_client_1 = require("@my-product-app/backend-prisma/user-client");
const adapter_pg_1 = require("@prisma/adapter-pg");
exports.PRISMA_USER = Symbol('PRISMA_USER');
function createPrismaClient() {
    const connectionString = process.env['DATABASE_URL_USER'];
    if (!connectionString) {
        throw new Error('DATABASE_URL_USER is not defined');
    }
    const adapter = new adapter_pg_1.PrismaPg({
        connectionString,
    });
    const client = new user_client_1.PrismaClient({
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
exports.userPrismaProvider = {
    provide: exports.PRISMA_USER,
    useFactory: () => createPrismaClient(),
};
//# sourceMappingURL=user-prisma.provider.js.map