export type ClassType<
	Instance extends object = object,
	Params extends any[] = any[],
	Static extends object = object,
> = (new (...args: Params) => Instance) & {
	[Prop in keyof Static]: Static[Prop]
}
