"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let CreateUserDto = class CreateUserDto {
};
exports.CreateUserDto = CreateUserDto;
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
exports.CreateUserDto = CreateUserDto = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], CreateUserDto);
//# sourceMappingURL=creata-user.input.js.map