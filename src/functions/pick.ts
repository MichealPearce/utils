export function pick<Obj extends object, Key extends keyof Obj>(
	obj: Obj,
	keys: Key[],
): Pick<Obj, Key> {
	return keys.reduce((acc, key) => {
		acc[key] = obj[key]
		return acc
	}, {} as Pick<Obj, Key>)
}
