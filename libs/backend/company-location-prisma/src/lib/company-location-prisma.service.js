"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyLocationPrismaService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const company_location_client_1 = require("@my-product-app/backend-prisma/company-location-client");
const company_location_prisma_provider_1 = require("./company-location-prisma.provider");
let CompanyLocationPrismaService = class CompanyLocationPrismaService {
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
exports.CompanyLocationPrismaService = CompanyLocationPrismaService;
exports.CompanyLocationPrismaService = CompanyLocationPrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(company_location_prisma_provider_1.PRISMA_COMPANY_LOCATION)),
    tslib_1.__metadata("design:paramtypes", [company_location_client_1.PrismaClient])
], CompanyLocationPrismaService);
//# sourceMappingURL=company-location-prisma.service.js.map