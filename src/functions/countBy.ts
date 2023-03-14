import { toEntries } from './entries'

export type CountArrayByHandler<Collection extends Array<any>> = (
	value: Collection[number],
	index: number,
) => any

export type CountObjectByHandler<Collection extends object> = (
	value: Collection[keyof Collection],
	key: keyof Collection,
) => any

export type CountByHandler<Collection extends Array<any> | object> =
	Collection extends Array<any>
		? CountArrayByHandler<Collection>
		: CountObjectByHandler<Collection>

export function countBy<
	Collection extends Array<any> | object,
	Handler extends CountByHandler<Collection>,
>(collection: Collection, handler: Handler): Map<ReturnType<Handler>, number> {
	const count = new Map<ReturnType<Handler>, number>()

	for (const [key, value] of toEntries(collection)) {
		// cast to never because for some reason TS says params are never
		const result = handler(value as never, key as never)
		const currentCount = count.get(result) || 0

		count.set(result, currentCount + 1)
	}

	return count
}

export function countByKey<T extends object, K extends keyof T>(
	collection: Array<T>,
	key: K,
) {
	return countBy(collection, item => item[key])
}
