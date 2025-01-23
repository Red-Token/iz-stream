<script lang="ts">
    import {page} from "$app/state";

    import {onMount} from "svelte";
    import {EventType, NostrClient, type SynchronisedSession} from "iz-nostrlib";
    import {normalizeRelayUrl, type TrustedEvent} from "@welshman/util";
    import {Nip35TorrentEvent, Nip35TorrentEventBuilder} from "$lib/org/nostr/nip35/Nip35TorrentEvent";
    import {goto} from "$app/navigation";
    import {me, profiles} from "../../../../stores/profile.svelte";
    import {NostrProfileMetaData} from "$lib/org/nostr/nip01/NostrProfileMetaData";
    import {Follow, Nip02FollowListEvent} from "$lib/org/nostr/nip02/Nip02FollowListEvent";

    let session: SynchronisedSession

    let events: Nip35TorrentEvent[] = $state([])

    // TODO mage a get or default
    let channelOwner: NostrProfileMetaData = $derived.by(() => {
        const profile = profiles.get(page.params.pubkey)
        return (profile !== undefined) ? profile : new NostrProfileMetaData()
    })

    onMount(async () => {
        const url = 'wss://relay.stream.labs.h3.se'
        const relays = [normalizeRelayUrl(url)]

        NostrClient.getInstance().createSession(relays).then((session) => {
            session;

            const sub = session.createSubscription([
                {kinds: [Nip35TorrentEvent.KIND], authors: [page.params.pubkey]}
            ])

            session.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
                if (event.kind === Nip35TorrentEvent.KIND) {
                    const te = new Nip35TorrentEventBuilder(event).build()

                    console.log("Found Torrent event", te)

                    if (te.event === undefined)
                        throw Error(`Unknown event: ${event}`);

                    events.push(te)

                } else {
                    console.log("Unknown event ", event)
                }
            })
        })
    })

    function view(event: Nip35TorrentEvent) {
        console.log("view", event)
        goto(`/view/infoHash/${event.x}`);
    }

    function follow() {
        if (me.followList.find(follow => (follow.pubkey === page.params.pubkey)) !== undefined)
            return;

        const msg = new Nip02FollowListEvent([...me.followList, new Follow(page.params.pubkey)])

        me.listPublisher?.publish(Nip02FollowListEvent.KIND, msg.createTemplate())
    }

</script>
<div>
    {page.params.pubkey}

    {channelOwner.name}
    <img src={channelOwner.picture} alt="pic"/>
    <img src={channelOwner.banner} alt="banner"/>

    <button onclick={follow}>Follow</button>

    {#each events as event}
        <h1>{event.title}</h1>
        {event.x}
        <button onclick={() => view(event)}>VIEW</button>
    {/each}

</div>
