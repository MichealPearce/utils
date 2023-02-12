import { Is, Not } from './is'

export function isDefined<T>(thing: T): thing is Not<T, undefined> {
	return typeof thing !== 'undefined'
}

export function notDefined<T>(thing: T): thing is Is<T, undefined> {
	return typeof thing === 'undefined'
}
