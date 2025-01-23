<script lang="ts">
	import {page, navigating} from '$app/state';
	import '@src/style/app.css';
	console.log(import.meta.resolve('./org/nostr/ses/Subscription'));

	import LogInComponent from '../components/login/LogInComponent.svelte';
	import {EventType, NostrClient, type SynchronisedSession} from 'iz-nostrlib';
	import {onMount} from 'svelte';
	import {normalizeRelayUrl, type TrustedEvent} from '@welshman/util';
	import {Nip01UserMetaDataEvent, Nip01UserMetaDataEventBuilder} from '$lib/org/nostr/nip01/Nip01UserMetaData';
	import {me, profiles, profileSession} from '../stores/profile.svelte';

	let {children} = $props();

	// let profileSession: SynchronisedSession

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

<main>
	<nav>
		<a href="/search" aria-current={page.url.pathname === '/search'}> Search </a>
		<a href="/create" aria-current={page.url.pathname === '/create'}> Create </a>
		<a href="/channels" aria-current={page.url.pathname === '/channels'}> Channels </a>
		<LogInComponent></LogInComponent>
	</nav>
</main>

{@render children()}

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 1em;
		max-width: 100%;
		margin: 0 auto;
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		font-size: 18px;
		text-align: center;
		margin-top: 2rem;
		padding: 1rem 0;
	}

	nav a {
		display: inline-block;
		padding: 0 1rem;
		border-left: 1px solid var(--color-border);
		text-align: center;
	}

	nav a:first-of-type {
		border: 0;
	}
</style>
