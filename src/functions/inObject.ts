import { isObject } from './isObject'

/**
 * Check if a thing is a record-like object (not null, not array) and has all the given properties.
 *
 * @deprecated Use `inRecord` instead.
 */
export function inObject<
	T extends Record<any, any>,
	Props extends string | number | symbol,
>(
	thing: unknown,
	props: Props[],
): thing is {
	[P in Props]: T[P]
} {
	return isObject(thing) && props.every(prop => prop in thing)
}
