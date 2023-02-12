import { ConstructError, FunctionType } from '@michealpearce/utils'

export function attempt<Func extends FunctionType>(
	func: Func,
): ReturnType<Func> | ConstructError {
	try {
		return func()
	} catch (error) {
		return new ConstructError('attempt failed', error)
	}
}
