import { Is, Not, not } from './is'
import { isObject } from './isObject'

/**
 * Returns true if the thing is a Date object.
 *
 * @param thing The thing to test.
 * @returns thing is Date
 *
 * @example
 * isDate(new Date()) // true
 * isDate(true) // false
 *
 * const thing = new Date() as Date | boolean | null
 *
 * if (isDate(thing)) {
 * 	// thing is type Date
 * } else {
 * 	// thing is type boolean | null
 * }
 */
export function isDate<T>(thing: T): thing is Is<T, Date> {
	return isObject(thing) && thing instanceof Date
}

/**
 * Returns true if the thing is not a Date object.
 *
 * @param thing The thing to test.
 * @returns thing is Not<T, Date>
 *
 * @example
 * notDate(new Date()) // false
 * notDate(true) // true
 *
 * const thing = new Date() as Date | boolean | null
 *
 * if (notDate(thing)) {
 * 	// thing is type boolean | null
 * } else {
 * 	// thing is type Date
 * }
 */
export function notDate<T>(thing: T): thing is Not<T, Date> {
	return not(isDate(thing))
}
