<script lang="ts">
    import {onMount} from "svelte";
    import imdbApi from "$lib/api/ImdbApi";
    import type {Episode} from "../stores/searchResult.svelte";
    import {goto} from "$app/navigation";

    let {imdbId} = $props();

    let episode: Episode = $state({data: {}});

    onMount(() => {
        // imdbApi.getInfoOnEpisode(imdbId, seasonNumber, episodeNumber).then((result) => {
        //     episode.data = result;
        // })
    })

    function view(id: string): any {
        console.log(id);
        goto('/view/imdb/' + id);
    }

</script>

<div>
    Rendering Movie {imdbId.imdbID}
    {imdbId.Title}
    <img src={imdbId.Poster} alt="">
    <button onclick={() => view(imdbId.imdbID)}>view</button>
</div>
