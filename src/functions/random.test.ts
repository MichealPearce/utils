import { expect, it } from 'vitest'
import { randomNumber } from './random'

it('returns a random number between the given input', () => {
	const value = randomNumber(1, 10)

	expect(value).toBeGreaterThanOrEqual(1)
	expect(value).toBeLessThanOrEqual(10)
})
