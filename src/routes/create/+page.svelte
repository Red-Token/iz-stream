<script lang="ts">
	import {NostrClient, Publisher} from 'iz-nostrlib';
	import {normalizeRelayUrl} from '@welshman/util';
	import {onMount} from 'svelte';
	import {Nip35TorrentEvent} from '$lib/org/nostr/nip35/Nip35TorrentEvent';

	let title = 'Big Buck Bunny';
	let imdbId = 'tt1254207';
	let infoHash = 'f0a7541549b94782eec5049e2fae7c9fad3210e9';

	const url = 'wss://relay.stream.labs.h3.se';
	const relays = [normalizeRelayUrl(url)];

	let session;
	let publisher: Publisher;

	onMount(async () => {
		session = await NostrClient.getInstance().createSession(relays);
		publisher = session.createPublisher();
	});

	async function onCreate() {
		// Send the message
		console.log(title);

		const te: Nip35TorrentEvent = new Nip35TorrentEvent(title, infoHash, 'Description', [], [], [imdbId], []);

		publisher.publish(Nip35TorrentEvent.KIND, te.createTemplate());
	}
</script>

<div class="create-container">
	<div class="form-card">
		<div class="input-group">
			<input type="text" bind:value={title} placeholder="Movie title" class="form-input" />
			<input type="text" bind:value={imdbId} placeholder="IMDB ID" class="form-input" />
			<input type="text" bind:value={infoHash} placeholder="Info Hash" class="form-input" />
		</div>

		<button class="submit-btn" onclick={() => onCreate().then()}>
			ZOOL
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
		color: var(--text-primary);
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
		transition:
			transform 0.2s ease,
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
