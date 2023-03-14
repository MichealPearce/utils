import { Is, Not, not } from './is'

/**
 * Check if a thing is a bigint.
 *
 * @param thing The thing to check.
 * @returns thing is bigint
 *
 * @example
 *
 * const thing = 1n as bigint | number
 *
 * if (isBigInt(thing)) {
 * 	// thing is a bigint
 * } else {
 * 	// thing is number
 * }
 */
export function isBigInt<T>(thing: T): thing is Is<T, bigint> {
	return typeof thing === 'bigint'
}

/**
 * Check if a thing is not a bigint.
 *
 * @param thing The thing to check.
 * @returns thing is not bigint
 *
 * @example
 *
 * const thing = 1n as bigint | number
 *
 * if (notBigInt(thing)) {
 * 	// thing is number
 * } else {
 * 	// thing is a bigint
 * }
 */
export function notBigInt<T>(thing: T): thing is Not<T, bigint> {
	return not(isBigInt(thing))
}
