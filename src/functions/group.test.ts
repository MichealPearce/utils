import { expect, it } from 'vitest'
import { group, groupByKey, groupByKeys } from './group'

it('groups an array by the result of a function', () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	const result = group(arr, n => (n % 2 === 0 ? 'even' : 'odd'))

	expect(result.get('even')).toEqual([2, 4, 6, 8, 10])
	expect(result.get('odd')).toEqual([1, 3, 5, 7, 9])
})

it('groups an array by the key', () => {
	const arr = [
		{ a: 1, b: 2 },
		{ a: 1, b: 2 },
		{ a: 2, b: 1 },
		{ a: 2, b: 1 },
	]

	const result = groupByKey(arr, 'a')

	expect(result.get(1)).toEqual([
		{ a: 1, b: 2 },
		{ a: 1, b: 2 },
	])
	expect(result.get(2)).toEqual([
		{ a: 2, b: 1 },
		{ a: 2, b: 1 },
	])
})

it('groups an array by the given keys', () => {
	const arr = [
		{ a: 1, b: 2, c: 3 },
		{ a: 1, b: 2, c: 3 },
		{ a: 2, b: 1, c: 3 },
		{ a: 2, b: 1, c: 3 },
	]

	const result = groupByKeys(arr, ['a', 'b'])

	expect(result.get('1|2')).toEqual([
		{ a: 1, b: 2, c: 3 },
		{ a: 1, b: 2, c: 3 },
	])

	expect(result.get('2|1')).toEqual([
		{ a: 2, b: 1, c: 3 },
		{ a: 2, b: 1, c: 3 },
	])

	expect(result.get('1|1')).toBeUndefined()
})
