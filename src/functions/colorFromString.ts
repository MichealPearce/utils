export function colorFromString(str: string) {
	let hash = 0

	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash)
	}

	let color = '#'

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff

		let g = '00' + value.toString(16)
		color += g.substring(g.length - 2)
	}

	return color
}
