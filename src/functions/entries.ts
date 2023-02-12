export type Entry<A, B> = [A, B]
export type Entries<A, B> = Entry<A, B>[]

/**
 * Returns an array of entries from an object.
 *
 * @param target The object to get entries from.
 * @returns An array of entries.
 *
 * @example
 * const obj = { a: 1, b: 2 }
 * const entries = toEntries(obj)
 *
 * console.log(entries) // [['a', 1], ['b', 2]]
 */
export function toEntries<A extends Record<any, any>>(
	target: A,
): Entries<keyof A, A[keyof A]> {
	return Object.entries(target) as any
}

/**
 * Returns an object from an array of entries.
 *
 * @param entries The array of entries to get an object from.
 * @returns An object.
 *
 * @example
 * const entries = [['a', 1], ['b', 2]]
 * const obj = fromEntries(entries)
 *
 * console.log(obj) // { a: 1, b: 2 }
 */
export function fromEntries<A extends Record<any, any>>(
	entries: Entries<keyof A, A[keyof A]>,
): A {
	return Object.fromEntries(entries) as any
}
