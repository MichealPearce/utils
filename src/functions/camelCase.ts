export function camelCase(str: string): string {
	const words = str.split(/[-_\s.]/g)
	return words.reduce((acc, word, i) => {
		if (i === 0) return word.toLowerCase()
		return acc + word[0].toUpperCase() + word.slice(1).toLowerCase()
	})
}
