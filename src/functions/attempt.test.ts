import { expect, it } from 'vitest'
import { attempt } from './attempt'

it('attempts to call the given function and returns the result or a Error', () => {
	const runs = attempt(() => 1 + 1)
	const throws = attempt(() => JSON.parse('invalid'))

	expect(runs).toEqual(2)
	expect(throws).toBeInstanceOf(Error)
})
