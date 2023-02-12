export type GroupResolver<Item> = (item: Item) => any

export function group<Item, Resolver extends GroupResolver<Item>>(
	items: Item[],
	resolver: Resolver,
): Map<ReturnType<Resolver>, Item[]> {
	const grouped = new Map<ReturnType<Resolver>, Item[]>()

	for (const item of items) {
		const key = resolver(item)

		if (grouped.has(key)) grouped.get(key)!.push(item)
		else grouped.set(key, [item])
	}

	return grouped
}

export function groupByKey<Item extends object, Key extends keyof Item>(
	items: Item[],
	key: Key,
): Map<Item[Key], Item[]> {
	return group(items, item => item[key])
}

export function groupByKeys<Item extends object, Key extends keyof Item>(
	items: Item[],
	keys: Key[],
	separator = '|',
): Map<string, Item[]> {
	return group(items, item => keys.map(key => item[key]).join(separator))
}
