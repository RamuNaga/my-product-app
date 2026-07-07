"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkorderPrismaService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const workorder_client_1 = require("@my-product-app/backend-prisma/workorder-client");
const workorder_primsa_provider_1 = require("./workorder-primsa.provider");
let WorkorderPrismaService = class WorkorderPrismaService {
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
exports.WorkorderPrismaService = WorkorderPrismaService;
exports.WorkorderPrismaService = WorkorderPrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(workorder_primsa_provider_1.PRISMA_WORKORDER)),
    tslib_1.__metadata("design:paramtypes", [workorder_client_1.PrismaClient])
], WorkorderPrismaService);
//# sourceMappingURL=workorder-prisma.service.js.map