import { Is, Not, not } from './is'
import { isObject } from './isObject'

/**
 * Checks if thing is instance of Error.
 *
 * @param thing The thing to check.
 * @returns thing is Error
 *
 * @example
 * const thing = new Error('Hello, there!') as Error | null
 *
 * if (isError(thing)) {
 * 	// thing is type Error
 * } else {
 * 	// thing is type null
 * }
 */
export function isError<T>(thing: T): thing is Is<T, Error> {
	return isObject(thing) && thing instanceof Error
}

/**
 * Checks if thing is not instance of Error.
 *
 * @param thing The thing to check.
 * @returns thing is not Error
 *
 * @example
 * const thing = new Error('Hello, there!') as Error | null
 *
 * if (notError(thing)) {
 * 	// thing is type null
 * } else {
 * 	// thing is type Error
 * }
 */
export function notError<T>(thing: T): thing is Not<T, Error> {
	return not(isError(thing))
}
