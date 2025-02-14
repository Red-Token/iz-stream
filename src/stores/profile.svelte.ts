import {SvelteMap} from 'svelte/reactivity';
import {Nip01UserMetaDataEvent, UserType} from 'iz-nostrlib/src/org/nostr/nip01/Nip01UserMetaData';
import {Nip65RelayListMetadataEvent} from 'iz-nostrlib/src/org/nostr/nip65/Nip65RelayListMetadata';
import {GlobalNostrContext} from 'iz-nostrlib/src/org/nostr/communities/GlobalNostrContext';
import {normalizeRelayUrl} from '@welshman/util';
import {setContext} from '@welshman/lib';
import {getDefaultAppContext, getDefaultNetContext} from '@welshman/app';
import {NostrUserProfileMetaData} from 'iz-nostrlib/src/org/nostr/nip01/NostrUserProfileMetaData';
import {Nip02FollowListEvent} from 'iz-nostrlib';
import {DynamicPublisher} from 'iz-nostrlib/src/org/nostr/ses/DynamicPublisher';
import {Identifier, Identity} from 'iz-nostrlib/src/org/nostr/communities/Identity';

// REBUILD THE WORLDS HERE

const url = 'wss://relay.lxc';
const relays = [normalizeRelayUrl(url)];

setContext({
	net: getDefaultNetContext(),
	app: getDefaultAppContext()
});

export const profiles = $state(new SvelteMap<string, NostrProfile>());

const defaultNip01 = new Nip01UserMetaDataEvent(new NostrUserProfileMetaData('Who am I', 'I dont know', ''));
const defaultNip02 = new Nip02FollowListEvent([]);
const defaultNip65 = new Nip65RelayListMetadataEvent(relays.map((relay) => [relay]));

export class NostrProfile {
	constructor(
		public nip01Event: Nip01UserMetaDataEvent = defaultNip01,
		public nip02Event: Nip02FollowListEvent = defaultNip02,
		public nip65Event: Nip65RelayListMetadataEvent = defaultNip65
	) {}
}

export const globalNostrContext = new GlobalNostrContext(relays);

globalNostrContext.profileService.nip01Map.addListener((keys) => {
	console.log('keys', keys);

	for (let key of keys) {
		const profile = profiles.get(key) ?? new NostrProfile();
		profile.nip01Event = globalNostrContext.profileService.nip01Map.value.get(key) ?? defaultNip01;
		profiles.set(key, profile);
	}
});

globalNostrContext.profileService.nip02Map.addListener((keys) => {
	console.log('keys z', keys);
	for (let key of keys) {
		const profile = profiles.get(key) ?? new NostrProfile();
		profile.nip02Event = globalNostrContext.profileService.nip02Map.value.get(key) ?? defaultNip02;
		profiles.set(key, profile);
	}
});

globalNostrContext.profileService.nip65Map.addListener((keys) => {
	console.log('keys too:', keys);
	for (let key of keys) {
		const profile = profiles.get(key) ?? new NostrProfile();
		profile.nip65Event = globalNostrContext.profileService.nip65Map.value.get(key) ?? defaultNip65;
		profiles.set(key, profile);
	}
});

globalNostrContext.identities.addListener((keys) => {
	console.log('keys too2:', keys);

	for (const key of keys) {
		const npr = new NostrProfile(
			globalNostrContext.profileService.nip01Map.value.get(key) ?? defaultNip01,
			globalNostrContext.profileService.nip02Map.value.get(key) ?? defaultNip02,
			globalNostrContext.profileService.nip65Map.value.get(key) ?? defaultNip65
		);

		profiles.set(key, npr);
	}
});

// export function getOrCreateProfile(key: string) {
// 	let profile = profiles.get(key);
//
// 	if (profile === undefined) {
// 		profile = new NostrProfile();
// 		profiles.set(key, profile);
// 	}
//
// 	return profile;
// }

class Me {
	identifier = $state<Identifier>();
	identity: Identity | undefined = $derived(
		this.identifier !== undefined ? new Identity(globalNostrContext, this.identifier) : undefined
	);
	pubkey: string = $derived(this.identifier?.pubkey ?? '');
	profile = $derived(profiles.get(this.pubkey));
	communities = $derived.by(() => {
		console.log('Updating CL');
		const list = profiles.get(this.pubkey)?.nip02Event?.list ?? [];
		const fl = list.filter((f) => profiles.get(f.pubkey)?.nip01Event?.type === UserType.COMMUNITY);
		return fl;
	});
	publisher = $derived.by(() => {
		console.log('PUb TRIGGERED!');
		return this.identity != undefined
			? new DynamicPublisher(globalNostrContext.profileService, this.identity)
			: undefined;
	});
	// profilesSession: SynchronisedSession | undefined = undefined;
	// followees: Followee[] = $derived(profiles.get(this.pubkey)?.nip02Event.list ?? [])
	// listSession: SynchronisedSession | undefined = undefined;
	// listPublisher: Publisher | undefined = undefined;
	// notificationSession: SynchronisedSession | undefined = undefined;
	// notificationSubscription: Subscription | undefined;
}

export const me = new Me();
