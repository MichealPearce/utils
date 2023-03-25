export function objectValues<Thing extends object>(
	thing: Thing,
): Array<Thing[keyof Thing]> {
	return Object.values(thing) as Array<Thing[keyof Thing]>
}
