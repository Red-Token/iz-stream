<script lang="ts">
	import {onMount, onDestroy} from 'svelte';
	import videojs from 'video.js';
	import {wt} from '@src/stores/wtZool.svelte';

	type PlayerOptions = typeof videojs.options;

	let {infoHash} = $props();
	let videoElement: HTMLVideoElement | null = null;

	let player: any = null;

	const options = {
		announce: ['wss://tracker.webtorrent.dev'],
		maxWebConns: 500
	};

	onMount(() => {
		const torrent = wt.add(infoHash, options);

		torrent.on('ready', () => {

			// Add support for MPEG
			let playFile = torrent.files.find((file: File) => {
				return file.name.endsWith('.mpd');
			});

			// Add support of MP4
			if (!playFile) {
				playFile = torrent.files.find((file: File) => {
					return file.name.endsWith('.mp4');
				});
			}

			if (videoElement) {
				const videoOptions: PlayerOptions = {
					controls: true,
					responsive: true,
					fluid: true,
					preload: 'auto',
					sources: [
						{
							src: playFile.streamURL,
							type: playFile.type
						}
					]
				};

				player = videojs(videoElement, videoOptions);
			}
		});

		// torrent.on('warning', (err) => {
		// 	console.log(err);
		// });
		// torrent.on('error', (err) => {
		// 	console.log(err);
		// });
		// torrent.on('wire', (wire) => {
		// 	console.log(wire);
		// 	console.log('number of peers' + torrent.numPeers);
		// });
		// torrent.on('download', (bytes) => {
		// 	console.log(bytes);
		// 	console.log('received: ' + torrent.received);
		// 	console.log('downloaded: ' + torrent.downloaded);
		// });
		// torrent.on('upload', (bytes) => {
		// 	console.log(bytes);
		// 	console.log('uploaded: ' + torrent.uploaded);
		// });
	});

	onDestroy(() => {
		if (player) {
			player.dispose();
		}
	});
</script>

<div>
	<video controls class="video-js vjs-big-play-centered" bind:this={videoElement} width="640" height="360"></video>
</div>

<style>
    /* Optional: Add custom styles for the player */
    .video-js {
        width: 100%;
        height: 100%;
    }
</style>
