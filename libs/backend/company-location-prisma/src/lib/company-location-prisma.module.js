"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyLocationPrismaModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const company_location_prisma_service_1 = require("./company-location-prisma.service");
let CompanyLocationPrismaModule = class CompanyLocationPrismaModule {
};
exports.CompanyLocationPrismaModule = CompanyLocationPrismaModule;
exports.CompanyLocationPrismaModule = CompanyLocationPrismaModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [company_location_prisma_service_1.CompanyLocationPrismaService],
        exports: [company_location_prisma_service_1.CompanyLocationPrismaService],
    })
], CompanyLocationPrismaModule);
//# sourceMappingURL=company-location-prisma.module.js.map