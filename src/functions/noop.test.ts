import { expect, it } from 'vitest'
import { noop } from './noop'

it('preforms no operation, noop', () => {
	expect(noop()).toBe(undefined)
})
