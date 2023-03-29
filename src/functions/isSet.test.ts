import { expect, it } from 'vitest'
import { isSet, notSet } from './isSet'

it('checks if input is a Set', () => {
	expect(isSet(new Set())).toBe(true)
	expect(isSet(new Map())).toBe(false)
	expect(isSet(new WeakSet())).toBe(false)
	expect(isSet(new WeakMap())).toBe(false)
	expect(isSet(new Date())).toBe(false)
	expect(isSet(new Error())).toBe(false)
	expect(isSet(new Promise(() => {}))).toBe(false)
	expect(isSet(new Proxy({}, {}))).toBe(false)
	expect(isSet(Symbol('a'))).toBe(false)
})

it('checks if input is not a Set', () => {
	expect(notSet(new Set())).toBe(false)
	expect(notSet(new Map())).toBe(true)
	expect(notSet(new WeakSet())).toBe(true)
	expect(notSet(new WeakMap())).toBe(true)
	expect(notSet(new Date())).toBe(true)
	expect(notSet(new Error())).toBe(true)
	expect(notSet(new Promise(() => {}))).toBe(true)
	expect(notSet(new Proxy({}, {}))).toBe(true)
	expect(notSet(Symbol('a'))).toBe(true)
})
