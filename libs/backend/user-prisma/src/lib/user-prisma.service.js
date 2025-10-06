"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPrismaService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const user_client_1 = require("@my-product-app/backend-prisma/user-client");
let UserPrismaService = class UserPrismaService extends user_client_1.PrismaClient {
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
exports.UserPrismaService = UserPrismaService;
exports.UserPrismaService = UserPrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], UserPrismaService);
//# sourceMappingURL=user-prisma.service.js.map