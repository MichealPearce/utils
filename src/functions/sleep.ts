/**
 * Sleep for a given amount of time.
 *
 * @param ms The amount of time to sleep in milliseconds.
 * @returns A promise that resolves after the given amount of time.
 *
 * @example
 * const func = async () => {
 * 	console.log('start')
 * 	await sleep(1000)
 * 	console.log('end')
 * }
 *
 * func() // start, end
 */
export const sleep = (ms: number): Promise<void> =>
	new Promise(resolve => setTimeout(resolve, ms))
