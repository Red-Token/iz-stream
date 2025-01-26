<script lang="ts">
	import {onMount} from 'svelte';
	import imdbApi from '$lib/api/ImdbApi';
	import type {Episode} from '../stores/searchResult.svelte';
	import {goto} from '$app/navigation';

	let {imdbId, seasonNumber, episodeNumber} = $props();

	let episode: Episode = $state({data: {}});

	onMount(() => {
		imdbApi.getInfoOnEpisode(imdbId, seasonNumber, episodeNumber).then((result) => {
			episode.data = result;
		});
	});

	function view(id: string): any {
		console.log(id);
		goto('/view/imdb/' + id);
	}
</script>

<div>
	Rendering episode {imdbId}
	{seasonNumber}
	{episodeNumber}
	{episode.data}
	<img src={episode.data.Poster} alt="" />
	<button onclick={() => view(episode.data.imdbID)}>view</button>
</div>
