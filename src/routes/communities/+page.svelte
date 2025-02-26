<script lang="ts">
	import {globalNostrContext, me} from '@src/stores/profile.svelte';
	import {SignerType} from 'iz-nostrlib';
	import {DynamicPublisher} from 'iz-nostrlib/ses';
	import {asyncCreateWelshmanSession, Identifier, Identity} from 'iz-nostrlib/communities';
	import {Nip01UserMetaDataEvent, UserType, NostrUserProfileMetaData} from 'iz-nostrlib/nip01';
	import {Nip02FollowListEvent, Followee} from 'iz-nostrlib/nip02';
	import {Nip65RelayListMetadataEvent} from 'iz-nostrlib/nip65';
	import {generateSecretKey, getPublicKey} from 'nostr-tools/pure';
	import {nip19} from 'nostr-tools';
	import {normalizeURL} from 'nostr-tools/utils';
	import {globalRunes} from '@src/stores/profile.svelte';

	let cred = $state({nsec: ''});
	let pubkey = $derived.by(() => {
		if (!cred.nsec.startsWith('nsec')) return 'Incorrect credentials';

		return nip19.npubEncode(getPublicKey(<Uint8Array<ArrayBufferLike>>nip19.decode(cred.nsec).data));
	});

	let profile = $state({
		data: new NostrUserProfileMetaData('Big Fish', 'About me', 'fish.jpg'),
		relay: 'wss://relay.pre-alfa.iz-stream.com/'
	});

	function join(pubkey: string): void {
		console.log(pubkey);

		if (me.profile === undefined || me.publisher === undefined) return;

		const followees = me.profile.nip02Event.list
			.reduce((map: Map<string, Followee>, element) => map.set(element.pubkey, element), new Map<string, Followee>())
			.values()
			.toArray();

		followees.push(new Followee(pubkey));

		me.publisher.publish(new Nip02FollowListEvent(followees));
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

<div>
	Hello My Community
	{#each me.communities as community}
		{community}
		{globalRunes.profiles.get(community.pubkey)?.nip01Event.profile.name ?? 'Unnamed Community'}
	{/each}
</div>

Hello ALL Community
<div>
	{#each globalRunes.communities.values() as community}
		<div>
			${community.nip01Event.profile.name}
		</div>
		<button onclick={() => join(community.nip01Event.pubkey)}>JOIN</button>
	{/each}
</div>

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
