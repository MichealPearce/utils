import {
	inObject,
	is,
	isArray,
	isAsyncIterable,
	isBigInt,
	isBoolean,
	isDate,
	isDefined,
	isFunction,
	isIterable,
	isMap,
	isNull,
	isNumber,
	isObject,
	isPrimitive,
	isPromise,
	isRegExp,
	isSet,
	isString,
	isSymbol,
	not,
	notArray,
	notAsyncIterable,
	notBigInt,
	notBoolean,
	notDate,
	notDefined,
	notFunction,
	notIterable,
	notMap,
	notNull,
	notNumber,
	notObject,
	notPrimitive,
	notPromise,
	notRegExp,
	notSet,
	notString,
	notSymbol,
} from '@michealpearce/utils'
import assert from 'assert'

export function testIs() {
	console.group('testing issers')

	assert(is(true) === true, 'true is false')
	assert(is(false) === false, 'false is true')
	assert(is(0) === false, '0 is true')
	assert(is(1) === true, '1 is false')
	assert(is('') === false, '"" is true')

	assert(not(true) === false, 'true is not false')
	assert(not(false) === true, 'false is not true')
	assert(not(0) === true, '0 is not true')
	assert(not(1) === false, '1 is not false')
	assert(not('') === true, '"" is not true')

	assert(isDefined(0) === true, '0 is defined')
	assert(isDefined(null) === true, 'null is not defined')
	assert(isDefined(undefined) === false, 'undefined is not defined')

	assert(notDefined(0) === false, '0 is not notDefined')
	assert(notDefined(null) === false, 'null is notDefined')
	assert(notDefined(undefined) === true, 'undefined is notDefined')

	assert(isNull(null) === true, 'null is not null')
	assert(isNull(undefined) === false, 'undefined is null')
	assert(isNull(0) === false, '0 is null')

	assert(notNull(null) === false, 'null is not notNull')
	assert(notNull(undefined) === true, 'undefined is notNull')
	assert(notNull(0) === true, '0 is notNull')

	assert(isObject({}) === true, '{} is not an object')
	assert(isObject([]) === false, '[] is an object')
	assert(isObject(null) === false, 'null is an object')

	assert(notObject({}) === false, '{} is an object')
	assert(notObject([]) === true, '[] is not an object')
	assert(notObject(null) === true, 'null is not an object')

	assert(inObject({ a: 1 }, ['a']) === true, '{ a: 1 } does not have a')
	assert(inObject({ a: 1 }, ['b']) === false, '{ a: 1 } has b')

	assert(isFunction(() => {}) === true, '() => {} is not a function')
	assert(isFunction(null) === false, 'null is a function')

	assert(notFunction(() => {}) === false, '() => {} is a function')
	assert(notFunction(null) === true, 'null is not a function')

	assert(isString('') === true, '"" is not a string')
	assert(isString(null) === false, 'null is a string')

	assert(notString('') === false, '"" is a string')
	assert(notString(null) === true, 'null is not a string')

	assert(isNumber(0) === true, '0 is not a number')
	assert(isNumber(null) === false, 'null is a number')

	assert(notNumber(0) === false, '0 is a number')
	assert(notNumber(null) === true, 'null is not a number')

	assert(isBoolean(true) === true, 'true is not a boolean')
	assert(isBoolean(null) === false, 'null is a boolean')

	assert(notBoolean(true) === false, 'true is a boolean')
	assert(notBoolean(null) === true, 'null is not a boolean')

	assert(isArray([]) === true, '[] is not an array')
	assert(isArray(null) === false, 'null is an array')

	assert(notArray([]) === false, '[] is an array')
	assert(notArray(null) === true, 'null is not an array')

	assert(
		isPromise(Promise.resolve()) === true,
		'Promise.resolve() is not a promise',
	)
	assert(isPromise(null) === false, 'null is a promise')

	assert(
		notPromise(Promise.resolve()) === false,
		'Promise.resolve() is a promise',
	)
	assert(notPromise(null) === true, 'null is not a promise')

	// isSet
	assert(isSet(new Set()) === true, 'new Set() is not a set')
	assert(isSet(null) === false, 'null is a set')

	assert(notSet(new Set()) === false, 'new Set() is a set')
	assert(notSet(null) === true, 'null is not a set')

	// isMap
	assert(isMap(new Map()) === true, 'new Map() is not a map')
	assert(isMap(null) === false, 'null is a map')

	assert(notMap(new Map()) === false, 'new Map() is a map')
	assert(notMap(null) === true, 'null is not a map')

	// isWeakSet
	// assert(isWeakSet(new WeakSet()) === true, 'new WeakSet() is not a weakSet')
	// assert(isWeakSet(null) === false, 'null is a weakSet')

	// assert(notWeakSet(new WeakSet()) === false, 'new WeakSet() is a weakSet')
	// assert(notWeakSet(null) === true, 'null is not a weakSet')

	// isWeakMap
	// assert(isWeakMap(new WeakMap()) === true, 'new WeakMap() is not a weakMap')
	// assert(isWeakMap(null) === false, 'null is a weakMap')

	// assert(notWeakMap(new WeakMap()) === false, 'new WeakMap() is a weakMap')
	// assert(notWeakMap(null) === true, 'null is not a weakMap')

	// isDate
	assert(isDate(new Date()) === true, 'new Date() is not a date')
	assert(isDate(null) === false, 'null is a date')

	assert(notDate(new Date()) === false, 'new Date() is a date')
	assert(notDate(null) === true, 'null is not a date')

	// isRegExp
	assert(isRegExp(/a/) === true, '/a/ is not a regExp')
	assert(isRegExp(new RegExp('/a/')) === true, 'new RegExp is not regExp')
	assert(isRegExp(null) === false, 'null is a regExp')

	assert(notRegExp(/a/) === false, '/a/ is a regExp')
	assert(notRegExp(new RegExp('/a/')) === false, 'new RegExp is not a regExp')
	assert(notRegExp(null) === true, 'null is not a regExp')

	// isSymbol
	assert(isSymbol(Symbol('a')) === true, 'Symbol("a") is not a symbol')
	assert(isSymbol(null) === false, 'null is a symbol')

	assert(notSymbol(Symbol('a')) === false, 'Symbol("a") is a symbol')
	assert(notSymbol(null) === true, 'null is not a symbol')

	// isBigInt
	assert(isBigInt(BigInt(1)) === true, 'BigInt(1) is not a bigInt')
	assert(isBigInt(null) === false, 'null is a bigInt')

	assert(notBigInt(BigInt(1)) === false, 'BigInt(1) is a bigInt')
	assert(notBigInt(null) === true, 'null is not a bigInt')

	// isPrimitive
	assert(isPrimitive('') === true, '"" is not a primitive')
	assert(isPrimitive(true) === true, 'true is not a primitive')
	assert(isPrimitive(false) === true, 'false is not a primitive')
	assert(isPrimitive(Symbol('a')) === true, 'Symbol("a") is not a primitive')
	assert(isPrimitive(BigInt(1)) === true, 'BigInt(1) is not a primitive')
	assert(isPrimitive(undefined) === true, 'undefined is not a primitive')
	assert(isPrimitive(0) === true, '0 is not a primitive')
	assert(isPrimitive(null) === true, 'null is not a primitive')
	assert(isPrimitive({}) === false, '{} is a primitive')

	assert(notPrimitive(0) === false, '0 is a primitive')
	assert(notPrimitive(null) === false, 'null is a primitive')
	assert(notPrimitive({}) === true, '{} is not a primitive')

	// isIterable
	assert(isIterable([]) === false, '[] is iterable')
	assert(isIterable(new Set()) === true, 'new Set() is not iterable')
	assert(isIterable(new Map()) === true, 'new Map() is not iterable')
	assert(isIterable(null) === false, 'null is iterable')

	assert(notIterable([]) === true, '[] is iterable')
	assert(notIterable(new Set()) === false, 'new Set() is iterable')
	assert(notIterable(new Map()) === false, 'new Map() is iterable')
	assert(notIterable(null) === true, 'null is not iterable')

	// isAsyncIterable
	async function* asyncIterable() {}
	assert(
		isAsyncIterable(asyncIterable()) === true,
		'result of asyncIterable() is not asyncIterable',
	)
	assert(isAsyncIterable(null) === false, 'null is asyncIterable')

	assert(
		notAsyncIterable(asyncIterable()) === false,
		'result of asyncIterable() is asyncIterable',
	)
	assert(notAsyncIterable(null) === true, 'null is not asyncIterable')

	console.groupEnd()
}
