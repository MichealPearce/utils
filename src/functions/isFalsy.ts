import { is, Is, Not, not } from './is'

export type FalsyValue = null | undefined | false | 0 | '' | void | -0 | 0n

/**
 * checks if thing is falsy
 *
 * @alias not
 * @param thing
 * @returns thing is FalsyValue
 *
 * @example
 * const thing = 'hello' as string | null | false
 *
 * if (isFalsy(thing)) {
 * 	// thing is type null | false
 * } else {
 * 	// thing is type string
 * }
 */
export function isFalsy<T>(thing: T): thing is Is<T, FalsyValue> {
	return not(thing)
}

/**
 * checks if thing is not falsy
 *
 * @alias is
 * @param thing
 * @returns thing is not FalsyValue
 *
 * @example
 * const thing = 'hello' as string | null | false
 *
 * if (notFalsy(thing)) {
 * 	// thing is type string
 * } else {
 * 	// thing is type null | false
 * }
 */
export function notFalsy<T>(thing: T): thing is Not<T, FalsyValue> {
	return is(thing)
}
