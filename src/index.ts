import { extractBodyRegexp, extractParamsRegexp } from "./regexp";

export type TransferableFunction = {
  body: string;
  argNames: string[];
};

export const serializeFn = (fn: Function): TransferableFunction => {
  const fnStr = fn.toString();
  return {
    body: fnStr.match(extractBodyRegexp)![1].trim(),
    argNames: fnStr
      .match(extractParamsRegexp)![1]
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name !== ""),
  };
};

export const deserializeFn = (
  transferableFunction: TransferableFunction
): Function => {
  return new Function(
    ...transferableFunction.argNames,
    transferableFunction.body
  );
};
