export function uniq<T>(items: T[]): T[] {
	const seen = new Set<T>()

	for (const item of items)
		if (seen.has(item)) continue
		else seen.add(item)

	return Array.from(seen)
}

export function uniqBy<T extends object, K extends keyof T>(
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
