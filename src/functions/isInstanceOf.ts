import { ClassType } from '../types'

export function isInstanceOf<InstanceType extends object>(
	obj: unknown,
	constructor: ClassType<InstanceType>,
): obj is InstanceType {
	return obj instanceof constructor
}

export function notInstanceOf<InstanceType extends object>(
	obj: unknown,
	constructor: ClassType<InstanceType>,
): obj is Exclude<unknown, InstanceType> {
	return !isInstanceOf(obj, constructor)
}
