<script lang="ts">
	let {children} = $props();
	import '@src/style/app.css';
	import '@src/style/tailwind.css';
	console.log(import.meta.resolve('./org/nostr/ses/Subscription'));
	import PrimaryNav from '@src/components/PrimaryNav.svelte';
	import Communities from '@src/components/Communities.svelte';
	import {EventType, NostrClient, type SynchronisedSession} from 'iz-nostrlib';
	import {onMount} from 'svelte';
	import {normalizeRelayUrl, type TrustedEvent} from '@welshman/util';
	import {Nip01UserMetaDataEvent, Nip01UserMetaDataEventBuilder} from '$lib/org/nostr/nip01/Nip01UserMetaData';
	import {me, profiles, profileSession} from '../stores/profile.svelte';

	// let profileSession: SynchronisedSession
	let isSidebarExpanded: boolean = $state(true);
	onMount(() => {
		const url = 'wss://relay.stream.labs.h3.se';
		const relays = [normalizeRelayUrl(url)];

		if (me.profilesSession === undefined) {
			NostrClient.getInstance()
				.createSession(relays)
				.then((session) => {
					me.profilesSession = session;

					const sub = me.profilesSession.createSubscription([{kinds: [Nip01UserMetaDataEvent.KIND]}]);

					me.profilesSession.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
						if (event.kind === Nip01UserMetaDataEvent.KIND) {
							const re = new Nip01UserMetaDataEventBuilder(event).build();

							console.log('Update profile');

							if (re.event === undefined) throw Error(`Unknown event: ${event}`);

							profiles.set(re.event.pubkey, re.profile);
						} else {
							console.log('Unknown event ', event);
						}
					});
				});
		}
	});
</script>

<main style="margin-left: {isSidebarExpanded ? '80px' : '0'}">
	<Communities bind:isExpanded={isSidebarExpanded} />
	<div class="content-area">
		<PrimaryNav />
		<div class="main-content">
			{@render children()}
		</div>
	</div>
</main>

<style>
    main {
        transition: margin-left 0.3s ease;
        min-height: 100vh;
    }

    .content-area {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
    }

    @media (max-width: 768px) {
        main {
            margin-left: 0 !important;
        }
    }
</style>
