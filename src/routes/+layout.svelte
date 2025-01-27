<script lang="ts">
	// <<<<<<< HEAD
	import {page} from '$app/state';
	import '@src/style/app.css';
	import '@src/style/tailwind.css';
	import LogInComponent from '../components/login/LogInComponent.svelte';
	import Communities from '@src/components/Communities.svelte';
	import {onMount} from 'svelte';
	import {communities} from '@src/stores/community.svelte';
	import {type Community, NotificationEventType} from 'iz-nostrlib/dist/org/nostr/communities/Community';
	import {Nip01UserMetaDataEvent} from 'iz-nostrlib/dist/org/nostr/nip01/Nip01UserMetaData';
	import {profiles} from '@src/stores/profile.svelte';
	import PrimaryNav from '@src/components/PrimaryNav.svelte';

	console.log(import.meta.resolve('./org/nostr/ses/Subscription'));

	let {children} = $props();
	let isSidebarExpanded: boolean = $state(true);

	// let profileSession: SynchronisedSession

	onMount(() => {
		communities.forEach((community: Community) => {
			community.connect();

			// 		const url = 'wss://relay.stream.labs.h3.se';
			// 		const relays = [normalizeRelayUrl(url)];

			community.notifications.on(NotificationEventType.TORRENT, (event) => {
				console.log('updating', event);
			});

			community.notifications.on(NotificationEventType.PROFILE, (event) => {
				if (event instanceof Nip01UserMetaDataEvent) {
					if (event.event === undefined) throw new Error('event event is null');

					console.log('profile', event.event.pubkey, event.profile);
					profiles.set(event.event.pubkey, event.profile);
					return;
				}

				throw new Error('Unknown event');
			});
		});

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
	<Communities />
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
		width: calc(100% - var(--sidebar-width));
		transition: width 0.3s ease;
	}

	.content-area {
		max-width: 1400px;
		margin: 0 auto;
		transition: transform 0.3s ease;
		transform: translateX(var(--sidebar-width));
	}

	@media (max-width: 768px) {
		main {
			margin-left: 0 !important;
		}
	}
</style>
