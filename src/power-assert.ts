import assert = require('power-assert')
import {TypedAssert} from "./types";

type Assert = TypedAssert<typeof assert>

//define a const with an explicit type declaration to work around this issue
// https://github.com/microsoft/TypeScript/issues/34596#issuecomment-691574987
//need to cast as unknown because power-assert's types are more lenient despite being the same module at runtime
const _assert: Assert = assert as unknown as Assert

export = _assert