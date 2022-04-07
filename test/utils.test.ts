import {extractBody, extractParams, toTransferableFunction} from "../src/utils";
import {deserializeFn} from "../src";

describe("utils", () => {
  it("Named function with two params", () => {
    const fnStr = "function F (a, b ) {return a + b; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return a + b; ");
    expect(paramsStr).toEqual("a, b ");
    expect(actualFn(1, 2)).toEqual(3);
  });

  it("Named function with one param", () => {
    const fnStr = "function F (a, ) {return a; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return a; ");
    expect(paramsStr).toEqual("a, ");
    expect(actualFn(1)).toEqual(1);
  });
  it("Named function with zero params", () => {
    const fnStr = "function F ( ) {return 1; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return 1; ");
    expect(paramsStr).toEqual(" ");
    expect(actualFn()).toEqual(1);
  });
  it("Named function with nested named function", () => {
    const fnStr = "function F (a, b ) {function f () { return 1}; return a + b; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("function f () { return 1}; return a + b; ");
    expect(paramsStr).toEqual("a, b ");
    expect(actualFn(1, 2)).toEqual(3);
  });

  it("Named function with nested lambda function", () => {
    const fnStr = "function F (a, b ) {const f = () => { return 1}; return a + b; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("const f = () => { return 1}; return a + b; ");
    expect(paramsStr).toEqual("a, b ");
    expect(actualFn(1, 2)).toEqual(3);
  });
  it("Unnamed function with two params", () => {
    const fnStr = "function (a, b ) {return a + b; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return a + b; ");
    expect(paramsStr).toEqual("a, b ");
    expect(actualFn(1, 2)).toEqual(3);
  });

  it("Unnamed function with one param", () => {
    const fnStr = "function  (a, ) {return a; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return a; ");
    expect(paramsStr).toEqual("a, ");
    expect(actualFn(1)).toEqual(1);
  });
  it("Unnamed function with zero params", () => {
    const fnStr = "function ( ) {return 1; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return 1; ");
    expect(paramsStr).toEqual(" ");
    expect(actualFn()).toEqual(1);
  });
  it("Unnamed function with nested named function", () => {
    const fnStr = "function (a, b ) {function f () { return 1}; return a + b; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("function f () { return 1}; return a + b; ");
    expect(paramsStr).toEqual("a, b ");
    expect(actualFn(1, 2)).toEqual(3);
  });

  it("Unnamed function with nested lambda function", () => {
    const fnStr = "function  (a, b ) {const f = () => { return 1}; return a + b; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("const f = () => { return 1}; return a + b; ");
    expect(paramsStr).toEqual("a, b ");
    expect(actualFn(1, 2)).toEqual(3);
  });

  it("lambda with two params", () => {
    const fnStr = "(a, b ) => {return a + b; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return a + b; ");
    expect(paramsStr).toEqual("a, b ");
    expect(actualFn(1, 2)).toEqual(3);
  });

  it("lambda function with one param", () => {
    const fnStr = "(a, ) => {return a; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return a; ");
    expect(paramsStr).toEqual("a, ");
    expect(actualFn(1)).toEqual(1);
  });
  it("lambda function with zero param", () => {
    const fnStr = "( ) => {return 1; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return 1; ");
    expect(paramsStr).toEqual(" ");
    expect(actualFn(1)).toEqual(1);
  });
  it("lambda function with nested named function", () => {
    const fnStr = "(a, b ) => {function f () { return 1}; return a + b; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("function f () { return 1}; return a + b; ");
    expect(paramsStr).toEqual("a, b ");
    expect(actualFn(1, 2)).toEqual(3);
  });

  it("lambda function with nested lambda function", () => {
    const fnStr = "(a, b ) => {const f = () => { return 1}; return a + b; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("const f = () => { return 1}; return a + b; ");
    expect(paramsStr).toEqual("a, b ");
    expect(actualFn(1, 2)).toEqual(3);
  });

  it("lambda function without param braces", () => {
    const fnStr = "a => {const f = () => { return 1}; return a; }; ";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("const f = () => { return 1}; return a; ");
    expect(paramsStr).toEqual("a");
    expect(actualFn(1)).toEqual(1);
  });
  it("lambda function without param braces and body braces", () => {
    const fnStr = "a => a";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return a");
    expect(paramsStr).toEqual("a");
    expect(actualFn(1)).toEqual(1);
  });
  it("lambda function without body braces", () => {
    const fnStr = "(a, b) => a + b";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return a + b");
    expect(paramsStr).toEqual("a, b");
    expect(actualFn(1, 2)).toEqual(3);
  });
  it("lambda function with object body ", () => {
    const fnStr = "(a, b) => ({a, b})";

    const bodyStr = extractBody(fnStr);
    const paramsStr = extractParams(fnStr);
    const transferableFunction = toTransferableFunction(paramsStr, bodyStr);

    const actualFn = deserializeFn(transferableFunction);

    expect(bodyStr).toEqual("return ({a, b})");
    expect(paramsStr).toEqual("a, b");
    expect(actualFn(1, 2)).toEqual({a: 1, b: 2});
  });
});
