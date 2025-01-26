import type {Nip35TorrentEvent} from '$lib/org/nostr/nip35/Nip35TorrentEvent';

export let s: {
	assets: Nip35TorrentEvent[];
	playing: Nip35TorrentEvent | undefined;
} = $state({
	assets: [],
	playing: undefined
});
