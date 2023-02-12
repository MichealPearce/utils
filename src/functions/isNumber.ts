import { Is, Not, not } from './is'

export function isNumber<T>(thing: T): thing is Is<T, number> {
	return typeof thing === 'number'
}

export function notNumber<T>(thing: T): thing is Not<T, number> {
	return not(isNumber(thing))
}
