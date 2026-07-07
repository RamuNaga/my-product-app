"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPrismaService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const product_client_1 = require("@my-product-app/backend-prisma/product-client");
const product_prisma_provider_1 = require("./product-prisma.provider");
let ProductPrismaService = class ProductPrismaService {
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
exports.ProductPrismaService = ProductPrismaService;
exports.ProductPrismaService = ProductPrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(product_prisma_provider_1.PRISMA_PRODUCT)),
    tslib_1.__metadata("design:paramtypes", [product_client_1.PrismaClient])
], ProductPrismaService);
//# sourceMappingURL=product-prisma.service.js.map