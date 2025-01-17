import {NostrProfileMetaData} from "$lib/NostrProfileMetaData";

const unknown = new NostrProfileMetaData();

export const profiles = $state(new Map<string, NostrProfileMetaData>());

class Me {
	pubkey: string = $state<string>('');
	profile = $derived(
		this.pubkey === '' ? undefined : profiles.has(this.pubkey) ? profiles.get(this.pubkey)! : unknown
	);
}

export const me = new Me();
