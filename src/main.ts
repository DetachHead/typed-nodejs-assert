import assert = require('assert')

type Assert = Omit<typeof assert, "deepStrictEqual" | "strictEqual"> & {
    (value: any, message?: string | Error): asserts value; //TODO: figure out why typeof assert removes this call sig
    strictEqual<T extends U, U = T>(actual: U, expected: T, message?: string): asserts actual is T;
    deepStrictEqual<T extends U, U = T>(actual: U, expected: T, message?: string): asserts actual is T;
};

//TODO: remove the compiled JS, we are only fixing types here
export = assert as Assert