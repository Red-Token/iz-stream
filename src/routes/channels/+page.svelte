<script lang="ts">
    import {profiles} from "../../stores/profile.svelte.js";
</script>

{#each profiles.keys() as key}
    <div>
        {key}
        <h1>{profiles.get(key)?.name}</h1>
        {profiles.get(key)?.about}
        <img src={profiles.get(key)?.picture} alt=""/>
        <img src={profiles.get(key)?.banner} alt=""/>
    </div>
{/each}
