export type FunctionType<
	Result = any,
	Params extends any[] = any[],
	This = unknown,
> = (this: This, ...args: Params) => Result
