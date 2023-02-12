/**
 * Returns a new array with all duplicate values removed.
 * The order of the values is preserved.
 * The values are compared using strict equality.
 *
 * @param items The array to remove duplicates from.
 * @returns A new array with all duplicate values removed.
 *
 * @example
 * const arr = [1, 2, 3, 2, 1]
 * const newArr = uniq(arr)
 *
 * console.log(newArr) // [1, 2, 3]
 */
export function uniq<T>(items: T[]): T[] {
	const seen = new Set<T>()

	for (const item of items)
		if (seen.has(item)) continue
		else seen.add(item)

	return Array.from(seen)
}

/**
 * Returns a new array with all duplicate objects removed based on provided keys.
 * The order of the values is preserved.
 * The values are compared using strict equality.
 *
 * @param items The array to remove duplicates from.
 * @param keys The keys to compare.
 * @returns A new array with all duplicate objects removed.
 *
 * @example
 * const arr = [
 * 	{ a: 1, b: 2 },
 * 	{ a: 1, b: 2 },
 * 	{ a: 2, b: 1 },
 * 	{ a: 2, b: 1 },
 * ]
 *
 * const newArr = uniqByKeys(arr, ['a', 'b'])
 *
 * console.log(newArr) // [{ a: 1, b: 2 }, { a: 2, b: 1 }]
 */
export function uniqByKeys<T extends object, K extends keyof T>(
	items: T[],
	keys: K[],
): T[] {
	const seen = new Map<string, T>()

	for (const item of items) {
		const key = keys.map(key => item[key]).join('')

		if (seen.has(key)) continue
		else seen.set(key, item)
	}

	return Array.from(seen.values())
}
