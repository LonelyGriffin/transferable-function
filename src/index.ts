export type TransferableFunction = {
  body: string;
  argNames: string[];
};

export const serializeFn = (fn: Function): TransferableFunction => {
  const fnStr = fn.toString();
  return {
    body: fnStr.match(/function[^{]+\{([\s\S]*)\}$/)![1].trim(),
    argNames: fnStr
      .match(/function.*\((.*)\)/)![1]
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
