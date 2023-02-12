import { Is, Not, not } from './is'
import { isObject } from './isObject'

export function isDate<T>(thing: T): thing is Is<T, Date> {
	return isObject(thing) && thing instanceof Date
}

export function notDate<T>(thing: T): thing is Not<T, Date> {
	return not(isDate(thing))
}
