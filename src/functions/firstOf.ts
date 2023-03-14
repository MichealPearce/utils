/**
 * Returns the first item of a collection.
 *
 * @param collection The collection to get the first item of.
 * @returns The first item of the collection, or undefined if the collection is empty.
 *
 * @example
 * firstOf([1, 2, 3]) // 1
 * firstOf(new Set([1, 2, 3])) // 1
 * firstOf(new Map([['a', 1], ['b', 2], ['c', 3]])) // ['a', 1]
 * firstOf('hello') // 'h'
 */
export function firstOf<Collection extends Iterable<any> | string>(
	collection: Collection,
): Collection extends Iterable<infer Item>
	? Item | undefined
	: string | undefined {
	for (const item of collection) return item

	// @ts-expect-error - return type clearly states that this could return undefined, but alast typescript doesn't understand that
	return undefined
}
