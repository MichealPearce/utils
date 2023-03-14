import { Is, Not } from './is'

/**
 * Checks if thing is defined
 *
 * @param thing - The thing to check
 * @returns thing is defined
 *
 * @example
 *
 * const thing = 'thing' as string | undefined
 *
 * if (isDefined(thing)) {
 * 	// thing is type string
 * } else {
 * 	// thing is type undefined
 * }
 */
export function isDefined<T>(thing: T): thing is Not<T, undefined> {
	return typeof thing !== 'undefined'
}

/**
 * Checks if thing is not defined
 *
 * @param thing - The thing to check
 * @returns thing is not defined
 *
 * @example
 *
 * const thing = 'thing' as string | undefined
 *
 * if (notDefined(thing)) {
 * 	// thing is type undefined
 * } else {
 * 	// thing is type string
 * }
 */
export function notDefined<T>(thing: T): thing is Is<T, undefined> {
	return typeof thing === 'undefined'
}
