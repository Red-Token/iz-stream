<script lang="ts">
	import {onMount} from 'svelte';

	let isExpanded: boolean = $state(false);

	const communities = [
		{id: 1, name: 'Welshman', avatar: '🎨', online: true},
		{id: 2, name: 'Nostr', avatar: '💻', online: false},
		{id: 3, name: 'Red-Token', avatar: '🎮', online: true}
	];

	const toggleSidebar = () => {
		isExpanded = !isExpanded;
	};

	onMount(() => {
		const savedState = localStorage.getItem('sidebar-state');
		isExpanded = savedState ? JSON.parse(savedState) : true;
	});

	function temporaryExpand(arg: boolean): void {
		isExpanded = arg;
	}
</script>

<div class="sidebar-wrapper {!isExpanded && 'collapsed'}">
	<nav class="sidebar" aria-label="Communities">
		<div class="communities-list">
			{#each communities as community}
				<a href="/communities/{community.id}" class="community-item" title={community.name}>
					<div class="avatar-container">
						<div class="avatar {community.online && 'online'}">
							{community.avatar || community.name.slice(0, 2)}
						</div>
					</div>
					{#if isExpanded}
						<span class="community-name">{community.name}</span>
					{/if}
				</a>
			{/each}
		</div>
	</nav>

	<button
		class="sidebar-toggle"
		onclick={toggleSidebar}
		onmouseenter={isExpanded ? undefined : () => temporaryExpand(true)}
		onmouseleave={isExpanded ? undefined : () => temporaryExpand(false)}
	>
		<!-- {#if isExpanded}
          <icon size={20} />
        {:else}
          < size={20} />
        {/if} -->
	</button>
</div>

<style>
	.sidebar-wrapper {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: var(--sidebar-width);
		background: var(--bg-1);
		border-right: 1px solid var(--border-color);
		transition: transform 0.3s ease;
		z-index: 1000;

		&.collapsed {
			transform: translateX(calc(-100% + var(--sidebar-collapsed-width)));
		}
	}

	.sidebar {
		height: 100%;
		overflow-y: auto;
		padding: 12px 8px;
	}

	.communities-list {
		display: grid;
		gap: 2px;
	}

	.community-item {
		display: flex;
		align-items: center;
		padding: 8px;
		border-radius: 10px;
		text-decoration: none;
		color: var(--text-color);

		&:hover {
			background: var(--bg-2);
		}
	}

	.avatar-container {
		position: relative;
		margin-right: 12px;
	}

	.avatar {
		width: var(--avatar-size);
		height: var(--avatar-size);
		border-radius: 50%;
		background: var(--bg-3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;

		&.online::after {
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			width: 12px;
			height: 12px;
			background: var(--online-indicator);
			border-radius: 50%;
			border: 2px solid var(--bg-1);
		}
	}

	.community-name {
		font-size: 16px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.sidebar-toggle {
		position: absolute;
		right: -40px;
		top: 12px;
		width: 32px;
		height: 32px;
		background: var(--bg-1);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;

		&:hover {
			background: var(--bg-2);
		}
	}

	@media (max-width: 768px) {
		.sidebar-wrapper {
			transform: translateX(-100%);

			&.collapsed {
				transform: translateX(0);
				width: var(--sidebar-collapsed-width);
			}
		}

		.sidebar-toggle {
			right: -36px;
		}
	}
</style>
