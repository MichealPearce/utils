export type FunctionType<
	Result = any,
	Params extends any[] = any[],
	This = any,
> = (this: This, ...args: Params) => Result
