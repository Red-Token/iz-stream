<script lang="ts">
	import Popup from './Popup.svelte';
	import { NostrClient, type SignerData } from 'iz-nostrlib';
	import { setContext } from '@welshman/lib';
	import { getDefaultAppContext, getDefaultNetContext } from '@welshman/app';
	import { me } from '../../stores/profile.svelte';

	let isPopupOpen = $state(false); // Track the popup visibility

	const client = NostrClient.getInstance();

	setContext({
		net: getDefaultNetContext(),
		app: getDefaultAppContext()
	});

	function openPopup() {
		isPopupOpen = true;
	}

	function closePopup() {
		isPopupOpen = false;
	}

	function logIn(data: SignerData) {
		client.logIn(data).then(() => {
				me.pubkey = client.publicKey !== undefined ? client.publicKey : '';
			}
		);
	}

	function logOut() {
		NostrClient.getInstance().logOut();
		me.pubkey = client.publicKey !== undefined ? client.publicKey : '';
	}

</script>

{#if me.pubkey !== ''}
	<h1>Welcome to Svelte Popup Example, { me.profile?.name}!</h1>
	<button onclick={logOut}>LogOut</button>
{:else }
	<button onclick={openPopup}>LogIn</button>
{/if}

<!-- Pass props to control visibility and close action -->
<Popup isOpen={isPopupOpen} closePopup={closePopup} logIn={logIn} />
