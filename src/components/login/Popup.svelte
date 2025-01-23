<script lang="ts">
	import { type SignerData, SignerType } from 'iz-nostrlib';
	import { getNip07 } from '@welshman/signer';
	import { QRCode } from '@red-token/iz-svelte-library';
	import LogInBunker from './test/LogInBunker.svelte';

	export let isOpen = false; // Prop to control visibility
	export let closePopup = () => {
	};
	export let logIn = (data: SignerData) => {
	};

	async function zil() {
		console.log('zil');

		// const aliceNSec = 'nsec18c4t7czha7g7p9cm05ve4gqx9cmp9w2x6c06y6l4m52jrry9xp7sl2su9x'
		// const aliceSignerData = { type: SignerType.NIP01, nsec: aliceNSec }

		const pubkey = await getNip07()?.getPublicKey()
		console.log('pubkey', pubkey)

		const aliceSignerData = { type: SignerType.NIP07, pubkey: pubkey };

		// {method: "nip07", pubkey}

		console.log(aliceSignerData);
		logIn(aliceSignerData);
		closePopup();
	}

</script>

{#if isOpen}
	<div class="popup-overlay" on:click={closePopup}>
		<div class="popup" on:click|stopPropagation>
			<h2>This is a Popup!</h2>
			<p>Click outside to close or press the button.</p>
			<button on:click={zil}>LogIn NIP07</button>
			<button on:click={closePopup}>Close</button>
			<LogInBunker></LogInBunker>
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
        background-color: rgba(50, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .popup {
        background: rgb(122, 122, 122);
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
		width: 60%;
    }

    button {
        padding: 10px 15px;
        border: none;
        background-color: #007BFF;
        color: rgb(69, 64, 143);
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
