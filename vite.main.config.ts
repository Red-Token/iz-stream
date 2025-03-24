import {defineConfig} from 'vite';
import {builtinModules} from 'node:module';

export default defineConfig({
	build: {
		outDir: 'electron/main',
		minify: 'esbuild',
		lib: {
			entry: './src-electron/main.ts',
			fileName: () => '[name].js',
			formats: ['es']
		},

		rollupOptions: {
			external: ['electron', ...builtinModules.map((m) => [m, `node:${m}`]).flat()]
		}
	},
	plugins: [],
	resolve: {
		// Load the Node.js entry.
		mainFields: ['module', 'jsnext:main', 'jsnext']
	},
	clearScreen: false
});
