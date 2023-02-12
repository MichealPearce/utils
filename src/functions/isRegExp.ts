import { Is, Not, not } from './is'
import { isObject } from './isObject'

export function isRegExp<T>(thing: T): thing is Is<T, RegExp> {
	return isObject(thing) && thing instanceof RegExp
}

export function notRegExp<T>(thing: T): thing is Not<T, RegExp> {
	return not(isRegExp(thing))
}
