import { expect, it } from 'vitest'
import { pick } from './pick'

it('extracts props from object', () => {
	const testSymbol = Symbol('test')
	const obj = { a: 1, b: 2, c: 3, [testSymbol]: 4 }
	const picked = pick(obj, ['a', 'c', testSymbol])

	expect(picked).toEqual({
		a: 1,
		c: 3,
		[testSymbol]: 4,
	})
})
