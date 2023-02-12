import { groupByKey, groupByKeys } from '@michealpearce/utils'
import assert from 'assert'

export function testGroup() {
	const data = [
		{ id: 1, name: 'foo', age: 20 },
		{ id: 2, name: 'foo', age: 20 },
		{ id: 3, name: 'baz', age: 40 },
		{ id: 4, name: 'baz', age: 40 },
		{ id: 5, name: 'quux', age: 40 },
		{ id: 6, name: 'quux', age: 65 },
		{ id: 7, name: 'corge', age: 80 },
		{ id: 8, name: 'grault', age: 65 },
	]

	const groupedAge = groupByKey(data, 'age')

	assert(groupedAge.get(20)!.length === 2)
	assert(groupedAge.get(40)!.length === 3)
	assert(groupedAge.get(65)!.length === 2)
	assert(groupedAge.get(80)!.length === 1)
	assert(groupedAge.get(100) === undefined)
	assert(groupedAge.size === 4)

	const groupedAgeAndName = groupByKeys(data, ['age', 'name'])

	assert(groupedAgeAndName.get('20|foo')!.length === 2)
	assert(groupedAgeAndName.get('40|baz')!.length === 2)
	assert(groupedAgeAndName.get('40|quux')!.length === 1)
	assert(groupedAgeAndName.get('65|quux')!.length === 1)
	assert(groupedAgeAndName.get('65|grault')!.length === 1)
	assert(groupedAgeAndName.get('80|corge')!.length === 1)
	assert(groupedAgeAndName.get('100|foo') === undefined)
	assert(groupedAgeAndName.size === 6)
}
