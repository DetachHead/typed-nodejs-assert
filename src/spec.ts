import normalAssert from './main'
import {getPowerAssert, PowerAssert} from "./main";

/**
 * would like to be able to call this 'powerAssert' to be more explicit, but that causes it to fail due to the runtime
 * babel transpiling it uses. it also can't be defined in a different scope
 */
const assert: PowerAssert = getPowerAssert()

describe('power-assert', () => {
    test('output', () => {
        assert.throws(
            () => {
                assert(1 === (2 as any))
            },
            (err: Error) => err.message.includes('assert(1 === 2)')
        )
    })
    test('strictEqual', () => {
        assert.strictEqual(
            1,
            //@ts-expect-error
            1 as unknown
        )
    })
    test('deepStrictEqual', () => {
        type Foo = {
            bar: number
        }
        const foo: Foo = {
            bar: 1
        }
        assert.deepStrictEqual(
            foo,
            //@ts-expect-error
            foo as unknown
        )
    })
})

describe('assert', () => {
    test('strictEqual', () => {
        normalAssert.strictEqual(
            1,
            //@ts-expect-error
            1 as unknown
        )
    })
    test('deepStrictEqual', () => {
        type Foo = {
            bar: number
        }
        const foo: Foo = {
            bar: 1
        }
        normalAssert.deepStrictEqual(
            foo,
            //@ts-expect-error
            foo as unknown
        )
    })
})