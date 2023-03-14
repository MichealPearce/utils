import { is, Is, Not, not } from './is'

export type FalsyValue = null | undefined | false | 0 | '' | void | -0 | 0n

export function isFalsy<T>(thing: T): thing is Is<T, FalsyValue> {
	return not(thing)
}

export function notFalsy<T>(thing: T): thing is Not<T, FalsyValue> {
	return is(thing)
}
