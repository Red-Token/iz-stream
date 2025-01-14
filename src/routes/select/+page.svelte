<script lang="ts">
  import { type Episode, searchResult, Season } from "../../stores/searchResult.svelte";
  import { goto } from "$app/navigation";
  import imdbApi from "$lib/api/ImdbApi";

  for (const item of searchResult.items) {
    if (item.imdbResult.Type === "series") {
      for (let i = 0; i < item.imdbResult.totalSeasons; i++) {
        const season: Season = $state({
          id: i,
          data: {},
          episodes: [],
        });

        item.seasons.push(season);

        imdbApi.getInfoOnSeason(item.imdbResult.imdbID, i).then((res) => {
          for (let e of res.Episodes) {
            console.log(e);
            const episode: Episode = $state({ data: e });
            season.episodes.push(episode);

            imdbApi.getInfoOnEpisode(item.imdbResult.imdbID, i, e.Episode).then((res2) => {
              console.log(res2);
              episode.data = res2;
            });
          }
        });
      }
    }
  }

  function view(id: string): any {
    console.log(id);
    goto("/view/imdb/" + id);
  }
</script>

{#each searchResult.items as item}
  {#if item.imdbResult.Type === "series"}
    {#each item.seasons as season}
      {season.data?.Title}
      {item.imdbResult.imdbID}
      {item.imdbResult.totalSeasons}
      Z
      {#each season.episodes as episode}
        {episode.data?.Title}
        <img src={episode.data.Poster} alt="" />
      {/each}
    {/each}
  {:else}
    <h1>{item.title}</h1>
    {item.description}
    <button onclick={() => view(item.id)}>view</button>
  {/if}
{/each}
