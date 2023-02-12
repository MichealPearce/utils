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
