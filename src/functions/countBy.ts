import { toEntries } from './entries'

export type CountArrayByHandler<Collection extends Array<any>> = (
	key: number,
	value: Collection[number],
) => Collection[number]

export type CountObjectByHandler<Collection extends object> = (
	key: keyof Collection,
	value: Collection[keyof Collection],
) => Collection[keyof Collection]

export type CountByHandler<Collection extends Array<any> | object> =
	Collection extends Array<any>
		? CountArrayByHandler<Collection>
		: CountObjectByHandler<Collection>

export type CountRecord<Collection extends Array<any> | object> = Record<
	Collection extends Array<any>
		? Collection[number]
		: Collection[keyof Collection],
	number
>

export function countBy<Collection extends Array<any> | object>(
	collection: Collection,
	handler: Collection extends Array<any>
		? CountArrayByHandler<Collection>
		: CountObjectByHandler<Collection>,
): CountRecord<Collection> {
	const count: CountRecord<Collection> = {} as any

	for (const [key, value] of toEntries(collection)) {
		// cast to never because for some reason TS says params are never
		const result = handler(key as never, value as never)

		if (count[result] === undefined) count[result] = 0

		count[result]++
	}

	return count
}
