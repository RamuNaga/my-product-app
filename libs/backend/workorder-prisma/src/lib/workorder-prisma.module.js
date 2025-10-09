"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkOrderPrismaModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const workorder_prisma_service_1 = require("./workorder-prisma.service");
let WorkOrderPrismaModule = class WorkOrderPrismaModule {
};
exports.WorkOrderPrismaModule = WorkOrderPrismaModule;
exports.WorkOrderPrismaModule = WorkOrderPrismaModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [workorder_prisma_service_1.WorkorderPrismaService],
        exports: [workorder_prisma_service_1.WorkorderPrismaService],
    })
], WorkOrderPrismaModule);
//# sourceMappingURL=workorder-prisma.module.js.map