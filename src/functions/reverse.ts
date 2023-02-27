import { isString } from './isString'

/**
 * Reverses the order of the elements in a array or string. If the input is a array, it will reversed without mutation to the originial array.
 *
 * @param thing The array or string to reverse.
 * @returns The reversed array or string.
 */
export function reverse<Thing extends any[] | string>(thing: Thing): Thing {
	if (isString(thing)) return thing.split('').reverse().join('') as Thing
	return Array.from(thing).reverse() as Thing
}
