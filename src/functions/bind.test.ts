import { expect, it } from 'vitest'
import { bind, bindAll } from './bind'

it('binds a function to an object', () => {
	const object = { a: 1 }
	const bound = bind(function (this: any) {
		return this.a
	}, object)

	expect(bound()).toBe(1)
})

it('binds all given methods of the object', () => {
	const object = {
		a: 1,
		b: 2,
		c: 3,
		add: function () {
			return this.a + this.b
		},
	}

	bindAll(object, ['add'])

	const add = object.add
	expect(add()).toBe(3)
})
