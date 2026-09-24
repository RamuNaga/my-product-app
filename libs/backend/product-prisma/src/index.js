"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisma = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./lib/product-prisma.module"), exports);
tslib_1.__exportStar(require("./lib/product-prisma.service"), exports);
var product_prisma_client_1 = require("product-prisma-client");
Object.defineProperty(exports, "Prisma", { enumerable: true, get: function () { return product_prisma_client_1.Prisma; } });
//# sourceMappingURL=index.js.map