import { expect, it } from 'vitest'
import { chunk } from './chunk'

it('chunks a iterable into arrays of a given size', () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const arrChunks = chunk(arr, 3)

	expect(arrChunks).toEqual([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])

	const str = '123456789'
	const strChunks = chunk(str, 3)

	expect(strChunks).toEqual([
		['1', '2', '3'],
		['4', '5', '6'],
		['7', '8', '9'],
	])

	const map = new Map([
		[1, 'a'],
		[2, 'b'],
		[3, 'c'],
		[4, 'd'],
		[5, 'e'],
		[6, 'f'],
		[7, 'g'],
		[8, 'h'],
		[9, 'i'],
	])

	const mapChunks = chunk(map, 3)

	expect(mapChunks).toEqual([
		[
			[1, 'a'],
			[2, 'b'],
			[3, 'c'],
		],
		[
			[4, 'd'],
			[5, 'e'],
			[6, 'f'],
		],
		[
			[7, 'g'],
			[8, 'h'],
			[9, 'i'],
		],
	])

	const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
	const setChunks = chunk(set, 3)

	expect(setChunks).toEqual([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])

	const shortArr = [1, 2, 3, 4, 5]
	expect(chunk(shortArr, 4)).toEqual([[1, 2, 3, 4], [5]])
	expect(chunk([1, 2], 1)).toEqual([[1], [2]])
})
