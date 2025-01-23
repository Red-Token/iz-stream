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
		<div class="nav-content">
			<div class="nav-links">
				<a href="/search" aria-current={page.url.pathname === '/search'}>Search</a>
				<a href="/create" aria-current={page.url.pathname === '/create'}>Create</a>
				<a href="/channels" aria-current={page.url.pathname === '/channels'}>Channels</a>
			</div>
			<LogInComponent></LogInComponent>
			<!-- class="login-btn" -->
		</div>
	</nav>
</main>
{@render children()}
<style>
	main {
		position: relative;
		padding: 0 1rem;
	}

	nav {
		--nav-padding: 1.5rem;
		--border-radius: 12px;
		font-size: 20px;
		background: var(--bg-1);
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		box-shadow: 0 4px 12px var(--shadow-color);
		backdrop-filter: blur(8px);
		margin: 1rem auto;
		max-width: 1200px;
		transition: all 0.3s ease;
	}

	.nav-content {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 var(--nav-padding);
		height: 55px;
		gap: 2rem;
		margin: 0 auto;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	nav a {
		
		position: relative;
		padding: 0.5rem 0;	
		color: var(--text-color);
		text-decoration: none;
		font-weight: 500;
		transition: all 0.3s ease;
		border-left: none !important;
	}

	nav a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--accent-color);
		transition: width 0.3s ease;
	}

	nav a[aria-current="true"] {
		color: var(--accent-color);
	}

	nav a[aria-current="true"]::after,
	nav a:hover::after {
		width: 100%;
	}

	.login-btn {
		margin-left: auto;
	}

	@media (max-width: 768px) {
		.nav-content {
			height: 56px;
			padding: 0 1rem;
			gap: 1.5rem;
		}

		.nav-links {
			gap: 1.5rem;
		}

		nav a {
			font-size: 0.95rem;
		}
	}

	@media (max-width: 640px) {
		nav {
			border-radius: var(--border-radius) var(--border-radius) 0 0;
			margin: 0 auto;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
			max-width: 100%;
			gap: 1.2rem;
			border: none;
			box-shadow: 0 -2px 12px var(--shadow-color);
		}

		.nav-content {
			justify-content: center;
			height: 56px;
		}

		.nav-links {
			gap: 1.2rem;
		}

		.login-btn {
			display: none;
		}

		nav a {
			font-size: 0.9rem;
			padding: 0.3rem 0;
		}

		nav a::after {
			height: 1.2px;
		}
	}
</style>
