import { assign, FunctionType } from '@michealpearce/utils'

export type MemorizeResolver = (args: any[]) => any

export interface MemorizedFunction<Func extends FunctionType> {
	(...args: Parameters<Func>): ReturnType<Func>
	cache: Map<Parameters<Func>, ReturnType<Func>>
}

const defaultResolver = (args: any[]) => JSON.stringify(args)

export function memorize<Func extends FunctionType>(
	func: Func,
	resolve: MemorizeResolver = defaultResolver,
): MemorizedFunction<Func> {
	const cache = new Map<Parameters<Func>, ReturnType<Func>>()

	function handler(...args: Parameters<Func>): ReturnType<Func> {
		const key = resolve(args)
		if (cache.has(key)) return cache.get(key)!

		const result = func(...args)
		cache.set(key, result)

		return result
	}

	return assign(handler, { cache })
}
