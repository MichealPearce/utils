import { expect, it } from 'vitest'
import { lastOf } from './lastOf'

it('gets the last item in a iterable or string', () => {
	const arr = [1, 2, 3]
	const set = new Set([1, 2, 3])
	const map = new Map([
		['a', 1],
		['b', 2],
		['c', 3],
	])

	expect(lastOf(arr)).toBe(3)
	expect(lastOf(set)).toBe(3)
	expect(lastOf(map)).toEqual(['c', 3])

	expect(lastOf('Hello, World!')).toBe('!')
})
