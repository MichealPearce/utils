import { expect, it } from 'vitest'
import { isNumber, notNumber } from './isNumber'

it('checks if input is a number', () => {
	expect(isNumber(0)).toBe(true)
	expect(isNumber(1)).toBe(true)
	expect(isNumber(Infinity)).toBe(true)
	expect(isNumber(-Infinity)).toBe(true)
	expect(isNumber(NaN)).toBe(true)
	expect(isNumber('')).toBe(false)
	expect(isNumber([])).toBe(false)
	expect(isNumber({})).toBe(false)
	expect(isNumber(null)).toBe(false)
	expect(isNumber(undefined)).toBe(false)
})

it('checks if input is not a number', () => {
	expect(notNumber(0)).toBe(false)
	expect(notNumber(1)).toBe(false)
	expect(notNumber(Infinity)).toBe(false)
	expect(notNumber(-Infinity)).toBe(false)
	expect(notNumber(NaN)).toBe(false)
	expect(notNumber('')).toBe(true)
	expect(notNumber([])).toBe(true)
	expect(notNumber({})).toBe(true)
	expect(notNumber(null)).toBe(true)
	expect(notNumber(undefined)).toBe(true)
})
