<script lang="ts">
    import {me} from "../../stores/profile.svelte";
    import {onMount} from "svelte";
    import {normalizeRelayUrl, type TrustedEvent} from "@welshman/util";
    import {EventType, NostrClient, type Publisher} from "iz-nostrlib";
    import {
        createRefETags,
        Nip35TorrentEvent,
        Nip35TorrentEventBuilder,
        Nip35TorrentEventComments, Nip35TorrentEventCommentsBuilder
    } from "$lib/org/nostr/nip35/Nip35TorrentEvent";
    import {Nip25ReactionsEvent} from "$lib/org/nostr/nip25/Nip25Reactions";

    let session
    let comments: Nip35TorrentEventComments[] = $state([])
    let publisher: Publisher

    let {rootEvent} = $props()

    onMount(async () => {
        const url = 'wss://relay.stream.labs.h3.se'
        const relays = [normalizeRelayUrl(url)]

        session = await NostrClient.getInstance().createSession(relays)

        session.createSubscription([
            // Here we subscribe to the membership kind
            // {kinds: [Nip35TorrentEventComments.KIND], '#i': 'tt1254207'},
            {kinds: [Nip35TorrentEvent.KIND], '#i': 'tt1254207'}
        ])

        console.log("Subsription created")

        session.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
            if (event.kind === Nip35TorrentEvent.KIND) {
            } else {
                const out: Nip35TorrentEventComments = new Nip35TorrentEventCommentsBuilder(event).build()
                comments.push(out)
            }
        })

        publisher = session.createPublisher()
    })



</script>

{#if me.pubkey !== ''}
    I can talk back!
    <button onclick={comment}>Like</button>
{/if}
