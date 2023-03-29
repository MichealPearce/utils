import { expect, it } from 'vitest'
import { isEmptyString, isString, notEmptyString, notString } from './isString'

it('returns true if input is a string', () => {
	expect(isString('')).toBe(true)
	expect(isString('foo')).toBe(true)
	expect(isString(new String('foo'))).toBe(true)

	expect(isString({})).toBe(false)
	expect(isString([])).toBe(false)
	expect(isString(1)).toBe(false)
	expect(isString(true)).toBe(false)
	expect(isString(null)).toBe(false)
	expect(isString(undefined)).toBe(false)
	expect(isString(() => {})).toBe(false)
	expect(isString(Symbol('foo'))).toBe(false)
})

it('returns true if input is a empty string', () => {
	expect(isEmptyString('')).toBe(true)
	expect(isEmptyString('foo')).toBe(false)
	expect(isEmptyString(new String('foo'))).toBe(false)
	expect(isEmptyString(new String(''))).toBe(true)
})

it('returns true if input is not a string', () => {
	expect(notString('')).toBe(false)
	expect(notString('foo')).toBe(false)
	expect(notString(new String('foo'))).toBe(false)

	expect(notString({})).toBe(true)
	expect(notString([])).toBe(true)
	expect(notString(1)).toBe(true)
	expect(notString(true)).toBe(true)
	expect(notString(null)).toBe(true)
	expect(notString(undefined)).toBe(true)
	expect(notString(() => {})).toBe(true)
	expect(notString(Symbol('foo'))).toBe(true)
})

it('returns true if input is not a empty string', () => {
	expect(notEmptyString('')).toBe(false)
	expect(notEmptyString('foo')).toBe(true)
	expect(notEmptyString(new String('foo'))).toBe(true)
	expect(notEmptyString(new String(''))).toBe(false)
})
