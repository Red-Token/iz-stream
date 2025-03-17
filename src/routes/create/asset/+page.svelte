<script lang="ts">
	import {onMount} from 'svelte';
	import {goto} from '$app/navigation';
	import {EventType, type Publisher, safeFindSingleTagValue} from 'iz-nostrlib';
	import {Nip35TorrentEvent} from 'iz-nostrlib/nips';
	import {CommunityNostrContext} from 'iz-nostrlib/communities';
	import {
		Nip9999SeederTorrentTransformationRequestEvent,
		Nip9999SeederTorrentTransformationResponseEventHandler,
		NostrCommunityServiceClient
	} from 'iz-nostrlib/seederbot';
	import {DynamicPublisher, DynamicSynchronisedSession, StaticEventsProcessor} from 'iz-nostrlib/ses';
	import type {TrustedEvent} from '@red-token/welshman/util';
	import {wt} from '@src/stores/wtZool.svelte';
	import {globalNostrContext, globalRunes, me} from '@src/stores/profile.svelte';

	const template = JSON.parse(sessionStorage.getItem('createTemplate') || '{}');

	const state = $state({
		community: undefined,
		botPubkey: 'b1e997f11f8d454eae2b2c1d52948e800df4e7103412d78984827eea2be138b2',
		formats: undefined,
		title: template.title,
		imdbId: template.imdbId,
		infoHash: '',
		file: null,
		resp: {state: {state: null, msg: 'Not started the request', progress: 0}}
	});

	// const community = $derived(globalRunes.communities.get(state.community ?? ''));

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

		console.log(state.community);

		if (state.community === undefined || me.identity === undefined)
			throw new Error('Community not found or identiy invalid');

		//TODO: this is a hack we just force the main identity on things here and create on demand
		const cnc = new CommunityNostrContext(state.community, globalNostrContext);
		const session = new DynamicSynchronisedSession(cnc.relays);
		const dp = new DynamicPublisher(session, me.identity);
		dp.publish(te);

		//
		//
		// publishers.forEach((publisher) => {
		// 	const x = publisher.publish(Nip35TorrentEvent.KIND, te.opts);
		// });

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

		// TODO We need to make this safe
		const torrent = wt.seed(state.file, options);

		torrent.on('infoHash', () => {
			console.log('infoHash:' + torrent.infoHash);
			console.log('magnetURI:' + torrent.magnetURI);

			// TODO: This has to be made dynamic and you should select a bot
			// const botNSec: string = 'nsec1p5p9ax0uftre04ewgxntkca4jurj2zlhjed46nwr22xs652vgtss84jeep';
			// const decoded = nip19.decode(botNSec);
			// if (decoded.type !== 'nsec') throw Error('ssfsdfsfsdfsdfsddffsdfsdfsdsfdsfdfsdsfdsfd');
			// const botSeckey = decoded.data;

			// const botPubkey = 'b670e0e20fb6b7e96b0349139c03150d692a7403c986099a1aadf467daa67909';
			// DO NOT USE CHECK THE BOTKEY
			// const botPubkey = getPublicKey(botSeckey);

			const req = new Nip9999SeederTorrentTransformationRequestEvent(state.botPubkey, state.title, torrent.infoHash, {
				transform: 'cool'
			});

			const {dss, pub} = ncs.request(req);

			dss.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
				console.log(event);

				const sep = new StaticEventsProcessor([
					new Nip9999SeederTorrentTransformationResponseEventHandler((resp) => {
						state.resp.state = resp.state;

						if (resp.state.final) {
							console.log('final');

							state.infoHash = safeFindSingleTagValue(event, 'x');
							wt.remove(torrent.infoHash);
						}
					})
				]);

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
			<!--{community?.nip01Event.profile.name ?? ''}-->
			<select bind:value={state.community}>
				{#each me.communities as option}
					<option value={option.pubkey}
					>{option.nickname ??
					globalRunes.profiles.get(option.pubkey)?.nip01Event.profile.name ??
					option.pubkey}</option
					>
				{/each}
			</select>
			<select bind:value={state.botPubkey}>
				{#each me.transcodingBots as option}
					<option value={option.pubkey}
					>{option.nickname ??
					globalRunes.profiles.get(option.pubkey)?.nip01Event.profile.name ??
					option.pubkey}</option>
				{/each}
			</select>
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

        box-shadow: 0 0 0 3px var(--accent-transparent),
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
        animation: width 0.4s;
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
        transition: transform 0.2s ease,
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
