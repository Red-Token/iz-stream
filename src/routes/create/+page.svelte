<script lang="ts">
	import {
		EventType,
		Nip9999SeederTorrentTransformationResponseEvent, Nip9999SeederTorrentTransformationResponseEventHandler,
		NostrCommunityServiceClient,
		Publisher,
		SynchronisedSession
	} from 'iz-nostrlib';
	import {onMount} from 'svelte';
	import {Nip35TorrentEvent} from 'iz-nostrlib/dist/org/nostr/nip35/Nip35TorrentEvent';
	import type {TrustedEvent} from '@welshman/util';
	import {safeFindSingleTagValue} from 'iz-nostrlib/dist/org/nostr/AbstractNipEvent';
	import {wt} from '@src/stores/wtZool.svelte';
	import {
		Nip9999SeederTorrentTransformationRequestEvent
	} from 'iz-nostrlib/dist/org/nostr/seederbot/Nip9999SeederControllEvents';
	import {goto} from '$app/navigation';
	import {globalNostrContext, globalRunes, me} from '@src/stores/profile.svelte.js';
	import {DynamicSynchronisedSession} from 'iz-nostrlib/dist/org/nostr/ses/DynamicSynchronisedSession';
	import {CommunityNostrContext} from 'iz-nostrlib/dist/org/nostr/communities/CommunityNostrContext';
	import {DynamicPublisher} from 'iz-nostrlib/dist/org/nostr/ses/DynamicPublisher';
	import {StaticEventsProcessor} from 'iz-nostrlib/dist/org/nostr/ses/StaticEventsProcessor';
	import {nip19} from 'nostr-tools';
	import {getPublicKey} from 'nostr-tools/pure';

	const state = $state({
		community: undefined,
		title: 'NN1',
		imdbId: '',
		infoHash: '',
		file: null,
		resp: {state: {state: null, msg: 'Not started the request'}}
	});

	const community = $derived(globalRunes.communities.get(state.community ?? ''));

	// let title = 'Big Buck Bunny DASH';
	// let imdbId = 'tt1254207';
	// let infoHash = '5bcb88dd5f1f2ec8940964987b6b0c2357f6a9f9';

	const publishers: Publisher[] = [];

	onMount(async () => {
		// // We do this as a mashinegun we need a way to select what communities we should publish, and as who
		// globalRunes.communities.forEach((community, key) => {
		// 	const cnc = new CommunityNostrContext(key, globalNostrContext);
		// 	const session = new DynamicSynchronisedSession(cnc.relays);
		//
		// 	console.log('KABOOOM!!!!! ERRROOORORORORORORO !TODO!');
		// 	// // community.identities.forEach((ci) => {
		// 	// // 	publishers.push(new Publisher(session, ci));
		// 	// });
		// });
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
			const x = publisher.publish(Nip35TorrentEvent.KIND, te.opts);
		});

		goto(`/view/infoHash/${state.infoHash}`).then((r) => {
			console.log(r);
		});
	}

	function onTranscode() {
		console.log(state.file);
		console.log('transcode!');

		if (state.community === undefined || me.identity === undefined) throw new Error('Community not found!');

		const cnc = new CommunityNostrContext(state.community, globalNostrContext);
		const ncs = new NostrCommunityServiceClient(cnc, me.identity);
		// const dss = new DynamicSynchronisedSession(ncs.community.relays);
		// const dp = new DynamicPublisher(dss, ncs.identity);

		const torrent = wt.seed(state.file, options);

		torrent.on('infoHash', () => {
			console.log('infoHash:' + torrent.infoHash);
			console.log('magnetURI:' + torrent.magnetURI);

			// TODO: This has to be made dynamic and you should select a bot

			const botNSec: string = 'nsec1p5p9ax0uftre04ewgxntkca4jurj2zlhjed46nwr22xs652vgtss84jeep'
			const decoded = nip19.decode(botNSec)
			if(decoded.type !== 'nsec') throw Error('ssfsdfsfsdfsdfsddffsdfsdfsdsfdsfdfsdsfdsfd')
			const botSeckey = decoded.data

			// const botPubkey = 'b670e0e20fb6b7e96b0349139c03150d692a7403c986099a1aadf467daa67909';
			const botPubkey = getPublicKey(botSeckey)

			const req = new Nip9999SeederTorrentTransformationRequestEvent(botPubkey, state.title, torrent.infoHash, {
				transform: 'cool'
			});

			const {dss, pub} = ncs.request(req)

			dss.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
				console.log(event);

				const sep = new StaticEventsProcessor([new Nip9999SeederTorrentTransformationResponseEventHandler((resp => {
					state.resp.state = resp.state;

					if (resp.state.final) {
						console.log('final');

						state.infoHash = safeFindSingleTagValue(event, 'x');
						wt.remove(torrent.infoHash);
					}
				}))]);

				sep.processEvent(event);
			});
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
			{state.community}
			{community?.nip01Event.profile.name ?? ''}
			<select bind:value={state.community}>
				<option value="">Select an option</option>
				{#each me.communities as option}
					<option
						value={option.pubkey}>{option.nickname ?? globalRunes.profiles.get(option.pubkey)?.nip01Event.profile.name ?? option.pubkey}</option>
				{/each}
			</select> <input type="text" bind:value={state.imdbId} placeholder="IMDB ID" class="form-input" />
			<input type="text" bind:value={state.title} placeholder="Movie title" class="form-input" />
			<input type="file" id="file" name="file" onchange={handleChange} />

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
				<div>
					state: {state.resp.state.state}
					<p></p>
					msg: {state.resp.state.msg}
				</div>
			{/if}

			<input type="text" bind:value={state.infoHash} placeholder="Info Hash" class="form-input" />
		</div>

		{#if state.infoHash !== ''}
			<button class="submit-btn" onclick={() => onCreate().then()}>
				Create
				<svg class="submit-icon" viewBox="0 0 24 24">
					<path d="M3 20v-6l8-2-8-2V4l19 8-19 8Z" />
				</svg>
			</button>
		{/if}
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
        color: var(--text-primary);
        transition: all 0.3s ease;
        margin: 0;
        will-change: box-shadow, border-color;
    }

    .form-input:focus {
        outline: none;
        border-color: var(--accent-color);
        transform: translateY(-1px);

        box-shadow: 0 0 0 3px var(--accent-transparent),
        0 2px 8px var(--color-hover);
    }

    .form-input::placeholder {
        color: var(--text-tertiary);
    }

    .form-input:has(:focus) {
        transform: translateY(-1px);
    }

    .submit-btn {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        width: 100%;
        padding: 1rem;
        background: var(--accent-color);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        font-weight: 500;
        cursor: pointer;
        transition: transform 0.2s ease,
        background 0.3s ease;
    }

    .submit-btn:hover {
        background: var(--accent-hover);
        transform: translateY(-1px);
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
