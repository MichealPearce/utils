export function difference<T>(target: T[], ...sources: T[][]): T[] {
	const diff: T[] = []

	for (const item of target) {
		const seen = sources.some(source => source.includes(item))
		if (!seen) diff.push(item)
	}

	return diff
}
