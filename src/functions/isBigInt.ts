import { Is, Not, not } from './is'

export function isBigInt<T>(thing: T): thing is Is<T, bigint> {
	return typeof thing === 'bigint'
}

export function notBigInt<T>(thing: T): thing is Not<T, bigint> {
	return not(isBigInt(thing))
}
