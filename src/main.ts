//import assert using UMD syntax (so it works with power-assert)
import powerAssert = require('power-assert')
import assert = require('assert')

//replace the bad types with our own versions. as far as i'm aware this is the only way to do it, declaring a
// module to exiend the existing types won't work as we need to actually delete existing ones
type Assert = Omit<typeof assert, "deepStrictEqual" | "strictEqual"> & {
    //typeof assert doesn't include the call sig
    (value: any, message?: string | Error): asserts value;
    strictEqual<T extends U, U = T>(actual: U, expected: T, message?: string): asserts actual is T;
    deepStrictEqual<T extends U, U = T>(actual: U, expected: T, message?: string): asserts actual is T;
};

//define a const with an explicit type declaration to work around this issue
// https://github.com/microsoft/TypeScript/issues/34596#issuecomment-691574987
const _assert: Assert = powerAssert as unknown as Assert

//export it UMD style, so it still works with power-assert
export = _assert