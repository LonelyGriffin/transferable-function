"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractParamsRegexp = exports.extractBodyRegexp = void 0;
exports.extractBodyRegexp = /^function[^{]+\{([\s\S]*)\}$/;
exports.extractParamsRegexp = /^function[^\(]*\(([^\)]*)/;
//# sourceMappingURL=regexp.js.map