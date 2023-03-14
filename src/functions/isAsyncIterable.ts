import { inObject } from './inObject'
import { Is, Not, not } from './is'
import { isFunction } from './isFunction'

/**
 * Check if a thing is an async iterable.
 *
 * @param thing The thing to check.
 * @returns thing is AsyncIterable<any>
 */
export function isAsyncIterable<T>(
	thing: T,
): thing is Is<T, AsyncIterable<any>> {
	return (
		inObject(thing, [Symbol.asyncIterator]) &&
		isFunction(thing[Symbol.asyncIterator])
	)
}

/**
 * Check if a thing is not an async iterable.
 *
 * @param thing The thing to check.
 * @returns thing is not AsyncIterable<any>
 */
export function notAsyncIterable<T>(
	thing: T,
): thing is Not<T, AsyncIterable<any>> {
	return not(isAsyncIterable(thing))
}
