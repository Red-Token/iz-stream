<script lang="ts">
    import {searchResult} from "../../stores/searchResult.svelte";
    import {goto} from "$app/navigation";
    import SeriesComponent from "../../components/SeriesComponent.svelte";


    // for (const item of searchResult.items) {
    //     if (item.imdbResult.Type === 'series') {
    //         for (let i = 0; i < item.imdbResult.totalSeasons; i++) {
    //             const season: Season = {
    //                 data: {}, episodes: []
    //             }
    //
    //             item.seasons.push(season);
    //
    //             imdbApi.getInfoOnSeason(item.imdbResult.imdbID, i).then((res) => {
    //                 for (let e of res.Episodes) {
    //                     console.log(e);
    //                     const episode: Episode = {data: e}
    //                     season.episodes.push(episode);
    //
    //                     imdbApi.getInfoOnEpisode(item.imdbResult.imdbID, i, e.Episode).then((res2) => {
    //                         console.log(res2);
    //                         episode.data = res2;
    //                     })
    //                 }
    //             })
    //         }
    //     }
    // }

    function view(id: string): any {
        console.log(id);
        goto('/view/imdb/' + id);
    }

    // {#each item.seasons as season }
    // {season.data?.Title}
    // Z
    // {#each season.episodes as episode}
    // {episode.data?.Title}
    // <img src="{episode.data.Poster}" alt="">
    //     {/each}
    // {/each}

</script>

{#each searchResult.items as item}
    {#if item.imdbResult.Type === 'series'}
        {item.imdbResult.imdbID}
        {item.imdbResult.totalSeasons}
        S
        <SeriesComponent imdbId={item.imdbResult.imdbID} numberOfSeasons={item.imdbResult.totalSeasons}/>
    {:else }
        <h1>{item.title}</h1>
        {item.description}
        <button onclick={() => view(item.id)}>view</button>
    {/if}
{/each}
