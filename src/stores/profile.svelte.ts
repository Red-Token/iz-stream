import {NostrProfileMetaData} from "$lib/org/nostr/nip01/NostrProfileMetaData";
import {SvelteMap} from "svelte/reactivity";
import {NostrClient, type SynchronisedSession} from "iz-nostrlib";

const unknown = new NostrProfileMetaData();

export let profileSession: SynchronisedSession | undefined = undefined;

export const profiles = $state(new SvelteMap<string, NostrProfileMetaData>());

class Me {
	pubkey: string = $state<string>('');
	profile = $derived(
		this.pubkey === '' ? undefined : profiles.has(this.pubkey) ? profiles.get(this.pubkey)! : unknown
	);
	profilesSession: SynchronisedSession | undefined = undefined;
}

export const me = new Me();
