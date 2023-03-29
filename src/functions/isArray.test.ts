import { expect, it } from 'vitest'
import { isArray, isEmptyArray, notArray, notEmptyArray } from './isArray'

it('returns true if input is a array', () => {
	expect(isArray([])).toBe(true)
	expect(isArray([1, 2, 3])).toBe(true)
	expect(isArray(new Array())).toBe(true)
	expect(isArray(new Array(1, 2, 3))).toBe(true)

	expect(isArray({})).toBe(false)
	expect(isArray('')).toBe(false)
	expect(isArray(1)).toBe(false)
	expect(isArray(true)).toBe(false)
	expect(isArray(null)).toBe(false)
	expect(isArray(undefined)).toBe(false)
	expect(isArray(() => {})).toBe(false)
	expect(isArray(Symbol('foo'))).toBe(false)
})

it('returns true if input is a empty array', () => {
	expect(isEmptyArray([])).toBe(true)
	expect(isEmptyArray([1, 2, 3])).toBe(false)
	expect(isEmptyArray(new Array())).toBe(true)
	expect(isEmptyArray(new Array(1, 2, 3))).toBe(false)
})

it('returns true if input is a array', () => {
	expect(notArray([])).toBe(false)
	expect(notArray([1, 2, 3])).toBe(false)
	expect(notArray(new Array())).toBe(false)

	expect(notArray({})).toBe(true)
	expect(notArray('')).toBe(true)
	expect(notArray(1)).toBe(true)
	expect(notArray(true)).toBe(true)
	expect(notArray(null)).toBe(true)
	expect(notArray(undefined)).toBe(true)
	expect(notArray(() => {})).toBe(true)
	expect(notArray(Symbol('foo'))).toBe(true)
})

it('returns true if input is not a empty array', () => {
	expect(notEmptyArray([])).toBe(false)
	expect(notEmptyArray([1, 2, 3])).toBe(true)
	expect(notEmptyArray(new Array())).toBe(false)
	expect(notEmptyArray(new Array(1, 2, 3))).toBe(true)
})
