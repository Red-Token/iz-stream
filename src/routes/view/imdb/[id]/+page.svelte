<script lang="ts">
    import {page} from '$app/state';
    import SimplePeer from "simple-peer/simplepeer.min"
    import WebTorrent from 'webtorrent/dist/webtorrent.min'
    import {EventType, NostrClient} from "iz-nostrlib";
    import {normalizeRelayUrl, type TrustedEvent} from "@welshman/util";
    import {onMount} from "svelte";
    import {Nip35TorrentEvent, Nip35TorrentEventBuilder} from "$lib/org/nostr/nip35/Nip35TorrentEvent";
    // import WebTorrent from "webtorrent";

    const rtcConfig = {
        iceServers: [
            {
                urls: [
                    "turn:turn.stream.labs.h3.se",
                ],
                username: "test",
                credential: "testme",
            },
            {
                urls:
                    ["stun:stun.stream.labs.h3.se"],
                username: "test",
                credential: "testme",
            }],
        iceTransportPolicy: "all",
        iceCandidatePoolSize: 0,
    }

    const wt = new WebTorrent({
        tracker: {
            rtcConfig: {
                ...SimplePeer.config,
                ...rtcConfig
            }
        }
    });

    let options = {
        announce: ['wss://tracker.webtorrent.dev'],
        maxWebConns: 500,
    }

    navigator.serviceWorker.register('/sw.min.js', {scope: './'}).then(reg => {
        console.log("I am service worker!")

        const worker = reg.active || reg.waiting || reg.installing

        if (worker === null) throw new Error("Service worker not available!")

        function checkState(worker: ServiceWorker | null): boolean {
            console.log("Check state")
            return worker !== null && worker.state === 'activated' && wt.createServer({controller: reg}) !== null
        }

        if (!checkState(worker)) {
            worker.addEventListener('statechange', ({target}) => checkState(target as ServiceWorker | null))
        }
    })

    function download(event: Nip35TorrentEvent) {
        const torrent = wt.add(event.x, options);

        torrent.on('ready', () => {
            // Torrents can contain many files. Let's use the .mp4 file
            const file = torrent.files.find(file => file.name.endsWith('.mp4'))

            if (file === undefined)
                throw new Error("ALIENS")

            const player = document.querySelector('video')

            if(player === null)
                throw new Error("ALIENS2")

            // player.src = file.streamURL

            // file.renderTo(player)
            file.streamTo(player)

            console.log('Ready to play!')
        })

        torrent.on('warning', err => {
            console.log(err)
        });
        torrent.on('error', err => {
            console.log(err)
        });
        torrent.on('wire', wire => {
            console.log(wire)
            console.log("number of peers" + torrent.numPeers)
        });
        torrent.on('download', bytes => {
            console.log(bytes)
            console.log("received: " + torrent.received)
            console.log("downloaded: " + torrent.downloaded)
        });
        torrent.on('upload', bytes => {
            console.log(bytes)
            console.log("uploaded: " + torrent.uploaded)
        });
    }

    let session
    let assets: Nip35TorrentEvent[] = $state([])
    let playing: Nip35TorrentEvent | undefined = undefined

    onMount(async () => {
        const url = 'wss://relay.stream.labs.h3.se'
        const relays = [normalizeRelayUrl(url)]

        session = await NostrClient.getInstance().createSession(relays)

        session.createSubscription([
            // Here we subscribe to the membership kind
            { kinds: [Nip35TorrentEvent.KIND], '#i': 'tt1254207' }
        ])

        console.log("Subsription created")

        session.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
            const out = new Nip35TorrentEventBuilder(event).build()
            assets.push(out)

            if(playing === undefined) {
                download(out)
            }
        })
    })

</script>

<div>
    <video id="video-container" controls>
        <track kind="captions"/>
    </video>
</div>

VIEW THE WORLD {page.params.id}
