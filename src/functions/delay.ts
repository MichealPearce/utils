import { sleep } from '@michealpearce/utils'
import { FunctionType } from '@michealpearce/utils/types'

export function delay<Func extends FunctionType>(func: Func, ms: number) {
	return sleep(ms).then<ReturnType<Func>>(func)
}
