import { extractParamsRegexp, extractBodyRegexp } from "../src/regexp";

describe("regexp", () => {
  describe("extract params", () => {
    it("Named function", () => {
      const fnStr = "function F (req, res, expected) { return () => res.send(expected); };";

      const expected = "req, res, expected";
      const actual = fnStr.match(extractParamsRegexp)![1];

      expect(actual).toEqual(expected);
    });
    it("Unnamed function", () => {
      const fnStr = "function (req, res, expected) { return () => res.send(expected); };";

      const expected = "req, res, expected";
      const actual = fnStr.match(extractParamsRegexp)![1];

      expect(actual).toEqual(expected);
    });
    it("Lambda", () => {
      const fnStr = "(req, res, expected) => { return () => res.send(expected); };";

      const expected = "req, res, expected";
      const actual = fnStr.match(extractParamsRegexp)![1];

      expect(actual).toEqual(expected);
    });
    it("issue #1", () => {
      const fnStr =
        "function (req, res, expectedResponseBody) { return res.send(expectedResponseBody); }";
      const expected = "req, res, expectedResponseBody";
      const actual = fnStr.match(extractParamsRegexp)![1];

      expect(actual).toEqual(expected);
    });
  });
  describe("extract body", () => {
    it("Named function", () => {
      const fnStr = "function F (req, res, expected) { return () => res.send(expected); };";

      const expected = " return () => res.send(expected); ";
      const actual = fnStr.match(extractBodyRegexp)![1];

      expect(actual).toEqual(expected);
    });
    it("Unnamed function", () => {
      const fnStr = "function (req, res, expected) { return () => res.send(expected); };";

      const expected = " return () => res.send(expected); ";
      const actual = fnStr.match(extractBodyRegexp)![1];

      expect(actual).toEqual(expected);
    });
    it("Lambda", () => {
      const fnStr = "(req, res, expected) => { return () => res.send(expected); };";

      const expected = " return () => res.send(expected); ";
      const actual = fnStr.match(extractBodyRegexp)![1];

      expect(actual).toEqual(expected);
    });
  })
});
