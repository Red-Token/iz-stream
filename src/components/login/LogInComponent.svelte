<script lang="ts">
    import Popup from './Popup.svelte';
    import {NostrClient} from 'iz-nostrlib';
    import {setContext} from '@welshman/lib';
    import {getDefaultAppContext, getDefaultNetContext} from '@welshman/app';
    import {me} from '../../stores/profile.svelte';
    import {goto} from '$app/navigation';
    // import {normalizeRelayUrl, type TrustedEvent} from '@welshman/util';
    // import {Nip02FollowListEvent, Nip02FollowListEventBuilder} from '$lib/org/nostr/nip02/Nip02FollowListEvent';
    // import {Nip35TorrentEvent} from '$lib/org/nostr/nip35/Nip35TorrentEvent';
    import {logOut} from "@src/stores/community.svelte";

    let isPopupOpen = $state(false); // Track the popup visibility

    let isMenuOpen = $state(false);
    let menuButton;

    const client = NostrClient.getInstance();

    setContext({
        net: getDefaultNetContext(),
        app: getDefaultAppContext()
    });

    function openPopup() {
        isPopupOpen = true;
    }

    function closePopup() {
        isPopupOpen = false;
    }

    // function logIn(data: SignerData) {
    //     asyncCreateWelshmanSession(data).then(async wsession => {
    //         me.pubkey = wsession.pubkey
    //
    //         // We login to the static communities
    //         communities.forEach((community) => {
    //             const ci = community.createCommunityIdentity(wsession)
    //         })
    //
    //         // We should load the private community links
    //     })
    // }
    //
    // function logOut() {
    //     NostrClient.getInstance().logOut();
    //     me.pubkey = client.publicKey !== undefined ? client.publicKey : '';
    // }

    function goToChannelPage() {
        goto(`/channels/${me.pubkey}/torrents`);
    }

    function goToProfilePage() {
        goto('/profile');
    }

    function handleClickOutside(event) {
        if (
            menuButton &&
            !menuButton.contains(event.target) &&
            !document.querySelector('.dropdown-menu')?.contains(event.target)
        ) {
            closeMenu();
        }
    }

    function toggleUserMenu(event) {
        event.stopPropagation();
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            setTimeout(() => document.addEventListener('click', handleClickOutside));
        }
    }

    function closeMenu() {
        isMenuOpen = false;
        document.removeEventListener('click', handleClickOutside);
    }

    function handleKeydown(event) {
        switch (event.key) {
            case 'Escape':
                closeMenu();
                break;
            case 'ArrowDown':
                if (isMenuOpen) {
                    event.preventDefault();
                    document.querySelector('.menu-item')?.focus();
                }
                break;
        }
    }


</script>

<div class="auth-container">
    {#if me.pubkey !== ''}
        <button
                class="user-menu"
                onclick={toggleUserMenu}
                onkeydown={handleKeydown}
                bind:this={menuButton}
                aria-haspopup="true"
                aria-expanded={isMenuOpen}
                aria-label="User menu"
        >
            <span class="username">{me.profile?.name || 'User'}</span>
            <div class="user-avatar">
                {#if me.profile?.picture}
                    <img src={me.profile.picture} alt="Avatar" class="avatar-img"/>
                {:else}
                    <div class="avatar-fallback">
                        {me.profile?.name?.charAt(0) || '?'}
                    </div>
                {/if}
            </div>

            {#if isMenuOpen}
                <div class="dropdown-menu" role="menu" aria-labelledby="user-menu-button">
                    <button class="menu-item" onclick={goToProfilePage} role="menuitem" tabindex="0">
                        <svg class="menu-icon profile-icon" viewBox="0 0 24 24">
                            <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                            />
                        </svg>
                        Profile
                    </button>

                    <button class="menu-item" onclick={goToChannelPage} role="menuitem" tabindex="0">
                        <svg class="menu-icon profile-icon" viewBox="0 0 24 24">
                            <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 6.5c1.93 0 3.5-1.57 3.5-3.5S13.93 3.5 12 3.5 8.5 5.07 8.5 7s1.57 3.5 3.5 3.5zM18 18H6v-1.12c0-1.21 2.17-1.34 2.98-.03.63.99 1.67 1.64 3.02 1.64s2.39-.65 3.02-1.64c.81-1.31 2.98-1.18 2.98.03V18z"
                            />
                        </svg>
                        My Channel
                    </button>

                    <button class="menu-item logout" onclick={logOut} role="menuitem" tabindex="0">
                        <svg class="menu-icon lock-icon" viewBox="0 0 24 24">
                            <path
                                    d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
                            />
                        </svg>
                        Log Out
                    </button>
                </div>
            {/if}
        </button>
    {:else}
        <button class="login-btn" onclick={openPopup} tabindex="0" aria-label="Login">
            <svg class="lock-icon" viewBox="0 0 24 24">
                <path
                        d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                />
            </svg>
            <span class="login-text">Log In</span>
        </button>
    {/if}

    <Popup isOpen={isPopupOpen} {closePopup}/>
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
        background: var(--accent-color);
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
        fill: #ef4444;
    }

    .profile-icon {
        fill: var(--fg-1);
    }

    .menu-icon {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
    }

    .logout {
        color: #ef4444;
    }

    .login-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.3rem 0.6rem;
        background: var(--accent-color);
        color: white;
        border: none;
        border-radius: 8px;
        transition: filter 0.3s ease;
        cursor: pointer;
    }

    .login-btn:hover {
        filter: brightness(1.1);
    }

    .lock-icon {
        width: 18px;
        height: 18px;
        fill: currentColor;
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

        .login-btn {
            padding: 0.5rem;
        }
    }

    /* Focus styles */
    .user-menu:focus-visible,
    .menu-item:focus-visible {
        outline: 2px solid var(--accent-color);
        outline-offset: 2px;
    }
</style>
