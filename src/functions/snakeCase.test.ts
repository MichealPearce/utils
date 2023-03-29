import { expect, it } from 'vitest'
import { snakeCase } from './snakeCase'

it('should convert a string to snake case', () => {
	expect(snakeCase('hello world')).toBe('hello_world')
	expect(snakeCase('hello-world')).toBe('hello_world')
	expect(snakeCase('hello_world')).toBe('hello_world')
	expect(snakeCase('helloWorld')).toBe('hello_world')
	expect(snakeCase('HelloWorld')).toBe('hello_world')
	expect(snakeCase('Hello World')).toBe('hello_world')
	expect(snakeCase('Hello-World')).toBe('hello_world')
	expect(snakeCase('Hello_World')).toBe('hello_world')
	expect(snakeCase('Hello_World')).toBe('hello_world')
})
