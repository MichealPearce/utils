export function extract<Obj extends object, Key extends keyof Obj>(
	obj: Obj,
	keys: Key[],
): {
	[key in Key]: Obj[key]
} {
	return keys.reduce((acc, key) => {
		acc[key] = obj[key]
		return acc
	}, {} as Pick<Obj, Key>)
}
