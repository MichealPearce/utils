/**
 * Pick keys from an object
 *
 * @param obj The object to pick keys from.
 * @param keys The keys to pick.
 * @returns A new object with the specified keys picked.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 }
 * const newObj = pick(obj, ['a', 'c'])
 *
 * console.log(newObj) // { a: 1, c: 3 }
 */
export function pick<Obj extends Record<any, any>, Key extends keyof Obj>(
	obj: Obj,
	keys: Key[],
): Pick<Obj, Key> {
	return keys.reduce((acc, key) => {
		acc[key] = obj[key]
		return acc
	}, {} as Pick<Obj, Key>)
}
