import _assert = require('assert')

type Assert = Omit<typeof _assert, "deepStrictEqual" | "strictEqual"> & {
    (value: any, message?: string | Error): asserts value; //TODO: figure out why typeof assert removes this call sig
    strictEqual<T extends U, U = T>(actual: U, expected: T, message?: string): asserts actual is T;
    deepStrictEqual<T extends U, U = T>(actual: U, expected: T, message?: string): asserts actual is T;
};

//hack https://github.com/microsoft/TypeScript/issues/34596#issuecomment-691574987
const assert: Assert = _assert

export = assert