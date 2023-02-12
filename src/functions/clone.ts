import { fromEntries, toEntries } from './entries'
import { isArray, isObject } from './is'

/**
 * Returns a shallow copy of the target.
 *
 * @param target The target to clone.
 * @returns A shallow copy of the target.
 *
 * @example
 * const obj = { a: 1, b: 2, c: { a: 1 } }
 * const newObj = clone(obj)
 *
 * console.log(newObj) // { a: 1, b: 2, c: 3 }
 *
 * console.log(newObj === obj) // false
 * console.log(newObj.c === obj.c) // true
 */
export function clone<A extends Record<any, any>>(target: A): A {
	return fromEntries(toEntries(target))
}

/**
 * Returns a deep copy of the target.
 *
 * @param target The target to clone.
 * @returns A deep copy of the target.
 *
 * @example
 * const obj = { a: 1, b: 2, c: { a: 1 } }
 * const newObj = cloneDeep(obj)
 *
 * console.log(newObj) // { a: 1, b: 2, c: { a: 1 } }
 *
 * console.log(newObj === obj) // false
 * console.log(newObj.c === obj.c) // false
 */
export function cloneDeep<A>(target: A): A {
	if (isArray(target)) return target.map(cloneDeep) as A
	else if (isObject(target))
		return fromEntries(
			toEntries(target).map(([key, value]) => [key, cloneDeep(value)]),
		) as A
	else return target
}
