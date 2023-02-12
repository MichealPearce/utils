import { sleep } from '@michealpearce/utils'
import { FunctionType } from '@michealpearce/utils/types'

/**
 * Returns a function that delays the execution of the function.
 * The function is executed after the specified number of milliseconds.
 *
 * @param func The function to delay.
 * @param ms The number of milliseconds to delay the execution of the function.
 * @returns A promise that calls the function after the specified number of milliseconds.
 */
export function delay<Func extends FunctionType>(func: Func, ms: number) {
	return sleep(ms).then<ReturnType<Func>>(func)
}
