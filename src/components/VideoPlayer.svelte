<script lang="ts">
	import {onMount, onDestroy} from 'svelte';
	import videojs from 'video.js';
	import {wt} from '@src/stores/wtZool.svelte';
	import type {Torrent, TorrentFile} from 'webtorrent';

	type PlayerOptions = typeof videojs.options;

	const {infoHash} = $props();
	let videoElement: HTMLVideoElement | null = null;

	let player: any = null;

	const options = {
		announce: ['wss://tracker.webtorrent.dev'],
		maxWebConns: 500
	};

	function loadTorrent(torrent: Torrent) {
		torrent.files.forEach((file: any) => {
			console.log(file.name);
			console.log(file.streamURL);
		});

		let playFile = torrent.files.find((file: TorrentFile) => {
			return file.name.endsWith('.mpd');
		});

		// Add support of MP4
		if (!playFile) {
			playFile = torrent.files.find((file: TorrentFile) => {
				return file.name.endsWith('.mp4');
			});
		}

		if (playFile === undefined || playFile === null) {
			throw new Error(`Torrent player not found.`);
		}

		if (videoElement) {
			player.src([
				{
					src: playFile.streamURL,
					// type: playFile.type
				}
			]);
			player.load();
			player.play();
		}
	}

	onMount(() => {
		if (videoElement) {
			const videoOptions: PlayerOptions = {
				controls: true,
				responsive: true,
				fluid: true
				// poster: 'https://t4.ftcdn.net/jpg/01/22/97/01/360_F_122970161_S5JEt3v3wTdR7QXavi9seSKpuVBsUQsn.jpg'
				// preload: 'auto',
				// sources: []
			};

			player = videojs(videoElement, videoOptions);
		}

		// TODO rewrite this with await
		new Promise<Torrent>((resolve, reject) => {
			wt.get(infoHash).then((torrent: Torrent) => {
				if (torrent == null)
					torrent = wt.add(infoHash, options);

				if (torrent.ready)
					resolve(torrent);

				torrent.on('ready', () => {
					resolve(torrent);
				});

				torrent.on('error', reject);
			});
		}).then(torrent => {
			loadTorrent(torrent);
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
		// torrent.on('uploadold', (bytes) => {
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

<div class="video-container">
	<video controls class="video-js vjs-big-play-centered" bind:this={videoElement}></video>
</div>

<style>
    .video-container {
        padding-top: 2rem;
        display: flex;
        justify-content: center;
        max-width: 1200px;
        height: auto;
        margin: 0 auto;
    }

    .video-js {
        width: 100%;
    }
</style>
