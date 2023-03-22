export * from './ClassType'
export * from './FunctionType'
export * from './ObjectMethods'
export * from './ObjectEntries'

export type Nullable<Type> = Type | null
export type Optional<Type> = Type | undefined

export type UnionToIntersection<U> = (
	U extends any ? (k: U) => void : never
) extends (k: infer I) => void
	? I
	: never
