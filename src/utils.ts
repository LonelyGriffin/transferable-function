import {TransferableFunction} from "./index";

export const extractBody = (str: string): string => {
  const trimmed = str.trim();
  const isLambda = !trimmed.startsWith("function");

  if (isLambda) {
    const arrowIndex = trimmed.indexOf("=>");
    const body = trimmed.slice(arrowIndex + 2).trim();

    return body.startsWith("{") ? getBracedBody(body) : `return ${body}`;
  }

  return getBracedBody(trimmed);
}


export const extractParams = (str: string): string => {
  const trimmed = str.trim();
  const isLambda = !trimmed.startsWith("function");

  if (isLambda) {
    const arrowIndex = trimmed.indexOf("=>");
    const params = trimmed.slice(0, arrowIndex).trim();

    return params.startsWith("(") ? getBracedParams(params) : params;
  }

  return getBracedParams(trimmed);
}

export const toTransferableFunction = (paramsStr: string, bodyStr: string): TransferableFunction => ({
  body: bodyStr.trim(),
  argNames: paramsStr
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name !== ""),
});

const getBracedBody = (str: string) => {
  const begin = str.indexOf("{");
  const end = str.lastIndexOf("}");

  return str.substring(begin + 1, end);
}

const getBracedParams = (str: string) => {
  const begin = str.indexOf("(");
  const end = str.indexOf(")", begin);

  return str.substring(begin + 1, end);
}
