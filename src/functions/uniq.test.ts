import { expect, it } from 'vitest'
import { uniq, uniqByKeys } from './uniq'

it('creates a duplicate-free version of an array', () => {
	const arr = [1, 2, 3, 3, 4, 5, 5, 5, 6]

	const uniqArr = uniq(arr)

	expect(uniqArr).toEqual([1, 2, 3, 4, 5, 6])
})

it('creates a duplicate-free version of an array, based on a provided keys', () => {
	const arr = [
		{ id: 1, name: 'a' },
		{ id: 2, name: 'b' },
		{ id: 3, name: 'c' },
		{ id: 3, name: 'd' },
		{ id: 4, name: 'e' },
		{ id: 5, name: 'f' },
		{ id: 5, name: 'g' },
		{ id: 5, name: 'h' },
		{ id: 6, name: 'i' },
	]

	const uniqArr = uniqByKeys(arr, ['id'])

	expect(uniqArr).toEqual([
		{ id: 1, name: 'a' },
		{ id: 2, name: 'b' },
		{ id: 3, name: 'c' },
		{ id: 4, name: 'e' },
		{ id: 5, name: 'f' },
		{ id: 6, name: 'i' },
	])
})
