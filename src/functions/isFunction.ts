import { FunctionType } from '../types'
import { Is, Not, not } from './is'

/**
 * Checks if thing is a function.
 *
 * @param thing - The thing to check.
 * @returns thing is FunctionType
 *
 * @example
 * const thing = 'hello' as string | FunctionType | (...args: any[]) => any
 *
 * if (isFunction(thing)) {
 * 	// thing is type FunctionType | (...args: any[]) => any
 * } else {
 * 	// thing is type string
 * }
 */
export function isFunction<T>(thing: T): thing is Is<T, FunctionType> {
	return typeof thing === 'function'
}

/**
 * Checks if thing is not a function.
 *
 * @param thing - The thing to check.
 * @returns thing is Not<T, FunctionType>
 *
 * @example
 * const thing = 'hello' as string | FunctionType | (...args: any[]) => any
 *
 * if (notFunction(thing)) {
 * 	// thing is type string
 * } else {
 * 	// thing is type FunctionType | (...args: any[]) => any
 * }
 */
export function notFunction<T>(thing: T): thing is Not<T, FunctionType> {
	return not(isFunction(thing))
}
