import assert = require('assert')
import {TypedAssert} from "./types";

type Assert = TypedAssert<typeof assert>

//define a const with an explicit type declaration to work around this issue
// https://github.com/microsoft/TypeScript/issues/34596#issuecomment-691574987
const _assert: Assert = assert as Assert

export = _assert