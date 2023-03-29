import { expect, it } from 'vitest'
import { size } from './size'

it('returns the size of the given input', () => {
	expect(size('')).toBe(0)
	expect(size('a')).toBe(1)

	expect(size([])).toBe(0)
	expect(size([1])).toBe(1)

	expect(size({})).toBe(0)
	expect(size({ a: 1 })).toBe(1)

	expect(size(new Set())).toBe(0)
	expect(size(new Set([1]))).toBe(1)

	expect(size(new Map())).toBe(0)
	expect(size(new Map([['a', 1]]))).toBe(1)

	expect(size(null as any)).toBe(0)
})
