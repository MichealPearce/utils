import { expect, it } from 'vitest'
import { isRecord, notRecord } from './isRecord'

it('checks if input is a record-like object', () => {
	expect(isRecord({})).toBe(true)
	expect(isRecord({ foo: 'bar' })).toBe(true)
	expect(isRecord(new Object())).toBe(true)
	expect(isRecord(new Object({ foo: 'bar' }))).toBe(true)

	expect(isRecord([])).toBe(false)
	expect(isRecord('')).toBe(false)
	expect(isRecord(1)).toBe(false)
	expect(isRecord(true)).toBe(false)
	expect(isRecord(null)).toBe(false)
	expect(isRecord(undefined)).toBe(false)
	expect(isRecord(() => {})).toBe(false)
	expect(isRecord(Symbol('foo'))).toBe(false)
})

it('checks if input is not a record-like object', () => {
	expect(notRecord({})).toBe(false)
	expect(notRecord({ foo: 'bar' })).toBe(false)
	expect(notRecord(new Object())).toBe(false)
	expect(notRecord(new Object({ foo: 'bar' }))).toBe(false)

	expect(notRecord([])).toBe(true)
	expect(notRecord('')).toBe(true)
	expect(notRecord(1)).toBe(true)
	expect(notRecord(true)).toBe(true)
	expect(notRecord(null)).toBe(true)
	expect(notRecord(undefined)).toBe(true)
	expect(notRecord(() => {})).toBe(true)
	expect(notRecord(Symbol('foo'))).toBe(true)
})
