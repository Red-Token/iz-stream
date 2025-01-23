import {NostrProfileMetaData} from "$lib/org/nostr/nip01/NostrProfileMetaData";
import {SvelteMap} from "svelte/reactivity";
import {NostrClient, type Publisher, type Subscription, type SynchronisedSession} from "iz-nostrlib";
import type {Follow} from "$lib/org/nostr/nip02/Nip02FollowListEvent";

const unknown = new NostrProfileMetaData();

export let profileSession: SynchronisedSession | undefined = undefined;

export const profiles = $state(new SvelteMap<string, NostrProfileMetaData>());

class Me {
	pubkey: string = $state<string>('');
	profile = $derived(
		this.pubkey === '' ? undefined : profiles.has(this.pubkey) ? profiles.get(this.pubkey)! : unknown
	);
	profilesSession: SynchronisedSession | undefined = undefined;
	followList: Follow[] = $state([])
	listSession: SynchronisedSession | undefined = undefined;
	listPublisher: Publisher | undefined = undefined;
	notificationSession: SynchronisedSession | undefined = undefined;
	notificationSubscription: Subscription | undefined;
}

export const me = new Me();
