<script lang="ts">
	let {imdbPoster, seasons, currentSeason = $bindable()} = $props();

	const select = (id: number) => {
		currentSeason = id;
		// console.log(id);
	};
</script>

<div class="seasons-list">
	{#each seasons as season, id}
		<div class="season-card" onclick={() => select(id)}>
			<div class="banner-container">
				{#if imdbPoster}
					<img src={imdbPoster} alt="" class="season-banner" />
				{:else}
					<div class="banner-placeholder"></div>
				{/if}
			</div>
			<div class="season-content">
				<h2 class="season-title">Season {season.id}</h2>
				{#if season.data.description}
					<p class="season-description">{season.data.description}</p>
				{/if}
				<!-- <button class="season-button"></button> -->
			</div>
		</div>
	{/each}
</div>

<style>
	.seasons-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
		padding: 2rem;
		max-width: 1440px;
		margin: 0 auto;
		z-index: 1;
		/* box-sizing: border-box; */
	}

	.season-card {
		min-width: 0;
		min-height: 0;
		background: #000000;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(124, 124, 124, 0.1);
		cursor: pointer;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
		overflow: hidden;
	}

	.season-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 15px var(--shadow-hover);
	}

	.banner-container {
		position: relative;
		width: 100%;
		height: 500px;
		background-color: #161616;
	}

	.season-banner {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
	}

	.banner-placeholder {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, #474747 0%, #1c1924 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #666;
	}

	.season-content {
		padding: 1.5rem;
	}

	.season-title {
		margin: 0 0 0.75rem 0;
		color: #f8f8f8d5;
		font-size: 1.5rem;
		font-weight: 600;
		text-align: center;
	}

	.season-description {
		margin: 0;
		color: #718096;
		font-size: 0.9rem;
		line-height: 1.5;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	@media (max-width: 768px) {
		.seasons-list {
			grid-template-columns: 1fr;
		}

		.banner-container {
			height: 200px;
		}
	}

	.season-card.selected {
		outline: 2px solid #4299e1;
		outline-offset: 2px;
	}
</style>
