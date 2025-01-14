<script lang="ts">
    import {onMount} from "svelte";
    import imdbApi from "$lib/api/ImdbApi";
    import type {Episode} from "../stores/searchResult.svelte";

    let {imdbId, seasonNumber, episodeNumber} = $props();

    let episode: Episode = $state({data: {}});

    onMount(() => {
        imdbApi.getInfoOnEpisode(imdbId, seasonNumber, episodeNumber).then((result) => {
            episode.data = result;
        })
    })

</script>

<div>
    Rendering episode {imdbId} {seasonNumber} {episodeNumber}

    {episode.data}
    <img src="{episode.data.Poster}" alt="">

</div>
