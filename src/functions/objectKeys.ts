export function objectKeys<Thing extends object>(
	thing: Thing,
): Array<keyof Thing> {
	return Object.keys(thing) as Array<keyof Thing>
}
