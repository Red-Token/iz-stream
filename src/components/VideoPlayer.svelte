<script lang="ts">
	import {onMount, onDestroy} from 'svelte';

	import videojs from 'video.js';



	type PlayerOptions = typeof videojs.options;
	type AlsoPlayerOptions = Parameters<typeof videojs>["1"];

	export let options: PlayerOptions = {
		controls: true,
		responsive: true,
		fluid: true,
		preload: 'auto',
		sources: [
			{
				src: 'https://va.h3.se/video/xyz/output.mpd',
				type: 'application/dash+xml',
				// src: 'https://va.h3.se/video/nn1/Naughty%20No.1%20(Barkhaa)%201080p%20HD%20%5bDjMobmix.Com%5d.mp4',
				// type: 'video/mp4'
			}
		]
	};


	// let videoElement: HTMLVideoElement;
	// let player: videojs.Player;

	let videoElement: HTMLVideoElement | null = null;
	let player: any = null;

	onMount(() => {
		if (videoElement) {
			player = videojs(videoElement, options);
		}
	});

	onDestroy(() => {
		if (player) {
			player.dispose();
		}
	});
</script>

<!-- Video.js container -->
<div>
	<video
		controls
		class="video-js vjs-big-play-centered"
		bind:this={videoElement}
		width="640"
		height="360"
	></video>
</div>

<style>
    /* Optional: Add custom styles for the player */
    .video-js {
        width: 100%;
        height: 100%;
    }
</style>
