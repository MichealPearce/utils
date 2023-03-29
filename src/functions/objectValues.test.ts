import { expect, it } from 'vitest'
import { objectValues } from './objectValues'

it('returns the values of an object', () => {
	const obj = { a: 1, b: 2, c: 3 }
	const values = objectValues(obj)

	expect(values).toEqual([1, 2, 3])
})
