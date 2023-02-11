import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node'
import { resolve } from 'path'

export default defineConfig({
	resolve: {
		alias: {
			'@michealpearce/utils': resolve('./src'),
		},
	},

	plugins: VitePluginNode({
		adapter: 'express',
		appPath: './src/index.ts',
	}),
})
