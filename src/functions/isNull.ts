import { Is, Not, not } from './is'

export function isNull<T>(thing: T): thing is Is<T, null> {
	return thing === null
}

export function notNull<T>(thing: T): thing is Not<T, null> {
	return not(isNull(thing))
}
