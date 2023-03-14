import { Is, Not, not } from './is'

/**
 * checks if thing is an array
 *
 * @param thing
 * @returns thing is any[]
 *
 * @example
 * const thing = [1, 2, 3] as number[] | string
 *
 * if (isArray(thing)) {
 * 	// thing is number[]
 * } else {
 * 	// thing is string
 * }
 *
 */
export function isArray<T>(thing: T): thing is Is<T, any[]> {
	return Array.isArray(thing)
}

/**
 * checks if thing is an empty array
 *
 * @param thing
 * @returns thing is []
 */
export function isEmptyArray<T>(thing: T): thing is Is<T, []> {
	return isArray(thing) && not(thing.length)
}

/**
 * checks if thing is not an array
 *
 * @param thing
 * @returns thing is not any[]
 *
 * @example
 * const thing = [1, 2, 3] as number[] | string
 *
 * if (notArray(thing)) {
 * 	// thing is string
 * } else {
 * 	// thing is number[]
 * }
 */
export function notArray<T>(thing: T): thing is Not<T, any[]> {
	return not(isArray(thing))
}

/**
 * checks if thing is not an empty array
 *
 * @param thing
 * @returns thing is not []
 *
 */
export function notEmptyArray<T>(thing: T): thing is Not<T, []> {
	return not(isEmptyArray(thing))
}
