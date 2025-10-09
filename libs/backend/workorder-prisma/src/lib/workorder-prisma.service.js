"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkorderPrismaService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const workorder_client_1 = require("@my-product-app/backend-prisma/workorder-client");
let WorkorderPrismaService = class WorkorderPrismaService extends workorder_client_1.PrismaClient {
    constructor() {
        super();
        if (process.env['NODE_ENV'] !== 'production') {
            this.$extends({
                query: {
                    $allModels: {
                        async $allOperations({ model, operation, args, query }) {
                            const start = Date.now();
                            const result = await query(args);
                            const duration = Date.now() - start;
                            const safeResult = JSON.stringify(result).length > 1000
                                ? '[Result too large]'
                                : JSON.stringify(result);
                            console.log(`[Prisma] ${operation.toUpperCase()} on ${model} | Duration: ${duration}ms | Args: ${JSON.stringify(args)} | Result: ${safeResult}`);
                            return result;
                        },
                    },
                },
            });
        }
    }
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.WorkorderPrismaService = WorkorderPrismaService;
exports.WorkorderPrismaService = WorkorderPrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], WorkorderPrismaService);
//# sourceMappingURL=workorder-prisma.service.js.map