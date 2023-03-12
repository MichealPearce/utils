import { fromEntries, toEntries } from '../functions'

export type ConstructStoreSubscriber<Value> = (
	value: Value,
	oldValue?: Value,
) => void

export type ConstructStoreSubscriberMap<Data extends Record<string, any>> = Map<
	keyof Data,
	Set<ConstructStoreSubscriber<any>>
>

export class ConstructStore<Data extends Record<string, any>>
	implements Map<keyof Data, Data[keyof Data]>
{
	[Symbol.iterator]() {
		return this.entries()
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name
	}

	#parent: ConstructStore<Data> | null
	#dependants = new Set<ConstructStore<Data>>()
	#subscribers: ConstructStoreSubscriberMap<Data> = new Map()
	#map: Map<keyof Data, Data[keyof Data]>

	get parent() {
		return this.#parent
	}

	get size() {
		return this.#map.size
	}

	constructor(data?: Data, parent: ConstructStore<Data> | null = null) {
		this.#map = new Map(data ? toEntries(data) : data)
		this.#parent = parent
	}

	derive(): ConstructStore<Data> {
		const derived = new ConstructStore(undefined, this)

		this.#dependants.add(derived)
		return derived
	}

	has(key: keyof Data, local = false): boolean {
		if (local) return this.#map.has(key)
		return this.#map.has(key) || this.parent?.has(key) || false
	}

	get<K extends keyof Data>(key: K): Data[K] | undefined {
		if (this.has(key, true)) return this.#map.get(key)
		return this.parent?.get(key)
	}

	set<K extends keyof Data>(key: K, value: Data[K]): this {
		this.emit(key, value)
		this.#map.set(key, value)

		return this
	}

	delete(key: keyof Data, upstream = false): boolean {
		if (upstream && this.parent) return this.parent.delete(key, upstream)
		return this.#map.delete(key)
	}

	forEach(
		callbackfn: (
			value: Data[keyof Data],
			key: keyof Data,
			map: Map<keyof Data, Data[keyof Data]>,
		) => void,
		thisArg?: any,
	): void {
		return new Map(this.entries()).forEach(callbackfn, thisArg)
	}

	clear(upstream = false): void {
		if (upstream && this.parent) return this.parent.clear(upstream)
		this.#map.clear()
	}

	keys(): IterableIterator<keyof Data> {
		if (this.parent)
			return new Set([...this.#map.keys(), ...this.parent.keys()]).values()
		return this.#map.keys()
	}

	entries(): IterableIterator<[keyof Data, Data[keyof Data]]> {
		const keys = this.keys()
		const entries = new Set<[keyof Data, Data[keyof Data]]>()

		for (const key of keys) entries.add([key, this.get(key)!])

		return entries.values()
	}

	values(): IterableIterator<Data[keyof Data]> {
		const keys = this.keys()
		const values = new Set<Data[keyof Data]>()

		for (const key of keys) values.add(this.get(key)!)

		return values.values()
	}

	subscribe<K extends keyof Data>(
		key: K,
		subscriber: ConstructStoreSubscriber<Data[K]>,
	): () => void {
		if (!this.#subscribers.has(key)) this.#subscribers.set(key, new Set())
		const subscribers = this.#subscribers.get(key)!

		subscribers.add(subscriber)

		subscriber(this.get(key)!)
		return () => subscribers.delete(subscriber)
	}

	emit<Key extends keyof Data>(key: Key, value: Data[Key]) {
		const subscribers = this.#subscribers.get(key)
		if (subscribers) for (const subscriber of subscribers) subscriber(value)

		for (const dependant of this.#dependants) dependant.emit(key, value)
	}

	toJSON(): Data {
		return fromEntries(Array.from(this))
	}
}
