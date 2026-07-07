"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPrismaModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const user_prisma_service_1 = require("./user-prisma.service");
const user_prisma_provider_1 = require("./user-prisma.provider");
let UserPrismaModule = class UserPrismaModule {
};
exports.UserPrismaModule = UserPrismaModule;
exports.UserPrismaModule = UserPrismaModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [user_prisma_service_1.UserPrismaService, user_prisma_provider_1.userPrismaProvider],
        exports: [user_prisma_service_1.UserPrismaService],
    })
], UserPrismaModule);
//# sourceMappingURL=user-prisma.module.js.map