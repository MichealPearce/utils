export function lastOf<Item, Collection extends Array<Item> | Iterable<Item>>(
	collection: Collection,
): Item | undefined {
	let last: Item | undefined
	for (const item of collection) last = item
	return last
}
