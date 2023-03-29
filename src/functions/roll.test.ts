import { expect, it } from 'vitest'
import { roll, RollableFunction } from './roll'

it('rolls a array of functions into one function and calls it', async () => {
	let total = 0
	const funcs: RollableFunction[] = [
		() => {
			total++
		},
		async () => {
			total++
		},
		() => {
			total++
		},
	]

	const rolled = await roll(funcs)

	expect(total).toBe(3)
	expect(rolled).toBe(undefined)
})
