import assert = require('assert')

/** the {@link assert} types but with additional type checks in {@link strictEqual} and {@link deepStrictEqual} */
//replace the bad types with our own versions. as far as i'm aware this is the only way to do it, declaring a
// module to extend the existing types won't work as we need to actually delete existing ones
export type TypedAssert<T> = Omit<T, "deepStrictEqual" | "strictEqual"> & {
    //typeof assert doesn't include the call sig
    (value: any, message?: string | Error): asserts value;
    strictEqual<T extends U, U = T>(actual: U, expected: T, message?: string): asserts actual is T;
    deepStrictEqual<T extends U, U = T>(actual: U, expected: T, message?: string): asserts actual is T;
};