import {extractBody, extractParams, toTransferableFunction} from "./utils";

export type TransferableFunction = {
  body: string;
  argNames: string[];
};

export const serializeFn = (fn: Function): TransferableFunction => {
  const str = fn.toString();
  const paramsStr = extractParams(str);
  const bodyStr = extractBody(str);
  return toTransferableFunction(paramsStr, bodyStr);
};

export const deserializeFn = (
  transferableFunction: TransferableFunction
): Function => {
  return new Function(
    ...transferableFunction.argNames,
    transferableFunction.body
  );
};
