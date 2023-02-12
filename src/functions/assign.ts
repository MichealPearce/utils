/**
 * Assigns the properties of the source object to the target object.
 * The source object is not mutated.
 * The target object is mutated.
 *
 * @param target The target object.
 * @param source The source object.
 * @returns The target object.
 *
 * @example
 * const obj = { a: 1, b: 2 }
 * const newObj = assign(obj, { b: 3, c: 4 })
 *
 * console.log(newObj) // { a: 1, b: 3, c: 4 }
 * console.log(obj) // { a: 1, b: 3, c: 4 }
 * console.log(newObj === obj) // true
 */
export function assign<Target extends object, Source extends object>(
	target: Target,
	source: Source,
): Target & Source {
	return Object.assign(target, source)
}
