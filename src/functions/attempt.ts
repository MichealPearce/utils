import { ConstructError } from '../classes'

/**
 * Returns the result of the function if it does not throw an error.
 * Otherwise, returns an error.
 *
 * @param func The function to attempt.
 * @returns The result of the function or an error.
 *
 * @example
 * const func = () => JSON.parse('will fail')
 *
 * const result = attempt(func)
 *
 * console.log(result) // ConstructError
 */
export function attempt<Func extends (..._no_args: []) => any>(
	func: Func,
): ReturnType<Func> | ConstructError {
	try {
		return func()
	} catch (error) {
		return new ConstructError('attempt failed', error)
	}
}
