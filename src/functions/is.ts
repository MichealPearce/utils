export type Is<Thing, Match> = Thing extends unknown
	? Match
	: Thing extends Match
	? Thing
	: never

export type Not<Thing, Match> = Thing extends Match
	? never
	: Thing extends unknown
	? Thing
	: never

/**
 * A function that returns true if the given value is truthy. Also has generics allowing for type narrowing
 *
 * @param condition
 * @returns boolean
 *
 * @example
 *
 * is(1) // true
 * is(0) // false
 * is('') // false
 * is('hello') // true
 * is([]) // true
 * is({}) // true
 * is(null) // false
 * is(undefined) // false
 * is(false) // false
 * is(true) // true
 *
 * // Type narrowing
 * let value: string | undefined
 *
 * if (is<typeof value, string>(value)) {
 * 	// value is type string
 * } else {
 * 	// value is type undefined
 * }
 */
export function is<Thing, Match>(
	condition: any,
): condition is Is<Thing, Match> {
	return !!condition
}

/**
 * A function that returns true if the given value is falsy. Also has generics allowing for type narrowing
 *
 * @param condition
 * @returns boolean
 *
 * @example
 *
 * not(1) // false
 * not(0) // true
 * not('') // true
 * not('hello') // false
 * not([]) // false
 * not({}) // false
 * not(null) // true
 * not(undefined) // true
 * not(false) // true
 * not(true) // false
 *
 * // Type narrowing
 * let value: string | undefined
 *
 * if (not<typeof value, string>(value)) {
 * 	// value is type undefined
 * } else {
 * 	// value is type string
 * }
 */
export function not<Thing, Match>(
	condition: any,
): condition is Not<Thing, Match> {
	return !condition
}
