import assert = require('../power-assert')

test('power-assert', () => {
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