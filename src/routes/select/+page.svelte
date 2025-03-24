<script lang="ts">
	import {searchResult} from '@src/stores/searchResult.svelte';
	import {Series, MovieComponent} from '$components';
</script>

{#each searchResult.items as item}
	<!-- imdbId={item.imdbResult.imdbID} numberOfSeasons={} countSeasons={item.imdbResult.totalSeasons} -->
	{#if item.imdbResult.Type === 'series'}
		<Series {item} />
	{:else}
		<MovieComponent {item}></MovieComponent>
	{/if}
{/each}
