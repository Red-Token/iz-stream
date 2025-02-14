<script lang="ts">
	import {globalNostrContext, me, profiles} from '@src/stores/profile.svelte';
	import {Nip01UserMetaDataEvent, UserType} from 'iz-nostrlib/src/org/nostr/nip01/Nip01UserMetaData';
	import {NostrUserProfileMetaData} from 'iz-nostrlib/src/org/nostr/nip01/NostrUserProfileMetaData';
	import {generateSecretKey, getPublicKey} from 'nostr-tools/pure';
	import {nip19} from 'nostr-tools';
	import {asyncCreateWelshmanSession, Identifier, Identity} from 'iz-nostrlib/src/org/nostr/communities/Identity';
	import {Nip02FollowListEvent, SignerType} from 'iz-nostrlib';
	import {DynamicPublisher} from 'iz-nostrlib/src/org/nostr/ses/DynamicPublisher';
	import {Nip65RelayListMetadataEvent} from 'iz-nostrlib/src/org/nostr/nip65/Nip65RelayListMetadata';

	let communities = $derived.by(() => {
			const fg = profiles.values();
			return fg.filter((profile) => {
				return profile.nip01Event.type === UserType.COMMUNITY;
			});
		}
	);

	import {normalizeURL} from 'nostr-tools/utils';
	import {Followee} from 'iz-nostrlib/dist/org/nostr/nip02/Nip02FollowListEvent';

	let cred = $state({nsec: ''});
	let pubkey = $derived.by(() => {
		if (!cred.nsec.startsWith('nsec'))
			return 'Incorrect credentials';

		return nip19.npubEncode(getPublicKey(<Uint8Array<ArrayBufferLike>>nip19.decode(cred.nsec).data));
	});

	let profile = $state({
		data: new NostrUserProfileMetaData('Big Fish', 'About me', 'fish.jpg'),
		relay: 'wss://relay.lxc'
	});

	function join(pubkey: string): void {
		console.log(pubkey);

		if (me.profile === undefined || me.publisher === undefined) return;

		me.publisher.publish(
			new Nip02FollowListEvent([...me.profile.nip02Event.list, new Followee(pubkey)])
		);
	}

	function generate(): void {
		cred.nsec = nip19.nsecEncode(generateSecretKey());
	}

	function parseRelayText(relay: string): string[][] {
		return relay.split('\n').map((line: string) => [normalizeURL(line)]);
	}

	// nsec1f87t43zppv2ppl5k88laz894ucmqpu2wfftgg50chzwhqyzr6yfq7zdk8e

	function create(): void {
		console.log('create' + profile);
		console.log(profile.relay);

		asyncCreateWelshmanSession({type: SignerType.NIP01, nsec: cred.nsec}).then((wsession) => {
			const identifier = new Identifier(wsession);
			const identity = new Identity(globalNostrContext, identifier);

			const relays: string[][] = parseRelayText(profile.relay);
			const publisher = new DynamicPublisher(globalNostrContext.profileService, identity);

			publisher.publish(new Nip01UserMetaDataEvent(profile.data, UserType.COMMUNITY));
			publisher.publish(new Nip65RelayListMetadataEvent([[profile.relay]]));
		});
	}

</script>

Hello Community

{#each communities as community}
	<div>
		${community.nip01Event.profile.name}
	</div>
	<button onclick={() => join(community.nip01Event.pubkey)}>JOIN</button>
{/each}
<div>

	<div>
		<div>
			PUB: {pubkey}
		</div>
		<div>
			<input bind:value={cred.nsec}>
		</div>
		<div>
			<button onclick={() => generate()}>GENERATE</button>
		</div>
	</div>

	<div>
		<input bind:value={profile.data.name}>
	</div>
	<div>
		<input bind:value={profile.data.about}>
	</div>
	<div>
		<input bind:value={profile.data.picture}>
	</div>
	<div>
		<textarea bind:value={profile.relay}>TEST</textarea>
	</div>
	<div>
		<button onclick={create}>CREATE</button>
	</div>
</div>
