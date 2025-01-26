import {normalizeRelayUrl} from "@welshman/util";
import {asyncCreateWelshmanSession, Community} from "iz-nostrlib/dist/org/nostr/communities/Community";
import {NostrClient, type SignerData} from "iz-nostrlib";
import {me} from "@src/stores/profile.svelte";

const url = 'wss://relay.stream.labs.h3.se'
const relays = [normalizeRelayUrl(url)]

export const communities: Community[] = $state([
    new Community(
        'iz-stream',
        relays,
        'https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg'
    )])


export function logIn(data: SignerData) {
    asyncCreateWelshmanSession(data).then(async wsession => {
        me.pubkey = wsession.pubkey

        // We login to the static communities
        communities.forEach((community) => {
            const ci = community.createCommunityIdentity(wsession)
        })

        // We should load the private community links
    })
}

export function logOut() {
    me.pubkey = ''
}

