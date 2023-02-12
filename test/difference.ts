import { difference } from '@michealpearce/utils'
import assert from 'assert'

export function testDifference() {
	const a = [1, 2, 3, 4, 5]
	const b = [2, 4, 6, 8, 10]
	const c = [3, 6, 9, 12, 15]

	const diff = difference(a, b, c) // [1, 5]

	assert(diff.length === 2)
	assert(diff.includes(1))
	assert(diff.includes(5))

	const diff2 = difference(a, b) // [1, 3, 5]

	assert(diff2.length === 3)
	assert(diff2.includes(1))
	assert(diff2.includes(3))
	assert(diff2.includes(5))

	const diff3 = difference(a, c, a) // []

	assert(diff3.length === 0)
}
