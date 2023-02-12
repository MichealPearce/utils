export function assign<Target extends object, Source extends object>(
	target: Target,
	source: Source,
): Target & Source {
	return Object.assign(target, source)
}
