import { extractParamsRegexp } from "../src/regexp";

describe("regexp", () => {
  describe("extract params", () => {
    it("issue #1", () => {
      const fnStr =
        "function (req, res, expectedResponseBody) { return res.send(expectedResponseBody); }";
      const expected = "req, res, expectedResponseBody";
      const actual = fnStr.match(extractParamsRegexp)![1];

      expect(actual).toEqual(expected);
    });
  });
});
