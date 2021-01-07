import assert = require('./main')

test('deepStrictEqual types', () => {
    type Foo = {
        bar: number
    }
    const foo: Foo = {
        bar: 1
    }
    //@ts-expect-error
    assert.deepStrictEqual(foo, foo as unknown as number)
})