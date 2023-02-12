import { Rollable, RollableFunction } from '@michealpearce/utils'

export class RollableProcessor {
	items = new Set<RollableFunction>()
	processing = new Set<Rollable>()

	running: null | Promise<void> = null

	constructor(public readonly options = { concurrency: 1 }) {}

	add(...items: RollableFunction[]) {
		for (const item of items) this.items.add(item)

		if (!this.running) this.running = this.start()
	}

	async start() {
		for (const item of this.items) {
			if (this.processing.size >= this.options.concurrency)
				await Promise.all(this.processing)

			this.items.delete(item)
			const call = this.process(item).finally(() =>
				this.processing.delete(call),
			)

			this.processing.add(call)
		}
	}

	async process(item: RollableFunction) {
		return await item()
	}
}
