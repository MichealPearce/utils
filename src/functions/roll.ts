export type Rollable = void | Promise<void>
export type RollableFunction = (..._no_args: []) => Rollable

export function roll(funcs: RollableFunction[]): Rollable {
	let rolling: Rollable

	for (const func of funcs)
		if (rolling instanceof Promise) rolling = rolling.then(func)
		else rolling = func()

	return rolling
}
