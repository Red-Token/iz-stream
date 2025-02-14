<script lang="ts">
	import {page} from '$app/state';
	import {EventType, Subscription, SynchronisedSession} from 'iz-nostrlib';
	import {type TrustedEvent} from '@welshman/util';
	import {onMount} from 'svelte';
	import {wt} from '@src/stores/wtZool.svelte';
	import TorrentLike from '@src/components/torrenttalk/TorrentLike.svelte';
	import {s} from '@src/stores/assetStore.svelte';
	import {Nip35TorrentEvent} from 'iz-nostrlib/dist/org/nostr/nip35/Nip35TorrentEvent';
	import {communities} from '@src/stores/community.svelte';

	let options = {
		announce: ['wss://tracker.webtorrent.dev'],
		maxWebConns: 500
	};

	function download(event: Nip35TorrentEvent) {
		const torrent = wt.add(event.x, options);

		torrent.on('ready', () => {
			// Torrents can contain many files. Let's use the .mp4 file
			const file = torrent.files.find((file) => file.name.endsWith('.mp4'));

			if (file === undefined) throw new Error('ALIENS');

			const player = document.querySelector('video');

			if (player === null) throw new Error('ALIENS2');

			// player.src = file.streamURL

			// file.renderTo(player)
			file.streamTo(player);

			console.log('Ready to play!');
		});

		torrent.on('warning', (err) => {
			console.log(err);
		});
		torrent.on('error', (err) => {
			console.log(err);
		});
		torrent.on('wire', (wire) => {
			console.log(wire);
			console.log('number of peers' + torrent.numPeers);
		});
		torrent.on('download', (bytes) => {
			console.log(bytes);
			console.log('received: ' + torrent.received);
			console.log('downloaded: ' + torrent.downloaded);
		});
		torrent.on('upload', (bytes) => {
			console.log(bytes);
			console.log('uploaded: ' + torrent.uploaded);
		});
	}

	onMount(async () => {

		//TODO MAKE A GLOBAL SEARCH

		communities.forEach((communitie) => {
			// const session: SynchronisedSession = new SynchronisedSession(communitie.relays);
			//
			// communitie.relays.forEach((relay) => {
			// 	const sub = new Subscription(session, [{kinds: [Nip35TorrentEvent.KIND], '#i': [page.params.id]}], [relay]);
			// });
			//
			// session.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
			// 	const out = new Nip35TorrentEventBuilder(event).build();
			// 	out.event = event;
			// 	s.assets.push(out);
			//
			// 	console.log(s.assets.length);
			//
			// 	if (s.playing === undefined) {
			// 		s.playing = out;
			// 		download(s.playing);
			// 	}
			// });
		});
	});
</script>

<div class="video-page">
	<div class="torrent-title">{page.params.id}</div>
	<div class="video-container">
		<video id="video-player" controls>
			<track kind="captions" />
		</video>

		{#if s.playing !== undefined}
			<TorrentLike></TorrentLike>
		{/if}
	</div>
</div>

<style>
	.video-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		min-height: 100vh;
		background-color: var(--bg-1);
	}

	.video-container {
		width: 100%;
		max-width: 1200px;
		background: var(--bg-2);
		border: 1px solid var(--border-color);
		border-radius: 16px;
		box-shadow: 0 4px 12px var(--shadow-color);
		padding: 1.5rem;
		position: relative;
	}

	#video-player {
		width: 100%;
		height: auto;
		border-radius: 8px;
		outline: none;
	}

	.torrent-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--fg-1);
		margin-top: 1.5rem;
		text-align: center;
	}

	@media (max-width: 768px) {
		.video-container {
			padding: 1rem;
		}

		.torrent-title {
			font-size: 1.3rem;
		}
	}

	@media (max-width: 480px) {
		.video-container {
			padding: 0.5rem;
		}

		.torrent-title {
			font-size: 1.1rem;
		}
	}
</style>
