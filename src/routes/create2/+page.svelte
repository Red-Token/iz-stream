<script lang="ts">

	import {asyncCreateWelshmanSession, Identifier, Identity} from 'iz-nostrlib/communities';
	import {SignerType} from 'iz-nostrlib';
	import {globalNostrContext} from '@src/stores/profile.svelte';
	import {DynamicPublisher} from 'iz-nostrlib/ses';
	import {
		Nip01UserMetaDataEvent,
		Nip65RelayListMetadataEvent,
		NostrUserProfileMetaData,
		UserType
	} from 'iz-nostrlib/nips';
	import {defaultCommunityRelay} from '@src/config/config';
	import {nip19} from 'nostr-tools';
	import {generateSecretKey, getPublicKey} from 'nostr-tools/pure';
	import {normalizeURL} from 'nostr-tools/utils';

	let cred = $state({nsec: 'nsec16lc2cn2gzgf3vcv20lwkqquprqujpkq9pj0wcxmnw8scxh6j0yrqlc9ae0'});

	let profile = $state({
		data: new NostrUserProfileMetaData('Big Fish', 'About me', 'https://pre-alfa.iz-stream.com/users/big-fish.jpg'),
		relay: defaultCommunityRelay
	});

	let pubkey = $derived.by(() => {
		if (!cred.nsec.startsWith('nsec')) return 'Incorrect credentials';

		return nip19.npubEncode(getPublicKey(<Uint8Array<ArrayBufferLike>>nip19.decode(cred.nsec).data));
	});

	function generate(): void {
		cred.nsec = nip19.nsecEncode(generateSecretKey());
	}

	function parseRelayText(relay: string): string[][] {
		return relay.split('\n').map((line: string) => [normalizeURL(line)]);
	}

	function create(): void {
		console.log('create' + profile);
		console.log(profile.relay);

		asyncCreateWelshmanSession({type: SignerType.NIP01, nsec: cred.nsec}).then((wsession) => {
			const identifier = new Identifier(wsession);
			const identity = new Identity(globalNostrContext, identifier);

			const relays: string[][] = parseRelayText(profile.relay);
			const publisher = new DynamicPublisher(globalNostrContext.profileService, identity);

			// TODO FIX THIS FFS! Where are my capabilities
			publisher.publish(new Nip01UserMetaDataEvent(profile.data, UserType.COMMUNITY));
			publisher.publish(new Nip65RelayListMetadataEvent([[profile.relay]]));
		});
	}


</script>

<div>
	<div>
		<div>
			PUB: {pubkey}
		</div>
		<div>
			<input bind:value={cred.nsec} />
		</div>
		<div>
			<button onclick={() => generate()}>GENERATE</button>
		</div>
	</div>

	<div>
		<input bind:value={profile.data.name} />
	</div>
	<div>
		<input bind:value={profile.data.about} />
	</div>
	<div>
		<input bind:value={profile.data.picture} />
	</div>
	<div>
		<textarea bind:value={profile.relay}>TEST</textarea>
	</div>
	<div>
		<button onclick={create}>CREATE</button>
	</div>
</div>
