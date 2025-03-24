import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({script: true}),

	kit: {
		csp: {
			directives: {
				'script-src': ['self']
			}
		},
		paths: {
			relative: false
		},
		adapter: adapter({
			pages: 'build/renderer',
			fallback: 'index.html',
			assets: 'build/renderer'
		}),
		files: {
			assets: 'static',
			lib: 'src/lib',
			params: 'src/params',
			routes: 'src/routes',
			//serviceWorker: "src-renderer/service-worker",//static/sw.min.js
			appTemplate: 'src/app.html',
			errorTemplate: 'src/error.html'
		},
		alias: {
			'@src': 'src',
			$components: 'src/components',
			'@test': 'test'
		}
	}
};

export default config;
