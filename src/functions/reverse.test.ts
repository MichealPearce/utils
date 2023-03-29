import { expect, it } from 'vitest'
import { reverse } from './reverse'

it('reverses a array or string', () => {
	const arr = [1, 2, 3]
	const str = 'abc'

	const reversedArr = reverse(arr)
	const reversedStr = reverse(str)

	expect(reversedArr).toEqual([3, 2, 1])
	expect(reversedStr).toBe('cba')

	expect(reversedArr).not.toStrictEqual(arr)
})
