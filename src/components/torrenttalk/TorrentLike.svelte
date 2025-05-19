<script lang="ts">
	import {onMount} from 'svelte';
	import {Publisher, Subscription, SynchronisedSession} from 'iz-nostrlib';
	import {s} from '@src/stores/assetStore.svelte';
	import {SvelteMap} from 'svelte/reactivity';
	import {Nip25ReactionsEvent} from 'iz-nostrlib/nips';
	import {createRefETags} from 'iz-nostrlib/util';
	import {IconHeart} from '$components/Icons';
	// import {communities} from '@src/stores/community.svelte';

	let session: SynchronisedSession;
	let sub: Subscription;
	let publisher: Publisher;
	let reactions: SvelteMap<string, Nip25ReactionsEvent> = $state(new SvelteMap<string, Nip25ReactionsEvent>());

	let liked = $state(false);
	//TODO write this another way
	let iconFillColor = $derived(liked ? 'red' : 'none');
	let iconStrokeColor = $derived(liked ? 'red' : 'var(--icon-color, #333)');

	let rand = $derived.by(() => {
		return reactions
			.values()
			.filter((reaction) => reaction.description === '+')
			.toArray().length;
	});

	const publishers: Publisher[] = [];

	onMount(async () => {
		// communities.forEach((community) => {
		// const session = new SynchronisedSession(community.relays);
		//
		// for (const relay of community.relays) {
		// 	const sub = new Subscription(
		// 		session,
		// 		[
		// 			{
		// 				kinds: [Nip25ReactionsEvent.KIND],
		// 				'#e': s?.playing?.event?.id
		// 			}
		// 		],
		// 		[relay]
		// 	);
		// }
		//
		// session.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
		// 	if (event.kind === Nip25ReactionsEvent.KIND) {
		// 		const re = new Nip25ReactionsEventBuilder(event).build();
		//
		// 		if (re.event === undefined) throw new Error('How did this happen');
		//
		// 		reactions.set(re.event.pubkey, re);
		// 	} else {
		// 		console.log('Unknown event ', event);
		// 	}
		// });
		//
		// for (const ci of community.identities.values()) {
		// 	const p = new Publisher(session, ci);
		// 	publishers.push(p);
		// }
		// });
	});

	function like() {
		if (s.playing === undefined || s.playing.event === undefined) throw new Error('Playing is undefined2');

		const nip25ReactionsEvent = new Nip25ReactionsEvent('+', createRefETags(s.playing.event));
		liked = true; //TODO Need get status from nostr
		publishers.forEach((p: Publisher) => {
			p.publish(nip25ReactionsEvent.kind, nip25ReactionsEvent.opts);
		});
	}

	function count() {
		console.log('count()');
		console.log(reactions.size);
	}
</script>

<div class="torrent-like">
	<p class="zil-value">zil: {rand}</p>
	<div class="button-group">
		<button onclick={like} class="torrent-button like-button {liked ? 'liked' : ''}" aria-label="Like">
			<IconHeart className="icon-like" fillColor={iconFillColor} strokeColor={iconStrokeColor} />
		</button>
		<button onclick={count} class="torrent-button winga-button"> WINGA </button>
	</div>
</div>

<style>
	.torrent-like {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1.5rem;
	}

	.zil-value {
		font-size: 1.2rem;
		color: var(--fg-1);
		margin-bottom: 1rem;
	}

	.button-group {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.torrent-button {
		padding: 0.75rem 1.5rem;
		border: none;
		background: transparent;
		border-radius: 8px;
		cursor: pointer;
		flex: 1 1 auto;
		max-width: 150px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		position: relative;
	}

	.icon-like {
		width: 24px;
		height: 24px;
		/* fill: none; */ /* controlled by prop */
		/* stroke: var(--icon-color, #333); */ /* controlled by prop */
		stroke-width: 2px;
		transition: all 0.3s ease;
	}

	.like-button {
		width: 48px;
		height: 48px;
		padding: 0;
		background: transparent;
	}

	.like-button:active {
		transform: scale(1.25);
	}

	.like-button:hover .icon-like {
		/* stroke: red; */ /* Let hover be handled by direct prop change or parent style if necessary */
	}

	.like-button.liked {
		/* border-color: red; */ /* This style is for the button itself, not the icon */
	}

	/* .like-button.liked .icon-like { */
	/* fill: red; */ /* controlled by prop */
	/* stroke: red; */ /* controlled by prop */
	/* } */

	.winga-button {
		background: var(--warning-color);
		color: white;
		font-weight: 500;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
	}

	.winga-button:hover {
		background: var(--warning-hover);
	}

	@media (max-width: 480px) {
		.torrent-button {
			max-width: 100%;
		}
	}
</style>
