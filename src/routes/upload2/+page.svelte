<script lang="ts">
	import {onMount} from 'svelte';
	// import {wt} from '@src/stores/wtZool.svelte';
	import {EventType, NostrCommunityServiceClient} from 'iz-nostrlib';
	import {communities} from '@src/stores/community.svelte';
	import type {TrustedEvent} from '@welshman/util';
	import {
		Nip9999SeederTorrentTransformationRequestEvent
	} from 'iz-nostrlib/dist/org/nostr/seederbot/Nip9999SeederControllEvents.js';

	import SimplePeer from 'simple-peer/simplepeer.min.js';
	import WebTorrent from 'webtorrent/dist/webtorrent.min.js';

	let file: File;

	const rtcConfig = {
		iceServers: [
			{
				urls: ['turn:turn.stream.labs.h3.se'],
				username: 'test',
				credential: 'testme'
			},
			{
				urls: ['stun:stun.stream.labs.h3.se'],
				username: 'test',
				credential: 'testme'
			}
		],
		iceTransportPolicy: 'all',
		iceCandidatePoolSize: 0
	};

	onMount(() => {
	});

	const options = {
		announce: ['wss://tracker.webtorrent.dev', 'wss://tracker.btorrent.xyz', 'wss://tracker.openwebtorrent.com'],
		// announce: ['wss://tracker.webtorrent.dev'],
		maxWebConns: 500
	};

	function handleSubmit() {
		console.log(file);
		console.log('submit!');

		const community = communities.at(0);

		if (community === undefined)
			throw new Error('Community does not exist!');

		const ci = community.identities.values().toArray()[0];

		if (ci === undefined)
			throw new Error('CI does not exist!');

		const ncs = new NostrCommunityServiceClient(community, ci);

		ncs.session.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
			console.log(event);
		});

		const wt: WebTorrent = new WebTorrent({
			tracker: {
				rtcConfig: {
					...SimplePeer.config,
					...rtcConfig
				}
			}
		});

		const torrent = wt.seed(file, options);

		torrent.on('infoHash', () => {
			console.log('infoHash:' + torrent.infoHash);

			const req = new Nip9999SeederTorrentTransformationRequestEvent('NN1', torrent.infoHash, {transform: 'cool'});
			ncs.publisher.publish(Nip9999SeederTorrentTransformationRequestEvent.KIND, req.createTemplate());
		});

		torrent.on('upload', (bytes: any) => {
			console.log(bytes);
		});

		torrent.on('error', (err: any) => {
			console.log(err);
		});

		torrent.on('wire', (wire: any) => {
			console.log(wire);
		});
	}

	function handleChange(event: any) {
		file = event.target.files[0];
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
