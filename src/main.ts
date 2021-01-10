import assert = require('assert')
import powerAssert = require('power-assert')

/**
 * replaces the bad types with our own versions.
 *
 * as far as i'm aware this is the only way to do it, declaring a module to extend the existing types won't work as we
 * need to actually delete existing ones
 */
type TypedAssert<T> = Omit<T, "deepStrictEqual" | "strictEqual"> & {
    //typeof assert doesn't include the call sig
    (value: any, message?: string | Error): asserts value;
    strictEqual<T extends U, U = T>(actual: U, expected: T, message?: string): asserts actual is T;
    deepStrictEqual<T extends U, U = T>(actual: U, expected: T, message?: string): asserts actual is T;
};

/** the `assert` types but with additional type checks in {@link strictEqual} and {@link deepStrictEqual} */
export type Assert = TypedAssert<typeof assert>
/** the `power-assert` types but with additional type checks in {@link strictEqual} and {@link deepStrictEqual} */
export type PowerAssert = TypedAssert<typeof powerAssert>

/**
 * a const with an explicit type declaration to work around
 * [this issue](https://github.com/microsoft/TypeScript/issues/34596#issuecomment-691574987)
 */
const _assert: Assert = assert as Assert

export default _assert