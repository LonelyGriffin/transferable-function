"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTransferableFunction = exports.extractParams = exports.extractBody = void 0;
var extractBody = function (str) {
    var trimmed = str.trim();
    var isLambda = !trimmed.startsWith("function");
    if (isLambda) {
        var arrowIndex = trimmed.indexOf("=>");
        var body = trimmed.slice(arrowIndex + 2).trim();
        return body.startsWith("{") ? getBracedBody(body) : "return " + body;
    }
    return getBracedBody(trimmed);
};
exports.extractBody = extractBody;
var extractParams = function (str) {
    var trimmed = str.trim();
    var isLambda = !trimmed.startsWith("function");
    if (isLambda) {
        var arrowIndex = trimmed.indexOf("=>");
        var params = trimmed.slice(0, arrowIndex).trim();
        return params.startsWith("(") ? getBracedParams(params) : params;
    }
    return getBracedParams(trimmed);
};
exports.extractParams = extractParams;
var toTransferableFunction = function (paramsStr, bodyStr) { return ({
    body: bodyStr.trim(),
    argNames: paramsStr
        .split(",")
        .map(function (name) { return name.trim(); })
        .filter(function (name) { return name !== ""; }),
}); };
exports.toTransferableFunction = toTransferableFunction;
var getBracedBody = function (str) {
    var begin = str.indexOf("{");
    var end = str.lastIndexOf("}");
    return str.substring(begin + 1, end);
};
var getBracedParams = function (str) {
    var begin = str.indexOf("(");
    var end = str.indexOf(")", begin);
    return str.substring(begin + 1, end);
};
//# sourceMappingURL=utils.js.map