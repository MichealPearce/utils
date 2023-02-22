export type ObjectMethodNames<Obj extends object> = {
	[Key in keyof Obj]: Obj[Key] extends Function ? Key : never
}[keyof Obj]

export type ObjectMethods<Obj extends object> = {
	[Key in ObjectMethodNames<Obj>]: Obj[Key]
}
