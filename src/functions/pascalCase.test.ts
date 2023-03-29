import { expect, it } from 'vitest'
import { pascalCase } from './pascalCase'

it('should convert a string to pascal case', () => {
	expect(pascalCase('hello world')).toBe('HelloWorld')
	expect(pascalCase('hello-world')).toBe('HelloWorld')
	expect(pascalCase('hello_world')).toBe('HelloWorld')
	expect(pascalCase('helloWorld')).toBe('HelloWorld')
	expect(pascalCase('HelloWorld')).toBe('HelloWorld')
	expect(pascalCase('Hello World')).toBe('HelloWorld')
	expect(pascalCase('Hello-World')).toBe('HelloWorld')
	expect(pascalCase('Hello_World')).toBe('HelloWorld')
	expect(pascalCase('Hello_World')).toBe('HelloWorld')
})
