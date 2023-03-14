import { Is, Not, not } from './is'

export function isString<T>(thing: T): thing is Is<T, string> {
	return typeof thing === 'string'
}

export function isEmptyString<T>(thing: T): thing is Is<T, ''> {
	return isString(thing) && not(thing.length)
}

export function notString<T>(thing: T): thing is Not<T, string> {
	return not(isString(thing))
}

export function notEmptyString<T>(thing: T): thing is Not<T, ''> {
	return not(isEmptyString(thing))
}
