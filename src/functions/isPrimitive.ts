import { Is, Not, not } from './is'
import { isBigInt } from './isBigInt'
import { isBoolean } from './isBoolean'
import { notDefined } from './isDefined'
import { isNull } from './isNull'
import { isNumber } from './isNumber'
import { isString } from './isString'
import { isSymbol } from './isSymbol'

export type PrimitiveValue =
	| string
	| number
	| boolean
	| symbol
	| bigint
	| undefined
	| null

export function isPrimitive<T>(thing: T): thing is Is<T, PrimitiveValue> {
	return (
		isString(thing) ||
		isNumber(thing) ||
		isBoolean(thing) ||
		isSymbol(thing) ||
		isBigInt(thing) ||
		isNull(thing) ||
		notDefined(thing)
	)
}

export function notPrimitive<T>(thing: T): thing is Not<T, PrimitiveValue> {
	return not(isPrimitive(thing))
}
