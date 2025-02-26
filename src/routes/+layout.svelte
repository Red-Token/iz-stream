<script lang="ts">
	import '@src/style/app.css';
	import '@src/style/tailwind.css';
	import Communities from '@src/components/Communities.svelte';
	import {onMount} from 'svelte';
	import PrimaryNav from '@src/components/PrimaryNav.svelte';
	import {setContext} from '@welshman/lib';
	import {getDefaultAppContext, getDefaultNetContext} from '@welshman/app';
	import {normalizeRelayUrl} from '@welshman/util';
	import {Log} from '@src/services/Logger';
	import {NostrClient} from 'iz-nostrlib';

	const layout = Log.child({component: '+layout.svelte'});

	layout.info(import.meta.resolve('./org/nostr/ses/Subscription'));

	let {children} = $props();
	let isExpanded: boolean = $state(true);

	const nostrClient = new NostrClient();

	$effect(() => {
		document.documentElement.style.setProperty('--sidebar-width', isExpanded ? '80px' : '0px');
	});
	// let profileSession: SynchronisedSession

	onMount(() => {
		setContext({
			net: getDefaultNetContext(),
			app: getDefaultAppContext()
		});

		// // load the master relays
		// globalState.relays = [];

		// const url = 'wss://relay.stream.labs.h3.se';
		const url = 'wss://relay.pre-alfa.iz-stream.com/';
		const relays = [normalizeRelayUrl(url)];

		// const globalCommunity = new GlobalNostrContext(relays);
		//
		// globalCommunity.profileService.nip01Map.addListener((keys: string[]) => {
		// 	for(let key of keys) {
		// 		console.log('GESUND');
		// 		const profile = getOrCreateProfile(key);
		// 		profile.nip01Event = globalCommunity.profileService.nip01Map.value.get(key)
		// 	}
		// });
		//
		// globalCommunity.profileService.nip65Map.addListener((keys: string[]) => {
		// 	for(let key of keys) {
		// 		console.log('GESUND2');
		// 		const profile = getOrCreateProfile(key);
		// 		profile.nip65Event = globalCommunity.profileService.nip65Map.value.get(key)
		// 	}
		// });

		// const globalCommunity = new CommunityNostrContext('globalNostrCommunity', relays, '');

		// globalCommunity.notifications.on(NotificationEventType.PROFILE, (event) => {
		// 	if (event instanceof Nip01UserMetaDataEvent) {
		// 		if (event.event === undefined) throw new Error('event event is null');
		//
		// 		layout.info('profile', event.event.pubkey, event.profile);
		// 		profiles.set(event.event.pubkey, event.profile);
		//
		// 		return;
		// 	}
		//
		// 	throw new Error('Unknown event');
		// });

		// communities.forEach((community: CommunityNostrContext) => {
		// 	community.connect();
		//
		// 	// 		const url = 'wss://relay.stream.labs.h3.se';
		// 	// 		const relays = [normalizeRelayUrl(url)];
		//
		// 	community.notifications.on(NotificationEventType.TORRENT, (event) => {
		// 		layout.info('update torrent event', event);
		// 	});
		//
		// 	community.notifications.on(NotificationEventType.PROFILE, (event) => {
		// 		if (event instanceof Nip01UserMetaDataEvent) {
		// 			if (event.event === undefined) throw new Error('event event is null');
		//
		// 			layout.info('profile', event.event.pubkey, event.profile);
		// 			profiles.set(event.event.pubkey, event.profile);
		// 			return;
		// 		}
		//
		// 		throw new Error('Unknown event');
		// 	});
		// });
		//
		//
		// const url = 'wss://relay.stream.labs.h3.se';
		// const relays = [normalizeRelayUrl(url)];
		//
		// if (me.profilesSession === undefined) {
		//     NostrClient.getInstance()
		//         .createSession(relays)
		//         .then((session) => {
		//             me.profilesSession = session;
		//
		//             const sub = me.profilesSession.createSubscription([{kinds: [Nip01UserMetaDataEvent.KIND]}]);
		//
		//             me.profilesSession.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
		//                 if (event.kind === Nip01UserMetaDataEvent.KIND) {
		//                     const re = new Nip01UserMetaDataEventBuilder(event).build();
		//
		//                     console.log('Update profile');
		//
		//                     if (re.event === undefined) throw Error(`Unknown event: ${event}`);
		//
		//                     profiles.set(re.event.pubkey, re.profile);
		//                 } else {
		//                     console.log('Unknown event ', event);
		//                 }
		//             });
		//         });
		// }
	});
</script>

<main>
	<div class="left-sidebar {isExpanded ? 'expanded' : ''}">
		<Communities isExpanded />
		<button class="sidebar-toggle" onclick={() => (isExpanded = !isExpanded)}>
			{#if isExpanded}
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" />
				</svg>
			{:else}
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M9 18l6-6-6-6" stroke="currentColor" fill="none" />
				</svg>
			{/if}
		</button>
	</div>
	<div class="content-area">
		<PrimaryNav />
		<div class="main-content">
			{@render children()}
		</div>
	</div>
</main>

<style>
	main {
		min-height: 100vh;
	}

	.content-area {
		flex: 1;
		margin-left: calc(-1 * var(--sidebar-width));
		transition: margin-left 0.3s ease;
	}

	.sidebar-toggle {
		position: absolute;
		right: -40px;
		top: 20px;
		width: 32px;
		height: 32px;
		z-index: 1000;
		background: var(--bg-1);
		border: 2px solid var(--border-color);
		border-radius: 8px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(80, 80, 80, 0.1);
		transform: translateX(50%);
	}

	.sidebar-toggle:hover {
		background: var(--bg-2);
	}

	.left-sidebar {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: var(--sidebar-width);
		transform: translateX(calc(-1 * var(--sidebar-width)));
		transition: transform 0.3s ease;
	}

	.left-sidebar.expanded {
		width: 80px;
		transform: translateX(0);
	}

	.left-sidebar.expanded ~ .content-area {
		margin-left: var(--sidebar-width);
	}

	@media (max-width: 768px) {
		main {
			margin-left: 0 !important;
		}

		.sidebar-toggle {
			right: -36px;
			bottom: 16px;
			width: 28px;
			height: 28px;
		}
	}
</style>
