/**
 * chunks an iterable into arrays of a given size
 *
 * @param collection
 * @param size
 * @returns chunks of the collection
 *
 * @example
 * const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * const chunks = chunk(collection, 3)
 * // chunks = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 */
export function chunk<T>(collection: Iterable<T>, size: number = 2): T[][] {
	const chunks: T[][] = []
	let chunk: T[] = []

	for (const item of collection) {
		chunk.push(item)
		if (chunk.length === size) {
			chunks.push(chunk)
			chunk = []
		}
	}

	if (chunk.length) chunks.push(chunk)

	return chunks
}
