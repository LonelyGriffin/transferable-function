"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeFn = exports.serializeFn = void 0;
var regexp_1 = require("./regexp");
var serializeFn = function (fn) {
    var fnStr = fn.toString();
    return {
        body: fnStr.match(regexp_1.extractBodyRegexp)[1].trim(),
        argNames: fnStr
            .match(regexp_1.extractParamsRegexp)[1]
            .split(",")
            .map(function (name) { return name.trim(); })
            .filter(function (name) { return name !== ""; }),
    };
};
exports.serializeFn = serializeFn;
var deserializeFn = function (transferableFunction) {
    return new (Function.bind.apply(Function, __spreadArray(__spreadArray([void 0], __read(transferableFunction.argNames)), [transferableFunction.body])))();
};
exports.deserializeFn = deserializeFn;
//# sourceMappingURL=index.js.map