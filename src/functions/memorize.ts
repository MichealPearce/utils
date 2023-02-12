import { FunctionType } from '../types'
import { assign } from './assign'

export interface MemorizedFunction<Func extends FunctionType> {
	(...args: Parameters<Func>): ReturnType<Func>
	cache: MemorizeCache<Func>
}

export class MemorizeCache<Func extends FunctionType> extends Map<
	string,
	ReturnType<Func>
> {
	resolve(args: Parameters<Func>): string {
		return JSON.stringify(args) as any
	}
}

/**
 * Returns a function that caches the result based on the arguments.
 * The result is returned from the cache if the arguments are the same.
 *
 * @param func The function to cache.
 * @param resolve A function that resolves the arguments to a key.
 * @returns A function that caches the result based on the arguments.
 *
 * @example
 * const func = memorize((a: number, b: number) => {
 * 	console.log('called') // only called once
 * 	return a + b
 * })
 *
 * const a = func(1, 2)
 * const b = func(1, 2)
 *
 * console.log(a === b) // true
 */
export function memorize<Func extends FunctionType>(
	func: Func,
	cache: MemorizeCache<Func> = new MemorizeCache(),
): MemorizedFunction<Func> {
	function handler(...args: Parameters<Func>): ReturnType<Func> {
		const key = cache.resolve(args)
		if (cache.has(key)) return cache.get(key)!

		const result = func(...args)
		cache.set(key, result)

		return result
	}

	return assign(handler, { cache })
}
