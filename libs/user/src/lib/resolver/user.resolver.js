"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("../service/user.service");
const creata_user_input_1 = require("../dto/creata-user.input");
const user_entity_1 = require("../entities/user.entity");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    users() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.findAll();
        });
    }
    createUser(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.createUser(input);
        });
    }
};
exports.UserResolver = UserResolver;
tslib_1.__decorate([
    (0, graphql_1.Query)(() => [user_entity_1.User]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    tslib_1.__param(0, (0, graphql_1.Args)('input')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [creata_user_input_1.CreateUserDto]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
exports.UserResolver = UserResolver = tslib_1.__decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.User),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map