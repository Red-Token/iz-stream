<script lang="ts">
	import {
		EventType,
		Nip9999SeederTorrentTransformationResponseEvent,
		NostrCommunityServiceClient,
		Publisher,
		SynchronisedSession
	} from 'iz-nostrlib';
	import {onMount} from 'svelte';
	import {Nip35TorrentEvent} from 'iz-nostrlib/dist/org/nostr/nip35/Nip35TorrentEvent';
	import {communities} from '@src/stores/community.svelte';
	import type {TrustedEvent} from '@welshman/util';
	import {safeFindSingleTagValue} from 'iz-nostrlib/dist/org/nostr/AbstractNipEvent';
	import {wt} from '@src/stores/wtZool.svelte';
	import {Nip9999SeederTorrentTransformationRequestEvent} from 'iz-nostrlib/dist/org/nostr/seederbot/Nip9999SeederControllEvents';
	import {goto} from '$app/navigation';

	const state = $state({
		title: '',
		imdbId: '',
		infoHash: '',
		file: null,
		resp: {state: {state: null, msg: 'Not started the request', progress: 0}}
	});

	const publishers: Publisher[] = [];

	onMount(async () => {
		// We do this as a mashinegun we need a way to select what communities we should publish, and as who
		communities.forEach((community) => {
			const session = new SynchronisedSession(community.relays);

			community.identities.forEach((ci) => {
				publishers.push(new Publisher(session, ci));
			});
		});
	});

	const options = {
		announce: ['wss://tracker.webtorrent.dev', 'wss://tracker.btorrent.xyz', 'wss://tracker.openwebtorrent.com'],
		maxWebConns: 500
	};

	async function onCreate() {
		// Send the message
		const mediaTags: string[] = [];

		if (state.imdbId !== '') {
			mediaTags.push(`imdb:${state.imdbId}`);
		}

		const te: Nip35TorrentEvent = new Nip35TorrentEvent(
			state.title,
			state.infoHash,
			'Description',
			[],
			[],
			mediaTags,
			[]
		);

		publishers.forEach((publisher) => {
			const x = publisher.publish(Nip35TorrentEvent.KIND, te.createTemplate());
		});

		goto(`/view/infoHash/${state.infoHash}`).then((r) => {
			console.log(r);
		});
	}

	function onTranscode() {
		console.log(state.file);
		console.log('transcode!');

		const community = communities.at(0);

		if (community === undefined) throw new Error('Community does not exist!');

		const ci = community.identities.values().toArray()[0];

		if (ci === undefined) throw new Error('CI does not exist!');

		const ncs = new NostrCommunityServiceClient(community, ci);

		ncs.session.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
			console.log(event);

			if (event.kind === Nip9999SeederTorrentTransformationResponseEvent.KIND) {
				const resp = Nip9999SeederTorrentTransformationResponseEvent.build(event);

				if (resp.state.state === 'seeding' && resp.event !== undefined) {
					state.infoHash = safeFindSingleTagValue(resp.event, 'x');
					wt.remove(torrent.infoHash);
				}

				state.resp = resp;
			}
		});

		const torrent = wt.seed(state.file, options);

		torrent.on('infoHash', () => {
			console.log('infoHash:' + torrent.infoHash);
			console.log('magnetURI:' + torrent.magnetURI);

			const req = new Nip9999SeederTorrentTransformationRequestEvent(state.title, torrent.infoHash, {
				transform: 'cool'
			});
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

	async function handleChange(event: any) {
		state.file = event.target.files[0];
	}
</script>

<div class="create-container">
	<div class="form-card">
		<div class="input-group">
			<input type="text" bind:value={state.title} placeholder="Movie title" class="form-input" />
			<input type="text" bind:value={state.imdbId} placeholder="IMDB ID" class="form-input" />
			<label class="upload-label">
				<input type="file" id="file" accept="video/*" onchange={handleChange} class="file-input" />
			</label>

			{#if state.resp.state.state === null}
				{#if state.file !== null}
					<button class="submit-btn" onclick={() => onTranscode()}>
						Submit to Seeder for transcoding
						<svg class="submit-icon" viewBox="0 0 24 24">
							<path d="M3 20v-6l8-2-8-2V4l19 8-19 8Z" />
						</svg>
					</button>
				{/if}
			{:else}
				<div class="progressbar-container">
					<div class="progressbar-bar" style="width: {state.resp.state.progress}%;"></div>
					<div class="progressbar-text">{state.resp.state.state}</div>
				</div>
			{/if}

			<input type="text" bind:value={state.infoHash} placeholder="Info Hash" class="form-input" />
		</div>
		<button disabled={state.infoHash === ''} class="submit-btn" onclick={() => onCreate().then()}>
			Create
			<svg class="submit-icon" viewBox="0 0 24 24">
				<path d="M3 20v-6l8-2-8-2V4l19 8-19 8Z" />
			</svg>
		</button>
	</div>
</div>

<style>
	.form-input,
	.submit-btn {
		box-sizing: border-box;
	}

	.create-container {
		max-width: 600px;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	.form-card {
		background: var(--bg-1);
		border-radius: 16px;
		border: 1px solid var(--border-color);
		padding: 2rem;
		box-shadow: 0 4px 12px var(--shadow-color);
	}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.form-input {
		width: 100%;
		padding: 1rem;
		font-size: 1rem;
		background: var(--bg-2);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		color: var(--text-fg-1);
		transition: all 0.3s ease;
		margin: 0;
		will-change: box-shadow, border-color;
	}

	.form-input:focus {
		outline: none;
		border-color: var(--accent-color);
		transform: translateY(-1px);

		box-shadow:
			0 0 0 3px var(--accent-transparent),
			0 2px 8px var(--color-hover);
	}

	.form-input::placeholder {
		color: var(--fg-2);
	}

	.form-input:has(:focus) {
		transform: translateY(-1px);
	}

	.upload-label {
		display: block;
		padding: 0.75rem;
		background: var(--bg-3);
		color: var(--fg-1);
		border-radius: 6px;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.upload-label:hover {
		background: var(--border-color);
	}
	.file-input {
		cursor: pointer;
	}

	.progressbar-container {
		width: 100%;
		height: 30px;
		position: relative;
		background: var(--bg-2);
		border: 2px solid var(--border-color);
		border-radius: 8px;
		align-items: center;
		overflow: hidden;
	}

	.progressbar-bar {
		text-align: justify;
		height: 100%;
		background: var(--accent-color);
		animation: width 0.4s easy;
	}

	.progressbar-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		font-size: 14px;
		pointer-events: none;
	}

	.submit-btn {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		padding: 1rem;
		border: 2px solid var(--border-color);
		background: transparent;
		color: white;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: 500;
		cursor: pointer;
		transition:
			transform 0.2s ease,
			background 0.3s ease;
	}

	.submit-btn:hover {
		transform: translateY(-1px);
		background: var(--accent-color);
	}

	.submit-btn:disabled {
		color: #999;
		cursor: not-allowed;
	}

	.submit-btn:disabled:hover {
		background-color: var(--bg-2);
	}

	.submit-icon {
		width: 24px;
		height: 24px;
		fill: currentColor;
	}

	.create-container {
		max-width: 600px;
		margin: 2rem auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	.form-card {
		background: var(--bg-1);
		border-radius: 16px;
		border: 1px solid var(--border-color);
		padding: 2rem;
		box-shadow: 0 4px 12px var(--shadow-color);
		overflow: hidden;
	}

	@media (max-width: 768px) {
		.create-container {
			padding: 0 0.5rem;
		}

		.form-card {
			padding: 1.5rem;
			border-radius: 12px;
		}

		.form-input {
			padding: 0.875rem;
			font-size: 0.95rem;
		}

		.submit-btn {
			font-size: 1rem;
			padding: 0.875rem;
		}
	}

	.form-input {
		will-change: box-shadow, border-color;
	}

	@media (max-width: 480px) {
		.form-card {
			padding: 1rem;
		}

		.input-group {
			gap: 1rem;
		}
	}
</style>
