import { expect, it } from 'vitest'
import { is, not } from './is'

it('returns true for truthy values', () => {
	expect(is(true)).toBe(true)
	expect(is(false)).toBe(false)
	expect(is(1)).toBe(true)
	expect(is(0)).toBe(false)
	expect(is('')).toBe(false)
	expect(is('foo')).toBe(true)
	expect(is([])).toBe(true)
	expect(is({})).toBe(true)
	expect(is(null)).toBe(false)
	expect(is(undefined)).toBe(false)
})

it('returns true for falsy values', () => {
	expect(not(true)).toBe(false)
	expect(not(false)).toBe(true)
	expect(not(1)).toBe(false)
	expect(not(0)).toBe(true)
	expect(not('')).toBe(true)
	expect(not('foo')).toBe(false)
	expect(not([])).toBe(false)
	expect(not({})).toBe(false)
	expect(not(null)).toBe(true)
	expect(not(undefined)).toBe(true)
})
