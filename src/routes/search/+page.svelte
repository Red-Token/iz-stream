<script lang="ts">
    import {searchResult} from "../../stores/searchResult.svelte";
    import {goto} from "$app/navigation";
    import imdbApi from "$lib/api/ImdbApi";

    let search = 'Game of Thrones'
    
    function onSearch(): void {

        imdbApi.searchTitle(search).then((result) => {
            console.log(result)
            searchResult.items = [
                {id: '1', title: result.Title, description: result.Plot, assets: [], seasons: [], imdbResult: result},
            ]
            goto('/select/');
        })

    }

</script>

<input type="search" bind:value={search}/>
<button on:click={onSearch}>ZOOL</button>
