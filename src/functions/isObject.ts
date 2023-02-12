import { Is, Not, not } from './is'
import { notArray } from './isArray'
import { notNull } from './isNull'

export function isObject<T extends object>(
	thing: unknown,
): thing is Is<T, object> {
	return typeof thing === 'object' && notNull(thing) && notArray(thing)
}

export function notObject<T>(thing: T): thing is Not<T, object> {
	return not(isObject(thing))
}
