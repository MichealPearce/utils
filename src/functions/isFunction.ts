import { FunctionType } from '../types'
import { Is, Not, not } from './is'

export function isFunction<T extends FunctionType>(
	thing: unknown,
): thing is Is<T, FunctionType> {
	return typeof thing === 'function'
}

export function notFunction<T>(thing: T): thing is Not<T, FunctionType> {
	return not(isFunction(thing))
}
