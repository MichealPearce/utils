import { Is, Not, not } from './is'

export function isBoolean<T>(thing: T): thing is Is<T, boolean> {
	return typeof thing === 'boolean'
}

export function notBoolean<T>(thing: T): thing is Not<T, boolean> {
	return not(isBoolean(thing))
}
