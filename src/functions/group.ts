export type GroupResolver<Item> = (item: Item) => any

/**
 * Groups the items by the result of the resolver.
 * The resolver is called for each item and the result is used as the key.
 * The items are grouped by the key.
 * The order of the items is preserved.
 * The items are compared using strict equality.
 *
 * @param items The array to group.
 * @param resolver The resolver to group by.
 * @returns A map with the grouped items.
 *
 * @example
 * const arr = [
 * 	{ a: 1, b: 2 },
 * 	{ a: 1, b: 2 },
 * 	{ a: 2, b: 1 },
 * 	{ a: 2, b: 1 },
 * ]
 *
 * const grouped = group(arr, item => item.a)
 *
 * console.log(grouped) // Map {
 * 	1 => [{ a: 1, b: 2 }, { a: 1, b: 2 }],
 * 	2 => [{ a: 2, b: 1 }, { a: 2, b: 1 }],
 * }
 */
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

/**
 * Groups the items by the key.
 * The key is used as the key.
 * The items are grouped by the key.
 * The order of the items is preserved.
 * The items are compared using strict equality.
 *
 * @param items The array to group.
 * @param key The key to group by.
 * @returns A map with the grouped items.
 *
 * @example
 * const arr = [
 * 	{ a: 1, b: 2 },
 * 	{ a: 1, b: 2 },
 * 	{ a: 2, b: 1 },
 * 	{ a: 2, b: 1 },
 * ]
 *
 * const grouped = groupByKey(arr, 'a')
 *
 * console.log(grouped) // Map {
 * 	1 => [{ a: 1, b: 2 }, { a: 1, b: 2 }],
 * 	2 => [{ a: 2, b: 1 }, { a: 2, b: 1 }],
 * }
 */
export function groupByKey<Item extends object, Key extends keyof Item>(
	items: Item[],
	key: Key,
): Map<Item[Key], Item[]> {
	return group(items, item => item[key])
}

/**
 * Groups the items by the keys.
 *
 * @param items The array to group.
 * @param keys The keys to group by.
 * @param separator The separator to use when joining the keys.
 * @returns A map with the grouped items.
 *
 * @example
 * const arr = [
 * 	{ a: 1, b: 2 },
 * 	{ a: 1, b: 2 },
 * 	{ a: 2, b: 1 },
 * 	{ a: 2, b: 1 },
 * ]
 *
 * const grouped = groupByKeys(arr, ['a', 'b'])
 *
 * console.log(grouped) // Map {
 * 	'1|2' => [{ a: 1, b: 2 }, { a: 1, b: 2 }],
 * 	'2|1' => [{ a: 2, b: 1 }, { a: 2, b: 1 }],
 * }
 */
export function groupByKeys<Item extends object, Key extends keyof Item>(
	items: Item[],
	keys: Key[],
	separator = '|',
): Map<string, Item[]> {
	return group(items, item => keys.map(key => item[key]).join(separator))
}
