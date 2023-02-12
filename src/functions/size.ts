import { isArray, isMap, isObject, isSet, isString } from '@michealpearce/utils'

export function size(
	item: any[] | string | object | Map<any, any> | Set<any>,
): number {
	if (isArray(item) || isString(item)) return item.length
	else if (isMap(item) || isSet(item)) return item.size
	else if (isObject(item)) return Object.keys(item).length
	else return 0
}
