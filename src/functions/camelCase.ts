export function camelCase(str: string): string {
	const words = str.split(/[-_\s.]/g)
	return words
		.map((word, i) => {
			if (i === 0) return word.toLowerCase()
			return word[0].toUpperCase() + word.slice(1).toLowerCase()
		})
		.join('')
}
