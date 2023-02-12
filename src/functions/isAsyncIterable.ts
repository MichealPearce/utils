import { inObject } from './inObject'
import { Is, Not, not } from './is'
import { isFunction } from './isFunction'

export function isAsyncIterable<T>(
	thing: T,
): thing is Is<T, AsyncIterable<any>> {
	return (
		inObject(thing, [Symbol.asyncIterator]) &&
		isFunction(thing[Symbol.asyncIterator])
	)
}

export function notAsyncIterable<T>(
	thing: T,
): thing is Not<T, AsyncIterable<any>> {
	return not(isAsyncIterable(thing))
}
