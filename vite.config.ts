import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';


export default defineConfig({
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{
					// src: 'node_modules/webtorrent/dist/sw.min.js', // Path to the service worker in node_modules
					src: 'static/sw.min.js', // Path to the service worker in node_modules
					dest: '' // Copies to the root of the `static` directory
				}
			]
		})
	]
});
