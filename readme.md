# typed nodejs assert
the typescript definitions for the default assertion library in nodeJS [do not properly check the types for deep
equality checks](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/50274), leading to assertion errors that could
easily be caught ar

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
this works with [power-assert](https://npmjs.org/power-assert), just make sure you use the following import syntax:
```ts
import assert = require('typed-nodejs-assert')
```