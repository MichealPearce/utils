import { roll, Rollable } from '../functions'
import { FunctionType } from '../types'

export type EventBusFunction = (...args: any[]) => Rollable

export type EventBusMap<Hooks extends Record<string, FunctionType>> = Map<
	keyof Hooks,
	Map<number, Set<Hooks[keyof Hooks]>>
>

export class EventBus<Events extends Record<string, EventBusFunction>> {
	constructor(public readonly eventMap: EventBusMap<Events> = new Map()) {}

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
		return () => this.off(event, handler, level)
	}

	off(event: keyof Events, handler: Events[keyof Events], level?: number) {
		if (!this.eventMap.has(event)) return
		const eventMap = this.eventMap.get(event)!

		if (level) {
			if (!eventMap.has(level)) return
			const levelSet = eventMap.get(level)!
			levelSet.delete(handler)
			return
		}

		for (const [_level, levelSet] of eventMap) {
			if (levelSet.has(handler)) levelSet.delete(handler)
		}
	}

	emit<Event extends keyof Events>(
		event: Event,
		...args: Parameters<Events[Event]>
	): Rollable {
		if (!this.eventMap.has(event)) return
		const eventMap = this.eventMap.get(event)!

		return roll(
			Array.from(eventMap)
				.sort(([levelA], [levelB]) => levelA - levelB)
				.flatMap(([_, levelSet]) => Array.from(levelSet))
				.map(handler => () => handler(...args)),
		)
	}
}
