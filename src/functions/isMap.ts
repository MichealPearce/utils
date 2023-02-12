import { Is, Not, not } from './is'
import { isObject } from './isObject'

export function isMap<T>(thing: T): thing is Is<T, Map<any, any>> {
	return isObject(thing) && thing instanceof Map
}

export function notMap<T>(thing: T): thing is Not<T, Map<any, any>> {
	return not(isMap(thing))
}
