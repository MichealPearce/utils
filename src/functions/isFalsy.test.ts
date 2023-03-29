import { expect, it } from 'vitest'
import { isFalsy, notFalsy } from './isFalsy'

it('checks if input is falsy', () => {
	expect(isFalsy(null)).toBe(true)
	expect(isFalsy(undefined)).toBe(true)
	expect(isFalsy(0)).toBe(true)
	expect(isFalsy('')).toBe(true)
	expect(isFalsy([])).toBe(false)
	expect(isFalsy({})).toBe(false)
	expect(isFalsy(false)).toBe(true)
	expect(isFalsy(NaN)).toBe(true)
	expect(isFalsy(1)).toBe(false)
})

it('checks if input is not falsy', () => {
	expect(notFalsy(null)).toBe(false)
	expect(notFalsy(undefined)).toBe(false)
	expect(notFalsy(0)).toBe(false)
	expect(notFalsy('')).toBe(false)
	expect(notFalsy([])).toBe(true)
	expect(notFalsy({})).toBe(true)
	expect(notFalsy(false)).toBe(false)
	expect(notFalsy(NaN)).toBe(false)
	expect(notFalsy(1)).toBe(true)
})
