<script lang="ts">

    import {EventType, NostrClient, type SynchronisedSession} from "iz-nostrlib";
    import {Nip01UserMetaDataEvent, Nip01UserMetaDataEventBuilder} from "$lib/org/nostr/nip01/Nip01UserMetaData";
    import {normalizeRelayUrl, type TrustedEvent} from "@welshman/util";
    import {profiles} from "../stores/profile.svelte";
    import {onMount} from "svelte";


</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
