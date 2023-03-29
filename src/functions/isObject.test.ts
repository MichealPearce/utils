import { expect, it } from 'vitest'
import { isObject, notObject } from './isObject'

it('checks if input is a object (excluding null and arrays)', () => {
	expect(isObject({})).toBe(true)
	expect(isObject([])).toBe(false)
	expect(isObject(null)).toBe(false)
	expect(isObject(undefined)).toBe(false)
	expect(isObject(new Date())).toBe(true)
	expect(isObject(new Error())).toBe(true)
	expect(isObject(new Promise(() => {}))).toBe(true)
	expect(isObject(new Proxy({}, {}))).toBe(true)
	expect(isObject(Symbol('a'))).toBe(false)
})

it('checks if input is not a object (excluding null and arrays)', () => {
	expect(notObject({})).toBe(false)
	expect(notObject([])).toBe(true)
	expect(notObject(null)).toBe(true)
	expect(notObject(undefined)).toBe(true)
	expect(notObject(new Date())).toBe(false)
	expect(notObject(new Error())).toBe(false)
	expect(notObject(new Promise(() => {}))).toBe(false)
	expect(notObject(new Proxy({}, {}))).toBe(false)
	expect(notObject(Symbol('a'))).toBe(true)
})
