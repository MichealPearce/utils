import { expect, it } from 'vitest'
import { inObject } from './inObject'

it('checks if keys are in object', () => {
	const obj = { a: 1, b: 2, c: 3 }
	expect(inObject(obj, ['a'])).toBe(true)
	expect(inObject(obj, ['a', 'b'])).toBe(true)
	expect(inObject(obj, ['a', 'b', 'c'])).toBe(true)
	expect(inObject(obj, ['a', 'b', 'c', 'd'])).toBe(false)
	expect(inObject(obj, ['d'])).toBe(false)
})
