import { isRecord } from './isRecord'

export function inRecord<
	T extends Record<any, any>,
	Props extends string | number | symbol,
>(
	thing: unknown,
	props: Props[],
): thing is {
	[P in Props]: T[P]
} {
	return isRecord(thing) && props.every(prop => prop in thing)
}
