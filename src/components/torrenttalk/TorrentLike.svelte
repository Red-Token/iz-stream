<script lang="ts">
    import {onMount} from "svelte";
    import {normalizeRelayUrl, type TrustedEvent} from "@welshman/util";
    import {EventType, NostrClient, type Publisher, Subscription, SynchronisedSession} from "iz-nostrlib";
    import {Nip25ReactionsEvent, Nip25ReactionsEventBuilder} from "$lib/org/nostr/nip35/Nip25Reactions";
    import {createRefETags} from "$lib/org/nostr/nip35/Nip35TorrentEvent";
    import {s} from "../../stores/assetStore.svelte";

    let session: SynchronisedSession
    let sub: Subscription
    let publisher: Publisher

    let reactions: Map<string, Nip25ReactionsEvent> = $state(new Map<string, Nip25ReactionsEvent>())

    let rand = $derived.by(() => {
        console.log(reactions.size)
        return reactions.values().filter(reaction => reaction.description === '+').toArray().length
    })


    onMount(async () => {
        const url = 'wss://relay.stream.labs.h3.se'
        const relays = [normalizeRelayUrl(url)]

        session = await NostrClient.getInstance().createSession(relays)

        sub = session.createSubscription([
            {kinds: [Nip25ReactionsEvent.KIND], '#e': s?.playing?.event?.id}
        ])

        session.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
            if (event.kind === Nip25ReactionsEvent.KIND) {
                const re = new Nip25ReactionsEventBuilder(event).build()

                if (re.event === undefined)
                    throw new Error("How did this happen")

                reactions.set(re.event.pubkey, re)
            } else {
                console.log("Unknown event ", event)
            }
        })

        publisher = session.createPublisher()
    })

    function like() {
        if (s.playing === undefined || s.playing.event === undefined)
            throw new Error("Playing is undefined2")

        const nip25ReactionsEvent = new Nip25ReactionsEvent('+', createRefETags(s.playing.event))
        publisher.publish(Nip25ReactionsEvent.KIND, nip25ReactionsEvent.createTemplate())
    }

    function count() {
        console.log("count()")
        console.log(reactions.size)
    }
</script>
<div>
    zil: {rand}
    <button onclick={like}>LIKE</button>
    <button onclick={count}>WINGA</button>
</div>
