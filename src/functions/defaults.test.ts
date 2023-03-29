import { expect, it } from 'vitest'
import { defaults, defaultsDeep } from './defaults'

it('should assign defaults to an object', () => {
	const main = {
		a: 1,
		b: 2,
		c: 3,
	}

	const defaultsProps = {
		a: 4,
		b: 5,
		c: 6,
		d: 7,
	}

	const result = defaults(main, defaultsProps)

	expect(result).toEqual({
		a: 1,
		b: 2,
		c: 3,
		d: 7,
	})
})

it('should deep assign defaults to an object', () => {
	const main = {
		a: 1,
		b: 2,
		c: 3,
		d: {
			e: 4,
			f: 5,
			deeper: {
				value: 6,
				veryDeep: {
					value: 10,
				},
			},
		},
		array: [1, 2, [3]],
	}

	const defaultsProps = {
		a: 4,
		b: 5,
		c: 6,
		d: {
			e: 7,
			f: 8,
			g: 9,
			deeper: {
				value: 11,
				veryDeep: {
					value: 12,
					otherValue: 13,
				},
			},
		},
		array: [1, 2, [3, 4]],
	}

	const result = defaultsDeep(main, defaultsProps)

	expect(result).toEqual({
		a: 1,
		b: 2,
		c: 3,
		d: {
			e: 4,
			f: 5,
			g: 9,
			deeper: {
				value: 6,
				veryDeep: {
					value: 10,
					otherValue: 13,
				},
			},
		},
		array: [1, 2, [3, 4]],
	})
})
