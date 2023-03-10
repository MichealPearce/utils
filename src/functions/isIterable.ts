import { inObject } from './inObject'
import { Is, Not, not } from './is'
import { isFunction } from './isFunction'

export function isIterable<T>(thing: T): thing is Is<T, Iterable<any>> {
	return (
		inObject(thing, [Symbol.iterator]) && isFunction(thing[Symbol.iterator])
	)
}

export function notIterable<T>(thing: T): thing is Not<T, Iterable<any>> {
	return not(isIterable(thing))
}
