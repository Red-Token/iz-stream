<script lang="ts">
	import {searchResult} from '../../stores/searchResult.svelte';
	//    import {goto} from "$app/navigation";
	import SeriesComponent from '../../components/SeriesComponent.svelte';
	import MovieComponent from '../../components/MovieComponent.svelte';
	// =======
	//   import { type Episode, searchResult, Season } from "../../stores/searchResult.svelte";
	//   import { goto } from "$app/navigation";
	//   import imdbApi from "$lib/api/ImdbApi";
	// >>>>>>> 058cbbcbd290b3b8b58c97107c6563c7f01290c4
	//
	//   for (const item of searchResult.items) {
	//     if (item.imdbResult.Type === "series") {
	//       for (let i = 0; i < item.imdbResult.totalSeasons; i++) {
	//         const season: Season = $state({
	//           id: i,
	//           data: {},
	//           episodes: [],
	//         });
	//
	//         item.seasons.push(season);
	//
	//         imdbApi.getInfoOnSeason(item.imdbResult.imdbID, i).then((res) => {
	//           for (let e of res.Episodes) {
	//             console.log(e);
	//             const episode: Episode = $state({ data: e });
	//             season.episodes.push(episode);
	//
	//             imdbApi.getInfoOnEpisode(item.imdbResult.imdbID, i, e.Episode).then((res2) => {
	//               console.log(res2);
	//               episode.data = res2;
	//             });
	//           }
	//         });
	//       }
	//     }
	//   }
	//
	//  function view(id: string): any {
	//    console.log(id);
	//    goto("/view/imdb/" + id);
	//  }
</script>

{#each searchResult.items as item}
	{#if item.imdbResult.Type === 'series'}
		{item.imdbResult.imdbID}
		{item.imdbResult.totalSeasons}
		<SeriesComponent {item} imdbId={item.imdbResult.imdbID} numberOfSeasons={item.imdbResult.totalSeasons} />
	{:else}
		<MovieComponent {item}></MovieComponent>
	{/if}
{/each}
