import { extract } from '@michealpearce/utils'

type Test = {
	a: string
	b: number
	c: boolean
}

const test: Test = {
	a: 'a',
	b: 1,
	c: true,
}

const extracted = extract(test, ['a', 'c'])
console.log('extracted', extracted)
