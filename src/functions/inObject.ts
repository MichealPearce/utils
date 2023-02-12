import { isObject } from './isObject'

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
