import { Is, Not, not } from './is'
import { isObject } from './isObject'

export function isSet<T>(thing: T): thing is Is<T, Set<any>> {
	return isObject(thing) && thing instanceof Set
}

export function notSet<T>(thing: T): thing is Not<T, Set<any>> {
	return not(isSet(thing))
}
