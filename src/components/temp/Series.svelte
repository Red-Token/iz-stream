<script lang="ts">
	import {onMount} from 'svelte';
	import Seasons from './Seasons.svelte';
	import Episodes from './Episodes.svelte';
	import {type Episode, type SearchResultItem, Season} from '@src/stores/searchResult.svelte';
	import {goto} from '$app/navigation';
	import imdbApi from '$lib/api/ImdbApi';

	let {item}: {item: SearchResultItem} = $props();
	let currentSeason: number | undefined = $state();
	const select = (season: number) => {
		currentSeason = season;
	};
	onMount(() => {
		for (let i = 0; i < item.imdbResult.totalSeasons; i++) {
			const season: Season = $state({
				id: i,
				data: {},
				episodes: []
			});
			item.seasons.push(season);

			imdbApi.getInfoOnSeason(item.imdbResult.imdbID, i).then((res) => {
				for (let e of res.Episodes) {
					console.log(e);
					const episode: Episode = $state({data: e});
					season.episodes.push(episode);
					imdbApi.getInfoOnEpisode(item.imdbResult.imdbID, i, e.Episode).then((res2) => {
						console.log(res2);
						episode.data = res2;
					});
				}
			});
		}
	});
</script>

<!-- {item.imdbResult.totalSeasons}  -->
{#if item.imdbResult.imdbID}
	{#if !currentSeason}
		<Seasons imdbPoster={item.imdbResult.Poster} seasons={item.seasons} bind:currentSeason></Seasons>
	{:else}
		{#key currentSeason}
			<!-- <Series imdbId={item.imdbResult.imdbID} numberOfSeasons={item.imdbResult.totalSeasons} /> -->
			<Episodes episodes={item.seasons[currentSeason].episodes}></Episodes>
		{/key}
	{/if}
{/if}

<!-- <h1>{item.title}</h1>
			{item.description}
			<button onclick={() => view(item.id)}>view</button> -->

<style>
</style>
