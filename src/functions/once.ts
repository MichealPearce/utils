import { FunctionType } from '@michealpearce/utils'

export function once<Func extends FunctionType>(func: Func): Func {
	let called = false
	let result: any

	return function (...args: Parameters<Func>): ReturnType<Func> {
		if (called) return result
		called = true
		result = func(...args)
		return result
	} as Func
}
