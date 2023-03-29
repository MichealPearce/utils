export function pascalCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1_$2')
		.replace(/[\s-]+/g, '_')
		.replace(/(^|_)(\w)/g, (_match, _p1, p2) => p2.toUpperCase())
}
