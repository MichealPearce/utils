import { Is, Not, not } from './is'

/**
 * Check if a thing is a boolean.
 *
 * @param thing The thing to check.
 * @returns thing is boolean
 *
 * @example
 *
 * isBoolean(true) // true
 * isBoolean(false) // true
 * isBoolean(0) // false
 * isBoolean(1) // false
 * isBoolean('') // false
 * isBoolean('true') // false
 * isBoolean('false') // false
 * isBoolean([]) // false
 *
 * const thing = true as boolean | null | number
 *
 * if (isBoolean(thing)) {
 * 	// thing is type boolean
 * } else {
 * 	// thing is type null | number
 * }
 */
export function isBoolean<T>(thing: T): thing is Is<T, boolean> {
	return typeof thing === 'boolean'
}

/**
 * Check if a thing is not a boolean.
 *
 * @param thing The thing to check.
 * @returns thing is not boolean
 *
 * @example
 *
 * notBoolean(0) // true
 * notBoolean(1) // true
 * notBoolean('') // true
 * notBoolean('true') // true
 * notBoolean('false') // true
 * notBoolean([]) // true
 * notBoolean(true) // false
 * notBoolean(false) // false
 *
 * const thing = 0 as boolean | null | number
 *
 * if (notBoolean(thing)) {
 * 	// thing is type null | number
 * } else {
 * 	// thing is type boolean
 * }
 */
export function notBoolean<T>(thing: T): thing is Not<T, boolean> {
	return not(isBoolean(thing))
}
