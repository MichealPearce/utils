import { expect, it } from 'vitest'
import { isNull, notNull } from './isNull'

it('checks if input is null', () => {
	expect(isNull(null)).toBe(true)
	expect(isNull(undefined)).toBe(false)
	expect(isNull(0)).toBe(false)
	expect(isNull('')).toBe(false)
	expect(isNull([])).toBe(false)
	expect(isNull({})).toBe(false)
})

it('checks if input is not null', () => {
	expect(notNull(null)).toBe(false)
	expect(notNull(undefined)).toBe(true)
	expect(notNull(0)).toBe(true)
	expect(notNull('')).toBe(true)
	expect(notNull([])).toBe(true)
	expect(notNull({})).toBe(true)
})
