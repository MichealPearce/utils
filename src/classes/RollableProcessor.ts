import { RollableFunction, Rollable } from '../functions'

export class RollableProcessor {
	items = new Set<RollableFunction>()
	processing = new Set<Rollable>()

	running: null | Promise<void> = null

	constructor(public readonly options = { concurrency: 1 }) {}

	add(...items: RollableFunction[]) {
		for (const item of items) this.items.add(item)
		if (!this.running) this.running = this.start()
	}

	async start(): Promise<void> {
		for (const item of this.items) {
			if (this.processing.size >= this.options.concurrency)
				await Promise.all(this.processing)

			this.items.delete(item)
			const call = this.process(item).finally(() =>
				this.processing.delete(call),
			)

			this.processing.add(call)
		}

		if (this.processing.size) await Promise.all(this.processing)
		if (this.items.size) return this.start()
		else this.running = null
	}

	protected async process(item: RollableFunction) {
		return await item()
	}
}
