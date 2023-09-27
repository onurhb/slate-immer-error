/** @jsx jsx */

import { jsx } from "./hyperscript";

const el = <element />

// This won't work because element contains __self which is circular structure
console.log(JSON.stringify(el))