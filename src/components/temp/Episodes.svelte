<script lang="ts">
	import {onMount} from 'svelte';
	import imdbApi from '$lib/api/ImdbApi';
	import type {Episode} from '@src/stores/searchResult.svelte';
	import {goto} from '$app/navigation';

	let {episodes}: {episodes: Episode[]} = $props();
	let currentEpisode: Episode = $state(episodes[0]);

	// onMount(() => {
	// 	imdbApi
	// 		.getInfoOnEpisode(currentEpisode.imdbId, currentEpisode.seasonNumber, currentEpisode.episodeNumber)
	// 		.then((result) => {
	// 			episode.data = result;
	// 		});
	// });
	const selectEpisode = (selected: number) => {
		currentEpisode = episodes[selected];
		console.log(selected);
	};
	function view(id: string): any {
		console.log(id);
		goto('/view/imdb/' + id);
	}
</script>

{#key currentEpisode}
	<div class="episode-page">
		<div class="episode-content">
			{#if currentEpisode}
				<img src={currentEpisode.data.Poster} alt={currentEpisode.data.Title} />
				<h1>{currentEpisode.data.Title}</h1>
				<p>{currentEpisode.data.description}</p>
			{:else}
				<p>Turn on the episode to watch</p>
			{/if}
		</div>

		<div class="episodes-sidebar">
			<h2>All episodes</h2>
			<div class="episodes-list">
				{#each episodes as episode}
					<div class="episode-item" onclick={() => selectEpisode(episode.data.Episode)}>
						<img src={episode.data.Poster} alt={episode.data.Title} />
						<div>
							<p class="episode-title">{episode.data.Title}</p>
							{#if episode.data.Runtime}
								<p class="episode-duration">{episode.data.Runtime}</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/key}

<style>
	.episode-page {
		display: flex;
		gap: 2rem;
		max-width: 1400px;
		margin: 0 auto;
		padding: 2rem;
		height: 100vh;
	}

	.episode-content {
		flex: 3;
		min-width: 0;
		background: var(--bg-1);
		border-radius: 16px;
		padding: 2rem;
		box-shadow: 0 4px 12px var(--shadow-color);
		overflow-y: auto;
	}

	.episode-content h1 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--fg-1);
	}

	.episode-content img {
		width: 100%;
		max-height: 500px;
		object-fit: cover;
		border-radius: 12px;
		margin-bottom: 1.5rem;
	}

	.episode-content p {
		line-height: 1.6;
		color: var(--text-primary);
		font-size: 1.1rem;
	}

	.episodes-sidebar {
		flex: 1;
		max-width: 350px;
		background: var(--bg-1);
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 12px var(--shadow-color);
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: var(--scroll-thumb) var(--scroll-track);
	}

	.episodes-sidebar::-webkit-scrollbar {
		width: 8px;
	}

	.episodes-sidebar::-webkit-scrollbar-track {
		background: var(--scroll-track);
		border-radius: 4px;
	}

	.episodes-sidebar::-webkit-scrollbar-thumb {
		background: var(--scroll-thumb);
		border-radius: 4px;
		border: 2px solid transparent;
		background-clip: content-box;
	}

	.episodes-sidebar::-webkit-scrollbar-thumb:hover {
		background: var(--scroll-thumb-hover);
	}
	.episodes-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.episode-item {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.2s ease;
		background: var(--bg-2);
	}

	.episode-item:hover {
		background: var(--bg-3);
	}

	.episode-item img {
		width: 80px;
		height: 60px;
		object-fit: cover;
		border-radius: 6px;
		flex-shrink: 0;
	}

	.episode-title {
		margin: 0;
		font-weight: 500;
		color: var(--fg-1);
		font-size: 0.95rem;
	}

	.episode-duration {
		margin: 0.3rem 0 0;
		font-size: 0.85rem;
		color: var(--text-secondary);
	}

	@media (max-width: 768px) {
		.episode-page {
			flex-direction: column;
			height: auto;
			padding: 1rem;
		}

		.episode-content,
		.episodes-sidebar {
			max-width: 100%;
			width: 100%;
		}

		.episode-content {
			order: 2;
		}

		.episodes-sidebar {
			order: 1;
			max-height: 400px;
		}
	}
</style>
