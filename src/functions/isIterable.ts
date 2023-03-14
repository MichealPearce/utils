import { inObject } from './inObject'
import { Is, Not, not } from './is'
import { isFunction } from './isFunction'

/**
 * Check if a thing is iterable.
 *
 * @param thing The thing to check.
 * @returns thing is Iterable<any>
 */
export function isIterable<T>(thing: T): thing is Is<T, Iterable<any>> {
	return (
		inObject(thing, [Symbol.iterator]) && isFunction(thing[Symbol.iterator])
	)
}

/**
 * Check if a thing is not iterable.
 *
 * @param thing The thing to check.
 * @returns thing is Not<T, Iterable<any>>
 */
export function notIterable<T>(thing: T): thing is Not<T, Iterable<any>> {
	return not(isIterable(thing))
}
