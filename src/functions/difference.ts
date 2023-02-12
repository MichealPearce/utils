/**
 * Returns the difference between two arrays.
 * The difference is the items that are in the first array but not the second.
 *
 * @param target The array to compare.
 * @param sources The arrays to compare against.
 * @returns The difference between the arrays.
 *
 * @example
 * const arr1 = [1, 2, 3]
 * const arr2 = [2, 3, 4]
 * const arr3 = [3, 4, 5]
 *
 * const diff = difference(arr1, arr2, arr3)
 *
 * console.log(diff) // [1]
 */
export function difference<T>(target: T[], ...sources: T[][]): T[] {
	const diff: T[] = []

	for (const item of target) {
		const seen = sources.some(source => source.includes(item))
		if (!seen) diff.push(item)
	}

	return diff
}
