import { Is, Not, not } from './is'
import { isRecord } from './isRecord'

export function isMap<T>(thing: T): thing is Is<T, Map<any, any>> {
	return isRecord(thing) && thing instanceof Map
}

export function notMap<T>(thing: T): thing is Not<T, Map<any, any>> {
	return not(isMap(thing))
}
