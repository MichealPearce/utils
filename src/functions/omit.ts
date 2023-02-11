export function omit<Obj extends object, Key extends keyof Obj>(
	obj: Obj,
	keys: Key[],
): Omit<Obj, Key> {
	return Object.keys(obj)
		.filter(key => !keys.includes(key as Key))
		.reduce((acc, key) => {
			acc[key] = obj[key]
			return acc
		}, {} as Omit<Obj, Key>)
}
