import staticAdapter from '@sveltejs/adapter-static';
import nodeAdapter from '@sveltejs/adapter-node';
import multiAdapter from '@macfja/svelte-multi-adapter';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess({script: true}),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: multiAdapter([staticAdapter({pages: 'build/static', fallback: 'index.html'}), nodeAdapter({out: 'build/node'})]),

		alias: {
			'@src': 'src',
			$components: 'src/components',
			'@test': 'test'
		}
	}
};

export default config;
