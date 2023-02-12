export type Rollable = void | Promise<void>
export type RollableFunction = () => Rollable

export function roll(funcs: RollableFunction[]) {
	let rolling: Rollable

	for (const func of funcs)
		if (rolling instanceof Promise) rolling = rolling.then(func)
		else rolling = func()

	return rolling
}
