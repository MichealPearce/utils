import { expect, it } from 'vitest'
import { once } from './once'

it('creates a function that can only be called once', () => {
	const onced = once((input: number) => input + 1)

	expect(onced(1)).toBe(2)
	expect(onced(2)).toBe(2)
	expect(onced(3)).toBe(2)
})
