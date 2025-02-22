import {SvelteMap} from 'svelte/reactivity';
import {
	Nip01UserMetaDataEvent,
	NostrUserProfileMetaData,
	UserType,
	Nip65RelayListMetadataEvent,
	Nip02FollowListEvent,
	Followee
} from 'iz-nostrlib/nips';
import {GlobalNostrContext, Identifier, Identity} from 'iz-nostrlib/communities';
import {DynamicPublisher} from 'iz-nostrlib/ses';
import {normalizeRelayUrl} from '@welshman/util';
import {setContext} from '@welshman/lib';
import {getDefaultAppContext, getDefaultNetContext} from '@welshman/app';

// REBUILD THE WORLDS HERE
const url = 'wss://relay.lxc';
const relays = [normalizeRelayUrl(url)];

setContext({
	net: getDefaultNetContext(),
	app: getDefaultAppContext()
});

class GlobalRunes {
	profiles = $state(new SvelteMap<string, NostrProfile>());
	communities: SvelteMap<string, NostrProfile> = $derived.by(() => {
		const communityMap = new SvelteMap<string, NostrProfile>();
		this.profiles.forEach((profile, key) => {
			if (profile.nip01Event.type === UserType.COMMUNITY) communityMap.set(key, profile);
		});
		return communityMap;
	});
}

export const globalRunes = new GlobalRunes();

// export const profiles = $state(new SvelteMap<string, NostrProfile>());

export const defaultNip01 = new Nip01UserMetaDataEvent(new NostrUserProfileMetaData('Who am I', 'I dont know', ''));
export const defaultNip02 = new Nip02FollowListEvent([]);
export const defaultNip65 = new Nip65RelayListMetadataEvent(relays.map((relay) => [relay]));

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
		const profile = globalRunes.profiles.get(key) ?? new NostrProfile();
		profile.nip01Event = globalNostrContext.profileService.nip01Map.value.get(key) ?? defaultNip01;
		globalRunes.profiles.set(key, profile);
	}
});

globalNostrContext.profileService.nip02Map.addListener((keys) => {
	console.log('keys z', keys);
	for (let key of keys) {
		const profile = globalRunes.profiles.get(key) ?? new NostrProfile();
		profile.nip02Event = globalNostrContext.profileService.nip02Map.value.get(key) ?? defaultNip02;
		globalRunes.profiles.set(key, profile);
	}
});

globalNostrContext.profileService.nip65Map.addListener((keys) => {
	console.log('keys too:', keys);
	for (let key of keys) {
		const profile = globalRunes.profiles.get(key) ?? new NostrProfile();
		profile.nip65Event = globalNostrContext.profileService.nip65Map.value.get(key) ?? defaultNip65;
		globalRunes.profiles.set(key, profile);
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

		globalRunes.profiles.set(key, npr);
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
	profile = $derived(globalRunes.profiles.get(this.pubkey));
	communities = $derived.by(() => {
		console.log('Updating CL');
		const list = globalRunes.profiles.get(this.pubkey)?.nip02Event?.list ?? [];
		const fl = list.filter((f) => globalRunes.profiles.get(f.pubkey)?.nip01Event?.type === UserType.COMMUNITY);
		return fl
			.reduce((map, element) => map.set(element.pubkey, element), new Map<string, Followee>())
			.values()
			.toArray();
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
