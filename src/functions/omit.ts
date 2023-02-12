/**
 * Returns a new object with the specified keys omitted.
 *
 * @param obj The object to omit keys from.
 * @param keys The keys to omit.
 * @returns A new object with the specified keys omitted.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 }
 * const newObj = omit(obj, ['a', 'c'])
 *
 * console.log(newObj) // { b: 2 }
 */
export function omit<Obj extends object, Key extends keyof Obj>(
	obj: Obj,
	keys: Key[],
): Omit<Obj, Key> {
	return Object.keys(obj)
		.filter(key => !keys.includes(key as Key))
		.reduce((acc, key) => {
			acc[key] = obj[key]
			return acc
		}, {} as Omit<Obj, Key>)
}
