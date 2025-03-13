<script lang="ts">
	import {onMount} from 'svelte';
	import {defaultNip01, defaultNip02, me, globalRunes} from '@src/stores/profile.svelte';
	import {goto} from '$app/navigation';
	// import {communities} from '@src/stores/community.svelte';

	let {isExpanded} = $props();

	let communities = $derived.by(() => {
		console.log(me.pubkey);

		return (globalRunes.nip02Events.get(me.pubkey) ?? defaultNip02).list.map(
			(f) => globalRunes.nip01Events.get(f.pubkey) ?? defaultNip01
		);
		// return me.communities.map((c) => globalRunes.profiles.get(c.pubkey)).filter((value) => value !== undefined);
	});

	const add = () => {
		goto('/communities');
	};

	onMount(() => {});
</script>

<!-- onmouseenter={isExpanded ? undefined : () => temporaryExpand(true)}
onmouseleave={isExpanded ? undefined : () => temporaryExpand(false)} -->
<div class="sidebar-wrapper">
	<nav class="sidebar" aria-label="Communities">
		<div class="communities-list" style="">
			{#each communities as community}
				<a href="/communities/{community.pubkey}" class="community-item" title={community.profile.name}>
					<div class="avatar-container">
						<div class="avatar {true && 'online'}">
							{#if community.profile.picture}
								<img class="avatar" src={community.profile.picture} alt="" />
							{:else}
								{community.profile.name.slice(0, 2)}
							{/if}
						</div>
					</div>
					<span class="community-name">
						{community.profile.name}
					</span>
				</a>
			{/each}
			{#if me.pubkey !== ''}
				<div class="community-item">
					<div class="avatar-conteiner">
						<div class="avatar">
							<button class="button-add" aria-label="add-community" onclick={add}>
								<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
									<circle class="button-add" cx="24" cy="24" r="22" />
									<line x1="24" y1="16" x2="24" y2="32" stroke="white" stroke-width="3" stroke-linecap="round" />
									<line x1="16" y1="24" x2="32" y2="24" stroke="white" stroke-width="3" stroke-linecap="round" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</nav>
</div>

<style>
	.sidebar-wrapper {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		background: var(--bg-1);
		border-right: 1px solid var(--border-color);
		transition: transform 0.3s ease;
		z-index: 1000;
		transform: translateX(calc(-100% + var(--sidebar-width)));
		width: var(--sidebar-width);
		/* transition: all 0.3s ease; TODO fix animation and avatar hiding */
	}

	.sidebar {
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 12px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.button-add {
		fill: var(--bg-3);
		border: 1px;
		border-radius: var(--border-radius);
	}

	.communities-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
		padding: 0 4px;
	}

	.community-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 8px 0;
		border-radius: 8px;
		text-decoration: none;
		color: var(--text-color);
		position: relative;
		transition: background 0.2s ease;
	}

	.community-item:hover {
		background: var(--bg-2);
	}

	.avatar-container {
		position: relative;
		width: 48px;
		height: 48px;
		flex-shrink: 0;
	}

	.avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: var(--bg-3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30px;
		position: relative;
	}

	.avatar.online::after {
		content: '';
		position: absolute;
		bottom: -2px;
		right: -2px;
		width: 12px;
		height: 12px;
		background: var(--online-indicator);
		border-radius: 50%;
		border: 2px solid var(--bg-1);
	}

	.community-name {
		font-size: 11px;
		line-height: 1.3;
		max-width: calc(var(--sidebar-width) - 16px);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		margin-top: 6px;
		padding: 0 4px;
	}

	@media (max-width: 768px) {
		.sidebar-wrapper {
			transform: translateX(-100%);
		}

		.avatar {
			font-size: 18px;
		}
	}
</style>
