# typed nodejs assert
various fixes for nodeJS assertions in typescript.

[![npm](https://img.shields.io/npm/v/typed-nodejs-assert)](https://www.npmjs.com/package/typed-nodejs-assert)
## what it do
this packages fixes the following issues:
- the typescript definitions for the default assertion library in nodeJS
  [do not properly check the types of expected/actual values](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/50274),
  leading to assertion errors that could
easily be caught by the compiler.
  
  for example. in the current type definitions, the following error would not occur:
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
- [power-assert](https://npmjs.org/power-assert) can only be imported using UMD syntax
  (ie. `const assert = require('power-assert')`), meaning it's treated as `any` by the compiler in many cases

## how to use
### normally
```ts
import assert from 'typed-nodejs-assert'
```
### with [power-assert](https://npmjs.org/power-assert)
due to the fact that power-assert usually has to be imported using UMD syntax, you have to import it as such and give it
the `PowerAsssert` type from this package.

```ts
import { PowerAssert } from 'typed-nodejs-assert'
const assert: PowerAssert = require('power-assert')
```
**IMPORTANT:** you have to explicitly specify the type as shown above.
the following will **not work**:
```ts
const assert = require('power-assert') as PowerAssert
```
see [this issue](https://github.com/microsoft/TypeScript/issues/34596#issuecomment-691574987) for more info