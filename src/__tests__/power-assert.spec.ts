import assert = require('../power-assert')

test('power-assert', () => {
    assert.throws(
        () => {
            assert(1 === (2 as any))
        },
        (err: Error) => err.message.includes('assert(1 === 2)')
    )
})
