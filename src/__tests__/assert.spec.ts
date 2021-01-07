import assert = require('../assert')

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