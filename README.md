# @michealpearce/utils

A collection of utility functions for use in node.js and the browser.

## Installation

```bash
yarn add @michealpearce/utils
# or
npm install @michealpearce/utils
```

## Functions

### `noop`

A function that does nothing, no operation.

### `sleep`

A function that returns a promise that resolves after a given number of milliseconds.

#### Usage

```js
import { sleep } from '@michealpearce/utils'

async function main() {
	await sleep(1000)
	console.log('Hello World')
}

main()
```

### `pick`

A function that returns a new object with the given keys.

#### Usage

```js
import { pick } from '@michealpearce/utils'

const obj = {
	a: 1,
	b: 2,
	c: 3,
}

const newObj = pick(obj, ['a', 'c'])

console.log(newObj) // { a: 1, c: 3 }
```

### `omit`

A function that returns a new object without the given keys.

#### Usage

```js
import { omit } from '@michealpearce/utils'

const obj = {
	a: 1,
	b: 2,
	c: 3,
}

const newObj = omit(obj, ['a', 'c'])

console.log(newObj) // { b: 2 }
```

### `once`

A function that returns a function that can only be called once.

#### Usage

```js
import { once } from '@michealpearce/utils'

const fn = once(() => console.log('Hello World'))

fn() // Hello World
fn() // Does nothing
```

## issers functions

### `is`

A function that returns true if the given value is truthy. Also has generics allowing for type narrowing

#### Usage

```js
import { is } from '@michealpearce/utils'

is('string') // true
is(1) // true
is(true) // true
is(false) // false
is(null) // false
is(undefined) // false

const test = null as string | null

if(is<typeof test, string>(test)) {
	// test will be narrowed to string
}
```

### `not`

A function that returns true if the given value is falsy. Also has generics allowing for type narrowing

#### Usage

```js
import { not } from '@michealpearce/utils'

not('string') // false
not(1) // false
not(true) // false
not(false) // true
not(null) // true
not(undefined) // true

const test = null as string | null

if(not<typeof test, string>(test)) {
	// test will be narrowed to null
}
```

### `isString`

A function that returns true if the given value is a string.

#### Usage

```js
import { isString } from '@michealpearce/utils'

isString('string') // true
isString(1) // false
isString(true) // false
isString(false) // false
isString(null) // false
isString(undefined) // false

const test = null as string | null

if(isString(test)) {
	// test will be narrowed to string
}
```
