import { Is, not, Not } from './is'
import { notArray } from './isArray'
import { notNull } from './isNull'

/**
 * Check if a value is a record.
 *
 * @param thing The value to check.
 * @returns A type guard for the value.
 *
 * @example
 * isRecord({}) // true
 * isRecord([]) // false
 * isRecord(null) // false
 * isRecord(undefined) // false
 * isRecord(0) // false
 * isRecord('') // false
 *
 */
export function isRecord<T>(thing: T): thing is Is<T, Record<any, any>> {
	return typeof thing === 'object' && notNull(thing) && notArray(thing)
}

export function notRecord<T>(thing: T): thing is Not<T, Record<any, any>> {
	return not(isRecord(thing))
}
