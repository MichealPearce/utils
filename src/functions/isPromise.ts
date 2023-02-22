import { inObject } from './inObject'
import { Is, Not, not } from './is'
import { isFunction } from './isFunction'
import { isObject } from './isObject'

export function isPromise<T>(thing: T): thing is Is<T, Promise<any>> {
	return isObject(thing) && thing instanceof Promise
}

export function isPromiseLike<T>(thing: T): thing is Is<T, PromiseLike<any>> {
	return isObject(thing) && inObject(thing, ['then']) && isFunction(thing.then)
}

export function notPromise<T>(thing: T): thing is Not<T, Promise<any>> {
	return not(isPromise(thing))
}

export function notPromiseLike<T>(thing: T): thing is Not<T, PromiseLike<any>> {
	return not(isPromiseLike(thing))
}
