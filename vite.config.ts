import { defineConfig } from 'vite'
import { UserConfig as VitestConfig } from 'vitest/config'
import { resolve } from 'path'

declare module 'vite' {
	interface UserConfig extends VitestConfig {}
}

export default defineConfig({
	test: {
		includeSource: ['src/**/*.test.ts'],
	},

	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: '@michealpearce/utils',
			fileName: format => (format === 'es' ? 'index.mjs' : 'index.cjs'),
			formats: ['es', 'cjs'],
		},
	},
})
