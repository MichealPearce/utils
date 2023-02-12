export type Entry<A, B> = [A, B]
export type Entries<A, B> = Entry<A, B>[]

export function toEntries<A extends Record<any, any>>(
	target: A,
): Entries<keyof A, A[keyof A]> {
	return Object.entries(target) as any
}

export function fromEntries<A extends Record<any, any>>(
	entries: Entries<keyof A, A[keyof A]>,
): A {
	return Object.fromEntries(entries) as any
}
