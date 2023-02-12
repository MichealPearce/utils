import { Is, Not, not } from './is'

export function isSymbol<T>(thing: T): thing is Is<T, symbol> {
	return typeof thing === 'symbol'
}

export function notSymbol<T>(thing: T): thing is Not<T, symbol> {
	return not(isSymbol(thing))
}
