"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPrismaModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const product_prisma_service_1 = require("./product-prisma.service");
const product_prisma_provider_1 = require("./product-prisma.provider");
let ProductPrismaModule = class ProductPrismaModule {
};
exports.ProductPrismaModule = ProductPrismaModule;
exports.ProductPrismaModule = ProductPrismaModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [product_prisma_service_1.ProductPrismaService, product_prisma_provider_1.productPrismaProvider],
        exports: [product_prisma_service_1.ProductPrismaService],
    })
], ProductPrismaModule);
//# sourceMappingURL=product-prisma.module.js.map