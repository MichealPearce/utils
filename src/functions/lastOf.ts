/**
 * Returns the last item of a collection.
 *
 * @param collection The collection to get the last item of.
 * @returns The last item of the collection, or undefined if the collection is empty.
 *
 * @example
 * lastOf([1, 2, 3]) // 3
 * lastOf(new Set([1, 2, 3])) // 3
 * lastOf(new Map([['a', 1], ['b', 2], ['c', 3]])) // ['c', 3]
 * lastOf('hello') // 'o'
 */
export function lastOf<Collection extends Iterable<any> | string>(
	collection: Collection,
): Collection extends Iterable<infer Item>
	? Item | undefined
	: string | undefined {
	let last: any
	for (const item of collection) last = item
	return last
}
