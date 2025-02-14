import {describe, it, expect} from 'vitest';
import {normalizeRelayUrl, type TrustedEvent} from '@welshman/util';
import {EventType, type SignerData, SignerType, Subscription, SynchronisedSession} from 'iz-nostrlib';
import {Nip35TorrentEvent} from 'iz-nostrlib/dist/org/nostr/nip35/Nip35TorrentEvent';
import {DynamicSynchronisedSession} from 'iz-nostrlib/dist/org/nostr/ses/DynamicSynchronisedSession';
import {DynamicSubscription} from 'iz-nostrlib/dist/org/nostr/ses/DynamicSubscription';
import {asyncCreateWelshmanSession} from 'iz-nostrlib/src/org/nostr/communities/Identity';
import {CommunityNostrContext} from 'iz-nostrlib/src/org/nostr/communities/CommunityNostrContext';
import {globalNostrContext} from '@src/stores/profile.svelte';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', async () => {
		expect(1 + 2).toBe(3);

		const url = 'wss://relay.stream.labs.h3.se';
		const relays = [normalizeRelayUrl(url)];

		const bobNSec = 'nsec1zsp48upz3vd64lwhx7me8utrxyfxuzdwvxhfld2q0ehs0ya9mlxs47v64q';
		const bobSignerData: SignerData = {type: SignerType.NIP01, nsec: bobNSec};

		const ws = await asyncCreateWelshmanSession(bobSignerData);
		//
		//
		//
		//
		// const c = new CommunityNostrContext(
		// 	globalNostrContext,
		// 	'iz-stream',
		// 	relays,
		// 	'https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg'
		// );
		//
		// const ci = new CommunityIdentity(c, ws);
		//
		// const session = new DynamicSynchronisedSession(c.relays);
		//
		// const sub = new DynamicSubscription(
		// 	session,
		// 	[
		// 		{
		// 			kinds: [Nip35TorrentEvent.KIND]
		// 			// authors: [page.params.pubkey]
		// 		}
		// 	]
		// );
		//
		// const events = [];
		//
		// session.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
		// 	if (event.kind === Nip35TorrentEvent.KIND) {
		// 		const te = Nip35TorrentEvent.buildFromEvent(event);
		//
		// 		if (te.event === undefined) throw Error(`Unknown event: ${event}`);
		//
		// 		events.push(te);
		// 	} else {
		// 		console.log('Unknown event ', event);
		// 	}
		// });
	});
});
