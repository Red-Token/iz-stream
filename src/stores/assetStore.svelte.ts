import type {Nip35TorrentEvent} from 'iz-nostrlib/nips';

export let s: {
	assets: Nip35TorrentEvent[];
	playing: Nip35TorrentEvent | undefined;
} = $state({
	assets: [],
	playing: undefined
});
