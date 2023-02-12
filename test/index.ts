import { memorize } from '@michealpearce/utils'
import { testIs } from './is'

testIs()

const test = memorize(function (a: number, b: number) {
	console.log('called')
	return a + b
})

console.log(test(1, 2))
console.log(test(1, 2))
