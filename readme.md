# typed nodejs assert
various fixes for assertions in nodeJS.

## what it do
this packages fixes the following issues:
- the typescript definitions for the default assertion library in nodeJS
  [do not properly check the types of expected/actual values](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/50274),
  leading to assertion errors that could
easily be caught by the compiler.
- [power-assert](https://npmjs.org/power-assert) can only be imported using UMD syntax
  (`const assert = require('power-assert')`), meaning it's treated as `any` by the compiler in many cases

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

## how to use
### normally
```ts
import assert from 'typed-nodejs-assert'
```
### with [power-assert](https://npmjs.org/power-assert)
due to the fact that power-assert usually has to be imported using UMD syntax, it's a bit more complicated.
(yes, you have to explicitly specify the type `PowerAssert` or it won't work - see 
[this issue](https://github.com/microsoft/TypeScript/issues/34596#issuecomment-691574987))
```ts
import {getPowerAssert, PowerAssert} from 'typed-nodejs-assert'
const assert: PowerAssert = getPowerAssert()
```
you can pass a [customization object](https://github.com/power-assert-js/power-assert#customization-api):
```ts
const assert: PowerAssert = getPowerAssert({
    output: {
        maxDepth: 2
    }
})
```