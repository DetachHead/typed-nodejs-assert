# typed nodejs assert
improved type definitions for assertions in the nodeJS assert API.

the typescript definitions for the default assertion library in nodeJS [do not properly check the types of expected/actual values](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/50274), leading to assertion errors that could
easily be caught by the compiler.

## example
in the current type definitions, the following error would not occur:
```ts
type Foo = {
    bar: number
}
const foo: Foo = {
    bar: 1
}
//@ts-expect-error TS2345: Argument of type '{}' is not assignable to parameter of type 'Foo'. Property 'bar' is missing in type '{}' but required in type 'Foo'
assert.deepStrictEqual(foo, {})
```

## power-assert compatibility
this works with [power-assert](https://npmjs.org/power-assert) as well.
```ts
import assert = require('typed-nodejs-assert/dist/power-assert')
```
