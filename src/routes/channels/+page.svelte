<script lang="ts">
    import {me, profiles} from "../../stores/profile.svelte.js";
    import {goto} from "$app/navigation";

    function gotoPage(key: string) {
        goto(`/channels/${key}/torrents`);
    }
</script>

{#each profiles.keys() as key}
    <div>
        <h1>{profiles.get(key)?.name}</h1>
        <h2>{profiles.get(key)?.display_name}</h2>
        key: {key}
        <div>
            {profiles.get(key)?.about}
            <img src={profiles.get(key)?.picture} alt=""/>
            <img src={profiles.get(key)?.banner} alt=""/>
            <a href={profiles.get(key)?.website}>website</a>
            <button onclick={() => gotoPage(key)}>Show movies</button>
        </div>
    </div>
{/each}
