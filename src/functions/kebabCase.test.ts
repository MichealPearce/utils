import { expect, it } from 'vitest'
import { kebabCase } from './kebabCase'

it('should convert a string to kebab case', () => {
	expect(kebabCase('hello world')).toBe('hello-world')
	expect(kebabCase('hello-world')).toBe('hello-world')
	expect(kebabCase('hello_world')).toBe('hello-world')
	expect(kebabCase('helloWorld')).toBe('hello-world')
	expect(kebabCase('HelloWorld')).toBe('hello-world')
	expect(kebabCase('Hello World')).toBe('hello-world')
	expect(kebabCase('Hello-World')).toBe('hello-world')
	expect(kebabCase('Hello_World')).toBe('hello-world')
	expect(kebabCase('Hello_World')).toBe('hello-world')
})
