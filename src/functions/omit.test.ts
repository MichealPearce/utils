import { expect, it } from 'vitest'
import { omit } from './omit'

it('omits props from record-like object', () => {
	const testSymbol = Symbol('test')
	const obj = { a: 1, b: 2, c: 3, [testSymbol]: 4 }
	const picked = omit(obj, ['a', 'c', testSymbol])

	expect(picked).toEqual({
		b: 2,
	})
})
