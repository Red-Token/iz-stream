import {describe, expect, it} from 'vitest';
import {normalizeRelayUrl} from '@red-token/welshman/util';
import {type SignerData, SignerType} from 'iz-nostrlib';
import {asyncCreateWelshmanSession, Identifier, Identity} from 'iz-nostrlib/src/org/nostr/communities/Identity';
import {GlobalNostrContext} from 'iz-nostrlib/src/org/nostr/communities/GlobalNostrContext';
import {globalNostrContext} from '../src/stores/profile.svelte';
import {CommunityNostrContext} from 'iz-nostrlib/src/org/nostr/communities/CommunityNostrContext';
import {DynamicSynchronisedSession} from 'iz-nostrlib/src/org/nostr/ses/DynamicSynchronisedSession';
import {DynamicPublisher} from 'iz-nostrlib/src/org/nostr/ses/DynamicPublisher';
import {publish} from '@red-token/welshman/net';
import {Nip35TorrentEvent} from 'iz-nostrlib/dist/org/nostr/nip35/Nip35TorrentEvent';
import {getPublicKey} from 'nostr-tools/lib/types/pure';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', async () => {
		expect(1 + 2).toBe(3);

		const url = 'wss://relay.stream.labs.h3.se';
		const relays = [normalizeRelayUrl(url)];

		const bobNSec = 'nsec1zsp48upz3vd64lwhx7me8utrxyfxuzdwvxhfld2q0ehs0ya9mlxs47v64q';
		const bobSignerData: SignerData = {type: SignerType.NIP01, nsec: bobNSec};
		const ws = await asyncCreateWelshmanSession(bobSignerData);
		const bobIdentifier = new Identifier(ws);

		const gnc = GlobalNostrContext.instance;

		const bigFishNSec = 'nsec16lc2cn2gzgf3vcv20lwkqquprqujpkq9pj0wcxmnw8scxh6j0yrqlc9ae0';
		const bigFishPubKey = getPublicKey(bigFishNSec);

		const bfcc = new CommunityNostrContext(bigFishPubKey, gnc);
		const bfts = new DynamicSynchronisedSession(bfcc.relays);
		const bci = new Identity(bfcc, bobIdentifier);

		const bp = new DynamicPublisher(bfts, bci);
		bp.publish(new Nip35TorrentEvent('MyTitle', '12343455', 'MyDescription', [], [], ['imdbid:']));

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
