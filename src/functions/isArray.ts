import { Is, Not, not } from './is'

export function isArray<T>(thing: T): thing is Is<T, any[]> {
	return Array.isArray(thing)
}

export function notArray<T>(thing: T): thing is Not<T, any[]> {
	return not(isArray(thing))
}
