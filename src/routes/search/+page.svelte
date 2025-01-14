<script lang="ts">
    import {searchResult} from "../../stores/searchResult.svelte";
    import {goto} from "$app/navigation";

    let search = ''

    function onSearch(): void {
        console.log(search)
        searchResult.items = [
            {id: '1', title: 'test', description: 'lenni!'},
            {id: '2', title: 'test2', description: 'lenni!2'},
        ]
        goto('/select/');
    }

</script>

<input type="search" bind:value={search}/>
<button on:click={onSearch}>ZOOL</button>
