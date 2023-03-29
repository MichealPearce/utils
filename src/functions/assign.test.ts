import { expect, it } from 'vitest'
import { assign } from './assign'

it('assigns the values of all enumerable own properties from one or more source objects to a target object', () => {
	const target = { a: 1, b: 2 }
	const source = { b: 4, c: 5 }

	const result = assign(target, source)

	expect(result).toEqual({ a: 1, b: 4, c: 5 })
})
