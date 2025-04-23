"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const testing_1 = require("@nestjs/testing");
const user_resolver_1 = require("./user.resolver");
describe('UserResolver', () => {
    let resolver;
    beforeEach(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const module = yield testing_1.Test.createTestingModule({
            providers: [user_resolver_1.UserResolver],
        }).compile();
        resolver = module.get(user_resolver_1.UserResolver);
    }));
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=user.resolver.spec.js.map