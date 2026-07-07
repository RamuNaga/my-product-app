"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPrismaService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const user_client_1 = require("@my-product-app/backend-prisma/user-client");
const user_prisma_provider_1 = require("./user-prisma.provider");
let UserPrismaService = class UserPrismaService {
    constructor(prisma) {
        Object.defineProperty(this, "prisma", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: prisma
        });
    }
    get client() {
        return this.prisma;
    }
    async onModuleDestroy() {
        await this.prisma.$disconnect();
    }
};
exports.UserPrismaService = UserPrismaService;
exports.UserPrismaService = UserPrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(user_prisma_provider_1.PRISMA_USER)),
    tslib_1.__metadata("design:paramtypes", [user_client_1.PrismaClient])
], UserPrismaService);
//# sourceMappingURL=user-prisma.service.js.map