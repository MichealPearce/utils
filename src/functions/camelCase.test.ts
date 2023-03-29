import { expect, it } from 'vitest'
import { camelCase } from './camelCase'

it('turns a string into camel case', () => {
	expect(camelCase('foo bar')).toBe('fooBar')
	expect(camelCase('foo-bar')).toBe('fooBar')
	expect(camelCase('foo_bar')).toBe('fooBar')
	expect(camelCase('foo.bar')).toBe('fooBar')
	expect(camelCase('foo bar baz')).toBe('fooBarBaz')
})
