import { Is, Not, not } from './is'
import { notArray } from './isArray'
import { notNull } from './isNull'

/**
 * Strictly checks if a value is a record like object. This means that it is not an array, null, or a primitive.
 *
 * @deprecated Use `isRecord` instead
 */
export function isObject<T extends object>(
	thing: unknown,
): thing is Is<T, object> {
	return typeof thing === 'object' && notNull(thing) && notArray(thing)
}

/**
 * Strictly checks if a value is a record like object. This means that it is not an array, null, or a primitive.
 *
 * @deprecated Use `notRecord` instead
 */
export function notObject<T>(thing: T): thing is Not<T, object> {
	return not(isObject(thing))
}
