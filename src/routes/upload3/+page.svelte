<script lang="ts">
	import {onMount} from 'svelte';
	import {wt} from '@src/stores/wtZool.svelte';
	import {EventType, NostrCommunityServiceClient} from 'iz-nostrlib';
	import {communities} from '@src/stores/community.svelte';
	import type {TrustedEvent} from '@welshman/util';
	import {Nip9999SeederTorrentTransformationRequestEvent} from 'iz-nostrlib/dist/org/nostr/seederbot/Nip9999SeederControllEvents.js';

	onMount(() => {});

	const options = {
		announce: ['wss://tracker.webtorrent.dev', 'wss://tracker.btorrent.xyz', 'wss://tracker.openwebtorrent.com'],
		maxWebConns: 500
	};

	function handleChange(event: any) {
		const file = event.target.files[0];
		const torrent = wt.seed(file, options);

		torrent.on('infoHash', () => {
			console.log('infoHash: ' + torrent.infoHash);
			console.log('metadata: ' + torrent.magnetURI);
		});

		torrent.on('metadata', () => {
			console.log('metadata: ' + torrent.magnetURI);
		});

		torrent.on('error', (err: any) => {
			console.log('errorHash: ' + err);
		});

		torrent.on('warning', (err: any) => {
			console.log('warningHash: ' + err);
		});
	}

	function handleSubmit(event: any) {
		console.log(event);
	}

	// function handleFileChange(event: any) {
	// 	console.log('I am a file');
	// 	const file = event.target.files[0];
	// 	console.log(file);
	// }
</script>

<div>
	<h1>File Upload Form</h1>
	<div>
		<label for="file">Choose a file:</label>
		<input type="file" id="file" name="file" onchange={handleChange} />
	</div>
	<button type="submit" class="update-btn" onclick={handleSubmit}>Upload</button>
</div>
