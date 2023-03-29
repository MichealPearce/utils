import { expect, it } from 'vitest'
import { inRecord } from './inRecord'

it('checks if props are in record', () => {
	const record = {
		foo: 'bar',
		bar: 'foo',
	}

	expect(inRecord(record, ['foo', 'bar'])).toBe(true)
	expect(inRecord(record, ['foo', 'bar', 'baz'])).toBe(false)
})
