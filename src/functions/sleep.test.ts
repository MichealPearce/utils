import { expect, it } from 'vitest'
import { sleep } from './sleep'

it('sleeps', async () => {
	const start = Date.now()
	await sleep(1000)
	const end = Date.now()
	expect(end - start).toBeGreaterThanOrEqual(1000)
})
