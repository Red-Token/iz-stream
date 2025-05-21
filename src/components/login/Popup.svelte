<script lang="ts">
	import {SignerType} from 'iz-nostrlib';
	import {getNip07, type Nip07} from '@red-token/welshman/signer';
	import {onMount} from 'svelte';
	import {logIn} from '@src/stores/community.svelte';
	import {Button} from '$components/lib';

	let {isOpen = false, closePopup}: {isOpen: boolean; closePopup: Function} = $props();

	let nip07: Nip07 | undefined = undefined;

	onMount(() => {
		nip07 = getNip07();
	});

	async function nip07LogIn() {
		if (nip07 === undefined) throw Error('No plugin found');

		const pubkey = await nip07.getPublicKey();

		const signerData = {type: SignerType.NIP07, pubkey: pubkey};
		console.log(signerData.pubkey);
		logIn(signerData);
		closePopup();
	}
</script>

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="popup-overlay" onclick={() => closePopup()}>
		<div class="popup">
			{#if nip07 !== undefined}
				<Button className="popup-login" onClick={() => nip07LogIn()}>LogIn NIP07</Button>
			{/if}
			<Button className="popup-login" onClick={() => closePopup()}>Close</Button>
		</div>
	</div>
{/if}

<style>
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--overlay-background);
		backdrop-filter: blur(4px);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		animation: fadeIn 0.3s ease;
	}

	.popup {
		background: var(--bg-1);
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		box-shadow: 0 8px 24px var(--shadow-color);
		padding: 2rem;
		width: 100%;
		max-width: 400px;
		position: relative;
		animation: slideIn 0.3s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideIn {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@media (max-width: 640px) {
		.popup {
			margin: 1rem;
			padding: 1.5rem;
			max-width: calc(100% - 2rem);
		}
	}
</style>
