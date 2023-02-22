import { FunctionType } from '../types'
import { ObjectMethodNames } from '../types/ObjectMethods'

/**
 * Returns a function that is bound to the specified object.
 *
 * @param func The function to bind.
 * @param obj The object to bind the function to.
 *
 * @example
 * const obj = {
 * 	a: 1,
 * 	b: 2,
 * 	c: 3,
 * 	add: function (this: { a: number, b: number }) {
 * 		return this.a + this.b
 * 	}
 * }
 *
 * const add = bind(obj.add, obj)
 *
 * console.log(add()) // 3
 */
export function bind<
	Obj extends object,
	Func extends FunctionType<any, any, Obj>,
>(func: Func, obj: Obj): Func {
	return func.bind(obj) as Func
}

/**
 * Binds all methods of an object to the object.
 *
 * @param obj The object to bind methods to.
 * @param methods The methods to bind.
 *
 * @example
 * const obj = {
 * 	a: 1,
 * 	b: 2,
 * 	c: 3,
 * 	add: function (this: { a: number, b: number }) {
 * 		return this.a + this.b
 * 	}
 * }
 *
 * bindAll(obj, ['add'])
 *
 * const add = obj.add
 * console.log(add()) // 3
 */
export function bindAll<
	Obj extends object,
	Methods extends ObjectMethodNames<Obj>,
>(obj: Obj, methods: Methods[]): void {
	// @ts-expect-error not fixing index signature
	for (const method of methods) obj[method] = bind(obj[method], obj)
}
