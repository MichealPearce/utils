import { FunctionType } from '@michealpearce/utils'

/**
 * Returns a function that can only be called once.
 * The result of the first call is returned for all subsequent calls.
 *
 * @param func The function to call once.
 * @returns A function that can only be called once.
 *
 * @example
 * const func = once(() => Math.random())
 *
 * const a = func()
 * const b = func()
 *
 * console.log(a === b) // true
 *
 * const func2 = once((a: number, b: number) => a + b)
 *
 * const c = func2(1, 2)
 * const d = func2(3, 4)
 *
 * console.log(c === d) // true
 * console.log(c) // 3
 * console.log(d) // 3
 */
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
