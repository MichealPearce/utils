import { expect, it } from 'vitest'
import { firstOf } from './firstOf'

it('gets the first item in a iterable or string', () => {
	const arr = [1, 2, 3]
	const set = new Set([1, 2, 3])
	const map = new Map([
		['a', 1],
		['b', 2],
		['c', 3],
	])

	expect(firstOf(arr)).toBe(1)
	expect(firstOf(set)).toBe(1)
	expect(firstOf(map)).toEqual(['a', 1])

	expect(firstOf('Hello, World!')).toBe('H')
})
