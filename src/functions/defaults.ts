export function defaults<T extends object, U extends object>(
	obj: T,
	defaults: U,
): T & U {
	return Object.keys(defaults).reduce((acc, key) => {
		if (obj[key] === undefined) {
			acc[key] = defaults[key]
		}
		return acc
	}, obj as T & U)
}

export function defaultsDeep<T extends object, U extends object>(
	obj: T,
	defaults: U,
): T & U {
	return Object.keys(defaults).reduce((acc, key) => {
		if (obj[key] === undefined) {
			acc[key] = defaults[key]
		} else if (
			typeof obj[key] === 'object' &&
			typeof defaults[key] === 'object'
		) {
			acc[key] = defaultsDeep(obj[key], defaults[key])
		}
		return acc
	}, obj as T & U)
}
