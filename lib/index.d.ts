export declare type TransferableFunction = {
    body: string;
    argNames: string[];
};
export declare const serializeFn: (fn: Function) => TransferableFunction;
export declare const deserializeFn: (transferableFunction: TransferableFunction) => Function;
