<script lang="ts">
    import {NostrClient, Publisher} from "iz-nostrlib";
    import {normalizeRelayUrl} from "@welshman/util";
    import {onMount} from "svelte";
    import {Nip35TorrentEvent} from "$lib/org/nostr/nip35/Nip35TorrentEvent";

    let title = 'Big Buck Bunny'
    let imdbId = 'tt1254207'
    let infoHash = 'f0a7541549b94782eec5049e2fae7c9fad3210e9'

    const url = 'wss://relay.stream.labs.h3.se'
    const relays = [normalizeRelayUrl(url)]

    let session
    let publisher: Publisher

    onMount(async () => {
        session = await NostrClient.getInstance().createSession(relays)
        publisher = session.createPublisher();
    })


    async function onCreate() {
        // Send the message
        console.log(title)

        const te: Nip35TorrentEvent = new Nip35TorrentEvent(
            title,
            infoHash,
            'Description',
            [],
            [],
            [imdbId],
            []
        )

        publisher.publish(Nip35TorrentEvent.KIND, te.createTemplate())
    }

</script>

<input type="text" bind:value={title}/>
<input type="text" bind:value={imdbId}/>
<input type="text" bind:value={infoHash}/>
<button on:click={() => {
    onCreate().then()
}}>ZOOL
</button>
