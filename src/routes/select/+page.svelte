<script lang="ts">
    import {searchResult} from "../../stores/searchResult.svelte";
    import {goto} from "$app/navigation";

    function view(id: string): any {
        console.log(id);
        goto('/view/imdb/' + id);
    }
</script>

{#each searchResult.items as item}
    <h1>{item.title}</h1>
    {item.description}
    <button onclick={() => view(item.id)}>view</button>
{/each}
