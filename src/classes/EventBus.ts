import { Rollable } from '../functions'
import { FunctionType } from '../types'

export type EventBusFunction = (...args: any[]) => Rollable

export type EventBusMap<Hooks extends Record<string, FunctionType>> = Map<
	keyof Hooks,
	Map<number, Set<Hooks[keyof Hooks]>>
>

export class EventBus<Events extends Record<string, EventBusFunction>> {
	constructor(public eventMap: EventBusMap<Events> = new Map()) {}

	on<Event extends keyof Events>(
		event: Event,
		handler: Events[Event],
		level = 10,
	) {
		if (!this.eventMap.has(event)) this.eventMap.set(event, new Map())
		const eventMap = this.eventMap.get(event)!

		if (!eventMap.has(level)) eventMap.set(level, new Set())
		const levelSet = eventMap.get(level)!

		levelSet.add(handler)

		return () => levelSet.delete(handler)
	}

	trigger<Event extends keyof Events>(
		event: Event,
		...args: Parameters<Events[Event]>
	) {
		if (!this.eventMap.has(event)) return
		const eventMap = this.eventMap.get(event)!

		for (const levelSet of eventMap.values()) {
			for (const handler of levelSet) {
				handler(...args)
			}
		}
	}
}
