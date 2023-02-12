import { Is, Not, not } from './is'
import { isObject } from './isObject'

export function isPromise<T>(thing: T): thing is Is<T, Promise<any>> {
	return isObject(thing) && thing instanceof Promise
}

export function notPromise<T>(thing: T): thing is Not<T, Promise<any>> {
	return not(isPromise(thing))
}
