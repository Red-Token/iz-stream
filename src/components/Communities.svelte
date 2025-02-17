<script lang="ts">
	import {onMount} from 'svelte';
	import {me, NostrProfile} from '@src/stores/profile.svelte';
	import {globalRunes} from '@src/stores/profile.svelte.js';
	// import {communities} from '@src/stores/community.svelte';

	let {isExpanded} = $props();

	let communities: NostrProfile[] = $derived.by(() => {
		return me.communities.map((c) => globalRunes.profiles.get(c.pubkey)).filter((value) => value !== undefined);
	});

	// const communities = [
	// 	{id: 1, name: 'Welshman', avatar: '🎨', online: true},
	// 	{id: 2, name: 'Nostr', avatar: '💻', online: false},
	// 	{id: 3, name: 'Red-Token', avatar: '🎮', online: true}
	// ];

	onMount(() => {
		const savedState = localStorage.getItem('sidebar-state');
		isExpanded = savedState ? JSON.parse(savedState) : true;
	});
</script>

<!-- onmouseenter={isExpanded ? undefined : () => temporaryExpand(true)}
onmouseleave={isExpanded ? undefined : () => temporaryExpand(false)} -->
<div class="sidebar-wrapper">
	<nav class="sidebar" aria-label="Communities">
		<div class="communities-list" style="">
			{#each communities as community}
				<a
					href="/communities/{community.nip01Event.profile.name}"
					class="community-item"
					title={community.nip01Event.profile.name}
				>
					<div class="avatar-container">
						<div class="avatar {true && 'online'}">
							{community.nip01Event.profile.name.slice(0, 2)}
						</div>
					</div>
					<span class="community-name">
						{community.nip01Event.profile.name}
					</span>
				</a>
			{/each}
			<button>ADD</button>
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
