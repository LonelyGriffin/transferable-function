import { TransferableFunction } from "./index";
export declare const extractBody: (str: string) => string;
export declare const extractParams: (str: string) => string;
export declare const toTransferableFunction: (paramsStr: string, bodyStr: string) => TransferableFunction;
