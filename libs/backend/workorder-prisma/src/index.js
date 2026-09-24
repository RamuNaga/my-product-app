"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Priority = exports.WorkOrderStatus = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./lib/workorder-prisma.module"), exports);
tslib_1.__exportStar(require("./lib/workorder-prisma.service"), exports);
tslib_1.__exportStar(require("./lib/workorder-primsa.provider"), exports);
var workorder_client_1 = require("../generated/workorder-client");
Object.defineProperty(exports, "WorkOrderStatus", { enumerable: true, get: function () { return workorder_client_1.WorkOrderStatus; } });
Object.defineProperty(exports, "Priority", { enumerable: true, get: function () { return workorder_client_1.Priority; } });
//# sourceMappingURL=index.js.map