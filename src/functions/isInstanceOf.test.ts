import { expect, it } from 'vitest'
import { isInstanceOf, notInstanceOf } from './isInstanceOf'

it('isInstanceOf function', () => {
	class MyClass {}
	const myInstance = new MyClass()

	expect(isInstanceOf(myInstance, MyClass)).toBe(true)
	expect(isInstanceOf({}, MyClass)).toBe(false)
	expect(isInstanceOf(null, MyClass)).toBe(false)
	expect(isInstanceOf(undefined, MyClass)).toBe(false)
	expect(isInstanceOf(123, MyClass)).toBe(false)
})

it('notInstanceOf function', () => {
	class MyClass {}
	const myInstance = new MyClass()

	expect(notInstanceOf(myInstance, MyClass)).toBe(false)
	expect(notInstanceOf({}, MyClass)).toBe(true)
	expect(notInstanceOf(null, MyClass)).toBe(true)
	expect(notInstanceOf(undefined, MyClass)).toBe(true)
	expect(notInstanceOf(123, MyClass)).toBe(true)
})
