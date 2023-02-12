import { FunctionType } from '@michealpearce/utils'

export function bind<
	Obj extends object,
	Func extends FunctionType<any, any, Obj>,
>(func: Func, obj: Obj): Func {
	return func.bind(obj) as Func
}

export function bindAll(obj: object, methods: string[]): void {
	for (const method of methods) obj[method] = bind(obj[method], obj)
}
