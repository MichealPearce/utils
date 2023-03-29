import { expect, it } from 'vitest'
import { isMap, notMap } from './isMap'

it('checks if input is a Map', () => {
	expect(isMap(new Map())).toBe(true)
	expect(isMap(new Set())).toBe(false)
	expect(isMap(new WeakMap())).toBe(false)
	expect(isMap(new WeakSet())).toBe(false)
	expect(isMap(new Date())).toBe(false)
	expect(isMap(new Error())).toBe(false)
	expect(isMap(new Promise(() => {}))).toBe(false)
	expect(isMap(new Proxy({}, {}))).toBe(false)
	expect(isMap(Symbol('a'))).toBe(false)
})

it('checks if input is not a Map', () => {
	expect(notMap(new Map())).toBe(false)
	expect(notMap(new Set())).toBe(true)
	expect(notMap(new WeakMap())).toBe(true)
	expect(notMap(new WeakSet())).toBe(true)
	expect(notMap(new Date())).toBe(true)
	expect(notMap(new Error())).toBe(true)
	expect(notMap(new Promise(() => {}))).toBe(true)
	expect(notMap(new Proxy({}, {}))).toBe(true)
	expect(notMap(Symbol('a'))).toBe(true)
})
