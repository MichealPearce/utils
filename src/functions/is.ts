export type Is<Thing, Match> = Thing extends Match ? Thing : never
export type Not<Thing, Match> = Thing extends Match ? never : Thing

export function is<Thing, Match>(
	condition: any,
): condition is Is<Thing, Match> {
	return !!condition
}

export function not<Thing, Match>(
	condition: any,
): condition is Not<Thing, Match> {
	return !condition
}
