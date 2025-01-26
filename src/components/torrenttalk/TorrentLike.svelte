<script lang="ts">
    import {onMount} from "svelte";
    import {type TrustedEvent} from "@welshman/util";
    import {EventType, Publisher, Subscription, SynchronisedSession} from "iz-nostrlib";
    import {s} from "../../stores/assetStore.svelte";
    import {SvelteMap} from "svelte/reactivity";
    import {Nip25ReactionsEvent, Nip25ReactionsEventBuilder} from "iz-nostrlib/dist/org/nostr/nip25/Nip25Reactions";
    import {createRefETags} from "iz-nostrlib/dist/org/nostr/nip35/Nip35TorrentEvent";
    import {communities} from "@src/stores/community.svelte";

    let session: SynchronisedSession
    let sub: Subscription
    let publisher: Publisher
    let reactions: SvelteMap<string, Nip25ReactionsEvent> = $state(new SvelteMap<string, Nip25ReactionsEvent>())

    let rand = $derived.by(() => {
        return reactions.values().filter(reaction => reaction.description === '+').toArray().length
    })

    const publishers: Publisher[] = []

    onMount(async () => {
        communities.forEach((community) => {
            const session = new SynchronisedSession(community.relays);

            for (const relay of community.relays) {
                const sub = new Subscription(session, [{
                    kinds: [Nip25ReactionsEvent.KIND],
                    '#e': s?.playing?.event?.id
                }], [relay]);
            }

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

            for (const ci of community.identities.values()) {
                const p = new Publisher(session, ci)
                publishers.push(p)
            }
        })
    })

    function like() {
        if (s.playing === undefined || s.playing.event === undefined)
            throw new Error("Playing is undefined2")

        const nip25ReactionsEvent = new Nip25ReactionsEvent('+', createRefETags(s.playing.event))

        publishers.forEach((p: Publisher) => {
            p.publish(Nip25ReactionsEvent.KIND, nip25ReactionsEvent.createTemplate())
        })
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
