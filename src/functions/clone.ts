import { fromEntries, toEntries } from './entries'
import { isArray, isObject } from './is'

export function clone<A extends Record<any, any>>(target: A): A {
	return fromEntries(toEntries(target))
}

export function cloneDeep<A>(target: A): A {
	if (isArray(target)) return target.map(cloneDeep) as A
	else if (isObject(target))
		return fromEntries(
			toEntries(target).map(([key, value]) => [key, cloneDeep(value)]),
		) as A
	else return target
}
