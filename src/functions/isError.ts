import { Is, Not, not } from './is'
import { isObject } from './isObject'

export function isError<T>(thing: T): thing is Is<T, Error> {
	return isObject(thing) && thing instanceof Error
}

export function notError<T>(thing: T): thing is Not<T, Error> {
	return not(isError(thing))
}
