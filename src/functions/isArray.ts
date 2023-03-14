import { Is, Not, not } from './is'

export function isArray<T>(thing: T): thing is Is<T, any[]> {
	return Array.isArray(thing)
}

export function isEmptyArray<T>(thing: T): thing is Is<T, []> {
	return isArray(thing) && not(thing.length)
}

export function notArray<T>(thing: T): thing is Not<T, any[]> {
	return not(isArray(thing))
}

export function notEmptyArray<T>(thing: T): thing is Not<T, []> {
	return not(isEmptyArray(thing))
}
