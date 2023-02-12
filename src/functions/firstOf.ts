export function firstOf<Item, Collection extends Array<Item> | Iterable<Item>>(
	collection: Collection,
): Item | undefined {
	for (const item of collection) return item
	return undefined
}
