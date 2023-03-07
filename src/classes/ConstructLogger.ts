import { defaults, pick } from '../functions'

export type ConstructLoggerOut = (...args: any[]) => void

export interface ConstructLoggerOptions {
	namespace?: string
	timestamp?: boolean
	out: ConstructLoggerOut
}

export const enum ConstructLoggerLevel {
	INFO = 'INFO',
	WARN = 'WARN',
	ERROR = 'ERROR',
	DEBUG = 'DEBUG',
}

export class ConstructLogger {
	protected readonly options: ConstructLoggerOptions
	protected readonly groups = new Set<string>()

	constructor(options: Partial<ConstructLoggerOptions> = {}) {
		this.options = defaults(options, {
			timestamp: true,
			out: console.log,
		})
	}

	protected format(
		level: ConstructLoggerLevel,
		message: string,
		..._details: any[]
	) {
		const { namespace, timestamp } = this.options
		let parts: string[] = []

		if (timestamp) parts.push(`[${new Date().toISOString()}]`)

		if (namespace) parts.push(`(${namespace})`)
		if (this.groups.size) parts.push(`{${Array.from(this.groups).join(':')}}`)

		parts.push(`|${level}|`)
		return `${parts.join(' ')} ${message}`
	}

	log(level: ConstructLoggerLevel, message: string, ...details: any[]) {
		const msg = this.format(level, message, ...details)
		return this.options.out(msg, ...details)
	}

	info(message: string, ...details: any[]) {
		return this.log(ConstructLoggerLevel.INFO, message, ...details)
	}

	warn(message: string, ...details: any[]) {
		return this.log(ConstructLoggerLevel.WARN, message, ...details)
	}

	error(message: string, ...details: any[]) {
		return this.log(ConstructLoggerLevel.ERROR, message, ...details)
	}

	debug(message: string, ...details: any[]) {
		return this.log(ConstructLoggerLevel.DEBUG, message, ...details)
	}

	group(...names: string[]) {
		for (const name of names) this.groups.add(name)
	}

	endGroup(...names: string[]) {
		for (const name of names) this.groups.delete(name)
	}

	toggleGroup(...names: string[]) {
		for (const name of names)
			if (this.groups.has(name)) this.groups.delete(name)
			else this.groups.add(name)
	}
}

export class ConstructJSONLogger extends ConstructLogger {
	protected format(
		level: ConstructLoggerLevel,
		message: string,
		...details: any[]
	) {
		const { namespace, timestamp } = this.options

		details = details.map(item => {
			if (item instanceof Error)
				return pick(item, ['name', 'message', 'stack', 'cause'])

			return item
		})

		return JSON.stringify({
			timestamp: timestamp ? new Date().toISOString() : undefined,
			namespace,
			groups: this.groups.size ? Array.from(this.groups) : undefined,
			level,
			message,
			details,
		})
	}

	log(level: ConstructLoggerLevel, message: string, ...details: any[]) {
		return this.options.out(this.format(level, message, ...details))
	}
}
