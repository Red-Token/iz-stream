<script lang="ts">
	import {searchResult} from '@src/stores/searchResult.svelte';
	import SeriesComponent from '@src/components/Series.svelte';
	import MovieComponent from '@src/components/MovieComponent.svelte';
</script>

{#each searchResult.items as item}
	<!-- imdbId={item.imdbResult.imdbID} numberOfSeasons={} countSeasons={item.imdbResult.totalSeasons} -->
	{#if item.imdbResult.Type === 'series'}
		<SeriesComponent {item} />
	{:else}
		<MovieComponent {item}></MovieComponent>
	{/if}
{/each}
