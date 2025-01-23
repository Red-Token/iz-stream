<script lang="ts">
	import {me, profiles} from '../../stores/profile.svelte.js';
	import {goto} from '$app/navigation';

	function gotoPage(key: string) {
		goto(`/channels/${key}/torrents`);
	}
</script>

<div class="profiles-container">
	{#each profiles.keys() as key, i}
		<article class="profile-card" style="animation-delay: {i * 0.1}s">
			<div class="banner-container">
				{#if profiles.get(key)?.banner}
					<img class="profile-banner" src={profiles.get(key)?.banner} alt="Banner" loading="lazy" />
				{:else}
					<div class="banner-placeholder"></div>
				{/if}

				{#if profiles.get(key)?.picture}
					<img class="profile-picture" src={profiles.get(key)?.picture} alt="Avatar" loading="lazy" />
				{:else}
					<div class="avatar-placeholder">
						{profiles.get(key)?.display_name?.charAt(0) || '?'}
					</div>
				{/if}
			</div>

			<div class="profile-content">
				<div class="profile-header">
					<h1 class="display-name">{profiles.get(key)?.display_name || 'Anonymous'}</h1>
					<h2 class="username">@{profiles.get(key)?.name || 'unknown'}</h2>
					<div class="profile-key" title={key}>
						Key: {key.slice(0, 8)}...{key.slice(-8)}
					</div>
				</div>

				{#if profiles.get(key)?.about}
					<p class="about">{profiles.get(key)?.about}</p>
				{/if}

				<div class="profile-actions">
					{#if profiles.get(key)?.website}
						<a href={profiles.get(key)?.website} class="website-link" target="_blank" rel="noopener noreferrer">
							<svg class="link-icon" viewBox="0 0 24 24">
								<path
									d="M11 17H7Q4.925 17 3.463 15.537T2 12Q2 9.925 3.463 8.462T7 7H11V9H7Q5.75 9 4.875 9.875T4 12Q4 13.25 4.875 14.125T7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17Q18.25 15 19.125 14.125T20 12Q20 10.75 19.125 9.875T17 9H13V7H17Q19.075 7 20.538 8.462T22 12Q22 14.075 20.538 15.537T17 17H13Z"
								/>
							</svg>
							Website
						</a>
					{/if}

					<button class="show-movies-btn" on:click={() => gotoPage(key)}>
						Show movies
						<svg class="arrow-icon" viewBox="0 0 24 24">
							<path d="M6.4 18 5 16.6 14.6 7H6V5h12v12h-2V8.4Z" />
						</svg>
					</button>
				</div>
			</div>
		</article>
	{/each}
</div>

<style>
	@keyframes cardAppear {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.profiles-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
		padding: 2rem;
		max-width: 1440px;
		margin: 0 auto;
		z-index: 1;
	}

	.profile-card {
		background: var(--bg-1);
		border-radius: 16px;
		border: 1px solid var(--border-color);
		box-shadow: 0 4px 12px var(--shadow-color);
		overflow: hidden;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		animation: cardAppear 0.6s ease both;
		position: relative;
		min-height: 400px;
	}

	.profile-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 20px var(--shadow-hover);
	}

	.banner-container {
		position: relative;
		height: 160px;
		background: var(--bg-2);
	}

	.profile-banner {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.9;
	}

	.banner-placeholder {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, var(--bg-2) 0%, var(--border-color) 100%);
	}

	.profile-picture {
		position: absolute;
		bottom: -48px;
		left: 24px;
		width: 96px;
		height: 96px;
		border-radius: 50%;
		border: 3px solid var(--bg-1);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		object-fit: cover;
		background: var(--bg-1);
	}

	.avatar-placeholder {
		position: absolute;
		bottom: -48px;
		left: 24px;
		width: 96px;
		height: 96px;
		border-radius: 50%;
		background: var(--accent-color);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.5rem;
		font-weight: bold;
		border: 3px solid var(--bg-1);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.profile-content {
		padding: 60px 24px 24px;
	}

	.profile-header {
		margin-bottom: 1.5rem;
	}

	.display-name {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 0.25rem;
		color: var(--text-primary);
	}

	.username {
		font-size: 1rem;
		font-weight: 400;
		margin: 0;
		color: var(--text-secondary);
	}

	.profile-key {
		font-size: 0.875rem;
		color: var(--text-tertiary);
		margin-top: 0.5rem;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.about {
		font-size: 0.95rem;
		line-height: 1.5;
		color: var(--text-primary);
		margin: 0 0 2.5rem;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin-bottom: 2.5rem !important;
	}

	.profile-actions {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		bottom: 1.5rem;
		left: 1.5rem;
		right: 1.5rem;
		gap: 1rem;
	}

	.website-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--accent-color);
		text-decoration: none;
		font-weight: 500;
		transition: opacity 0.3s ease;
	}

	.website-link:hover {
		opacity: 0.8;
	}

	.link-icon {
		width: 18px;
		height: 18px;
		fill: currentColor;
	}

	.show-movies-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: var(--accent-color);
		color: white;
		border: none;
		border-radius: 8px;
		font-weight: 500;
		cursor: pointer;
		margin-left: auto;
		flex-shrink: 0;
		margin-left: auto;
		flex-shrink: 0;
		transition:
			transform 0.2s ease,
			background 0.3s ease;
	}

	.show-movies-btn:hover {
		background: var(--accent-hover);
		transform: translateY(-1px);
	}

	.arrow-icon {
		width: 18px;
		height: 18px;
		fill: currentColor;
	}

	@media (max-width: 768px) {
		.profiles-container {
			grid-template-columns: 1fr;
			padding: 1rem;
		}

		.profile-card {
			border-radius: 12px;
			min-height: 380px;
		}

		.banner-container {
			height: 120px;
		}

		.profile-picture,
		.avatar-placeholder {
			width: 72px;
			height: 72px;
			bottom: -36px;
			left: 16px;
		}

		.profile-content {
			padding: 48px 16px 16px;
		}

		.profile-actions {
			position: static;
			flex-direction: column;
			gap: 1rem;
			margin-top: 1.5rem;
		}

		.show-movies-btn {
			width: 100%;
			order: 1;
			margin-left: 0;
		}
		.website-link {
			order: 2;
			width: 100%;
			justify-content: center;
		}
	}

	@media (max-width: 480px) {
		.profile-card {
			min-height: 360px;
		}

		.display-name {
			font-size: 1.3rem;
		}

		.username {
			font-size: 0.9rem;
		}

		.profile-key {
			font-size: 0.75rem;
		}
		.website-link {
			order: 2;
			width: 100%;
			justify-content: center;
		}
	}
</style>
