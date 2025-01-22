<script lang="ts">
    import {wt} from "../stores/wtZool.svelte";
    import {onMount} from "svelte";

    let {infoHash} = $props()

    onMount(() => {
        download(infoHash);
    })

    function download(infohash: string) {

        let options = {
            announce: ['wss://tracker.webtorrent.dev'],
            maxWebConns: 500,
        }

        const torrent = wt.add(infohash, options);

        torrent.on('ready', () => {
            // Torrents can contain many files. Let's use the .mp4 file
            const file = torrent.files.find(file => file.name.endsWith('.mp4'))

            if (file === undefined)
                throw new Error("ALIENS")

            const player = document.querySelector('video')

            if (player === null)
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
</script>

<div>
    <video id="video-container" controls>
        <track kind="captions" src=""/>
    </video>
</div>
