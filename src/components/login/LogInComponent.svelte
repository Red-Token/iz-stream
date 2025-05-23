<script lang="ts">
	import {Popup} from '$components';
	import {me} from '@src/stores/profile.svelte';
	import {goto} from '$app/navigation';
	import {logOut} from '@src/stores/community.svelte';
	import {IconUser, IconLogout, IconLock, IconChannel} from '$components/Icons';
	import {Button} from '$components/lib';

	let isPopupOpen = $state(false); // Track the popup visibility

	let isMenuOpen = $state(false);
	let menuButton: HTMLButtonElement | null = null;

	function openPopup() {
		isPopupOpen = true;
	}

	function closePopup() {
		isPopupOpen = false;
	}

	function goToChannelPage() {
		goto(`/channels/${me.pubkey}/torrents`);
	}

	function goToCreateMoviePage() {
		goto(`/create/asset`);
	}

	function goToCreateCommunityPage() {
		goto(`/create/community`);
	}

	function goToProfilePage() {
		goto('/profile');
	}

	//TODO fix this trash...
	function handleClickOutside(event: MouseEvent) {
		if (
			menuButton &&
			!menuButton.contains(event.target as Node) &&
			!document.querySelector('.dropdown-menu')?.contains(event.target as Node) //wtf
		) {
			closeMenu();
		}
	}

	$effect(() => {
		if (isMenuOpen) {
			document.addEventListener('click', handleClickOutside);
			return () => {
				document.removeEventListener('click', handleClickOutside);
			};
		}
	});

	function toggleUserMenu(event: MouseEvent) {
		event.stopPropagation();
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
		// document.removeEventListener('click', handleClickOutside);
	}

	function handleKeydown(event: KeyboardEvent) {
		//TODO: change it
		switch (event.key) {
			case 'Escape':
				closeMenu();
				break;
			case 'ArrowDown':
				if (isMenuOpen) {
					event.preventDefault();
					document.querySelector('.menu-item'); // wtf three
				}
				break;
		}
	}
</script>

<div class="auth-container">
	{#if me.pubkey !== ''}
		<div>
			<button
				class="user-menu"
				onclick={toggleUserMenu}
				onkeydown={handleKeydown}
				bind:this={menuButton}
				aria-haspopup="true"
				aria-expanded={isMenuOpen}
				aria-label="User menu"
			>
				<span class="username">{me.profile?.nip01Event.profile.name ?? 'User'}</span>
				<div class="user-avatar">
					{#if me.profile?.nip01Event.profile.picture}
						<img src={me.profile?.nip01Event.profile.picture} alt="Avatar" class="avatar-img" />
					{:else}
						<div class="avatar-fallback">
							{me.profile?.nip01Event.profile.name?.charAt(0) || '?'}
						</div>
					{/if}
				</div>
			</button>
			{#if isMenuOpen}
				<div class="dropdown-menu" role="menu" aria-labelledby="user-menu-button">
					<button class="menu-item" onclick={goToProfilePage} role="menuitem" tabindex="0">
						<IconUser className="menu-icon profile-icon" fillColor="var(--fg-1)" />
						Profile
					</button>

					<button class="menu-item" onclick={goToChannelPage} role="menuitem" tabindex="0">
						<IconChannel className="menu-icon profile-icon" />
						My Channel
					</button>

					<button class="menu-item" onclick={goToCreateMoviePage} role="menuitem" tabindex="0">
						<IconChannel className="menu-icon profile-icon" />
						Create Movie
					</button>

					<button class="menu-item" onclick={goToCreateCommunityPage} role="menuitem" tabindex="0">
						<IconChannel className="menu-icon profile-icon" />
						Create Community
					</button>

					<button class="menu-item logout" onclick={logOut} role="menuitem" tabindex="0">
						<IconLogout className="menu-icon" />
						Log Out
					</button>
				</div>
			{/if}
		</div>
	{:else}
		<Button class="btn btn-filled btn-padding-small btn-gap-small" onClick={openPopup}>
			<IconLock className="lock-icon" fillColor="currentColor" />
			<span class="login-text">Log In</span>
		</Button>
	{/if}

	<Popup isOpen={isPopupOpen} {closePopup} />
</div>

<style>
	.auth-container {
		position: relative;
		margin-left: auto;
	}

	.user-menu {
		display: flex;
		align-items: center;
		gap: 0rem;
		padding: 0.5rem 0.5rem 0.5rem 1rem;
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.3s ease;
		position: relative;
		background: none;
		border: none;
		color: inherit;
	}

	.user-menu:hover {
		background: var(--bg-2);
	}

	.user-avatar {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		overflow: hidden;
		background: var(--button-main);
		flex-shrink: 0;
	}

	.avatar-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.avatar-fallback {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-weight: 500;
	}

	.username {
		margin-right: 0.75rem;
		font-weight: 500;
		color: var(--text-primary);
		max-width: 120px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.dropdown-menu {
		position: absolute;
		top: calc(100% + 8px);
		right: 0;
		background: var(--bg-1);
		border: 1px solid var(--border-color);
		border-radius: var(--border-radius);
		box-shadow: 0 4px 12px var(--shadow-color);
		min-width: 200px;
		z-index: 100;
		animation: slideDown 0.2s ease;
	}

	.menu-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		padding: 0.75rem 1rem;
		background: none;
		border: none;
		color: var(--text-primary);
		text-align: left;
		text-decoration: none;
		transition: background 0.2s ease;
		font-size: 0.95rem;
	}

	.menu-item:hover {
		background: var(--bg-2);
	}

	.lock-icon {
		/* fill: #ef4444; */ /* Removed, now controlled by prop or default */
	}

	.profile-icon {
		/* fill: var(--fg-1); */ /* Removed, now controlled by prop or default */
	}

	.menu-icon {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
		/* fill property for menu-icon is handled by individual icon components default or specific prop */
	}

	.logout {
		color: #ef4444;
	}

	.login-text {
		font-weight: 500;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.username {
			margin-right: 0.5rem;
			max-width: 100px;
			display: none;
		}

		.user-menu {
			padding: 0.5rem;
		}

		.dropdown-menu {
			min-width: 180px;
			right: -10px;
		}
	}

	@media (max-width: 480px) {
		.login-text {
			display: none;
		}
	}

	/* Focus styles */
	.user-menu:focus-visible,
	.menu-item:focus-visible {
		outline: 2px solid var(--accent-color);
		outline-offset: 2px;
	}
</style>
