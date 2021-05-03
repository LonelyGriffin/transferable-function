import { deserializeFn, serializeFn } from "../lib";

describe("transferable-function", () => {
  describe("serializeFn", () => {
    describe("anonymouse function", () => {
      test("With two params and simple body", () => {
        const fn = function (a: number, b: number) {
          return a + b;
        };
        const transferableFn = serializeFn(fn);

        expect(transferableFn).toEqual({
          body: "return a + b;",
          argNames: ["a", "b"],
        });
      });
      test("Without params and simple body", () => {
        const fn = function () {
          return 8;
        };
        const transferableFn = serializeFn(fn);

        expect(transferableFn).toEqual({
          body: "return 8;",
          argNames: [],
        });
      });
      test("Complex body", () => {
        const fn = function (a: number, b: number) {
          if (a > 0) {
            return a;
          }
          return b;
        };
        const transferableFn = serializeFn(fn);

        expect(transferableFn).toEqual({
          body: `if (a > 0) {
                        return a;
                    }
                    return b;`,
          argNames: ["a", "b"],
        });
      });
    });
    describe("lambda function", () => {
      test("With two params and simple body", () => {
        const fn = (a: number, b: number) => {
          return a + b;
        };
        const transferableFn = serializeFn(fn);

        expect(transferableFn).toEqual({
          body: "return a + b;",
          argNames: ["a", "b"],
        });
      });
      test("Without params and simple body", () => {
        const fn = () => {
          return 8;
        };
        const transferableFn = serializeFn(fn);

        expect(transferableFn).toEqual({
          body: "return 8;",
          argNames: [],
        });
      });
      test("Complex body", () => {
        const fn = (a: number, b: number) => {
          if (a > 0) {
            return a;
          }
          return b;
        };
        const transferableFn = serializeFn(fn);

        expect(transferableFn).toEqual({
          body: `if (a > 0) {
                        return a;
                    }
                    return b;`,
          argNames: ["a", "b"],
        });
      });
    });
  });
  describe("deserializeFn", () => {
    describe("anonymouse function", () => {
      test("With two params and simple body", () => {
        const fn = function (a: number, b: number) {
          return a + b;
        };
        const transferableFn = serializeFn(fn);
        const deserializedFn = deserializeFn(transferableFn);

        expect(deserializedFn(1, 2)).toEqual(3);
      });
      test("Without params and simple body", () => {
        const fn = function () {
          return 8;
        };
        const transferableFn = serializeFn(fn);
        const deserializedFn = deserializeFn(transferableFn);

        expect(deserializedFn()).toEqual(8);
      });
      test("Complex body", () => {
        const fn = function (a: number, b: number) {
          if (a > 0) {
            return a;
          }
          return b;
        };
        const transferableFn = serializeFn(fn);
        const deserializedFn = deserializeFn(transferableFn);

        expect(deserializedFn(1, 2)).toEqual(1);
      });
    });
    describe("lambda function", () => {
      test("With two params and simple body", () => {
        const fn = (a: number, b: number) => {
          return a + b;
        };
        const transferableFn = serializeFn(fn);
        const deserializedFn = deserializeFn(transferableFn);

        expect(deserializedFn(1, 2)).toEqual(3);
      });
      test("Without params and simple body", () => {
        const fn = () => {
          return 8;
        };
        const transferableFn = serializeFn(fn);
        const deserializedFn = deserializeFn(transferableFn);

        expect(deserializedFn()).toEqual(8);
      });
      test("Complex body", () => {
        const fn = (a: number, b: number) => {
          if (a > 0) {
            return a;
          }
          return b;
        };
        const transferableFn = serializeFn(fn);
        const deserializedFn = deserializeFn(transferableFn);

        expect(deserializedFn(-1, 2)).toEqual(2);
      });
    });
  });
});
