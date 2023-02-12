import { isArray } from './isArray'
import { isMap } from './isMap'
import { isObject } from './isObject'
import { isSet } from './isSet'
import { isString } from './isString'

/**
 * Returns the size of the item.
 * If the item is an array or string, the length is returned.
 * If the item is a map or set, the size is returned.
 * If the item is an object, the number of keys is returned.
 * Otherwise 0 is returned.
 *
 * @param item The item to get the size of.
 * @returns The size of the item.
 *
 * @example
 *
 * const arr = [1, 2, 3]
 * const str = 'abc'
 * const obj = { a: 1, b: 2, c: 3 }
 * const map = new Map([['a', 1], ['b', 2], ['c', 3]])
 * const set = new Set([1, 2, 3])
 *
 * console.log(size(arr)) // 3
 * console.log(size(str)) // 3
 * console.log(size(obj)) // 3
 * console.log(size(map)) // 3
 * console.log(size(set)) // 3
 */
export function size(
	item: any[] | string | object | Map<any, any> | Set<any>,
): number {
	if (isArray(item) || isString(item)) return item.length
	else if (isMap(item) || isSet(item)) return item.size
	else if (isObject(item)) return Object.keys(item).length
	else return 0
}
