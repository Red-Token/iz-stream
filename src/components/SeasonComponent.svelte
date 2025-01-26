<script lang="ts">
	import {onMount} from 'svelte';
	import type {Episode} from '../stores/searchResult.svelte';
	import imdbApi from '$lib/api/ImdbApi';
	import EpisodeComponent from './EpisodeComponent.svelte';

	let {imdbId, seasonNumber} = $props();

	let episodes: Episode[] = $state([]);

	onMount(() => {
		imdbApi.getInfoOnSeason(imdbId, seasonNumber).then((res) => {
			for (let e of res.Episodes) {
				const episode = {data: e};
				episodes.push(episode);
			}
		});
	});
</script>

<div>
	Rendering season {imdbId}
	{seasonNumber}

	{#each episodes as episode}
		{episode.data.Episode}
		<EpisodeComponent {imdbId} {seasonNumber} episodeNumber={episode.data.Episode}></EpisodeComponent>
	{/each}
</div>
