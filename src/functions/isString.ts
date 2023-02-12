import { Is, Not, not } from './is'

export function isString<T>(thing: T): thing is Is<T, string> {
	return typeof thing === 'string'
}

export function notString<T>(thing: T): thing is Not<T, string> {
	return not(isString(thing))
}
