"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "role", void 0);
exports.User = User = tslib_1.__decorate([
    (0, graphql_1.ObjectType)()
], User);
//# sourceMappingURL=user.entity.js.map