import { expect, it } from 'vitest'
import { objectKeys } from './objectKeys'

it('returns the keys of an object', () => {
	const obj = { a: 1, b: 2, c: 3 }
	const keys = objectKeys(obj)

	expect(keys).toEqual(['a', 'b', 'c'])
})
