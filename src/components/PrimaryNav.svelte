<script>
	import LogInComponent from '@src/components/login/LogInComponent.svelte';
	import {page, navigating} from '$app/state';
	import {me} from '../stores/profile.svelte';
</script>

<nav class="primary-nav">
	<div class="nav-content">
		<div class="nav-links">
			<a href="/search" aria-current={page.url.pathname === '/search'}>Search</a>
			<a href="/channels" data-sveltekit-preload-data aria-current={page.url.pathname === '/channels'}>Channels</a>
			<a href="/communities" aria-current={page.url.pathname === '/communities'}>Communities</a>
			{#if me.pubkey !== ''}
				<a href="/create" aria-current={page.url.pathname === '/create'}>Create</a>
			{/if}
		</div>
		<div class="login-btn">
			<LogInComponent></LogInComponent>
		</div>
	</div>
</nav>

<style>
	.primary-nav {
		--nav-padding: 0.5rem;
		--border-radius: 12px;
		font-size: 20px;
		background: var(--bg-1);
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		box-shadow: 0 4px 12px var(--shadow-color);
		margin: 1rem auto;
		max-width: 1380px;
		transition: all 0.3s ease;
	}

	.nav-content {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0 var(--nav-padding);
		height: 55px;
		gap: 2rem;
		margin: 0 auto;
		position: relative;
	}

	.nav-links {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 2rem;
		align-items: center;
		margin: 0;
		padding: 0;
	}

	.primary-nav a {
		position: relative;
		padding: 0.5rem 0;
		color: var(--text-color);
		text-decoration: none;
		font-weight: 500;
		transition: all 0.3s ease;
	}

	.primary-nav a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--accent-color);
		transition: width 0.3s ease;
	}

	.primary-nav a[aria-current='true'] {
		color: var(--accent-color);
	}

	.primary-nav a[aria-current='true']::after,
	.primary-nav a:hover::after {
		width: 100%;
	}

	.login-btn {
		margin-left: auto;
	}

	@media (max-width: 768px) {
		.primary-nav {
			z-index: 10;
		}

		.nav-content {
			height: 56px;
			padding: 0 1rem;
			gap: 1.5rem;
			z-index: 10;
		}

		.nav-links {
			gap: 1.5rem;
			left: 50%;
			transform: translateX(-50%);
		}

		.primary-nav a {
			font-size: 0.95rem;
		}
	}

	@media (max-width: 640px) {
		.primary-nav {
			border-radius: var(--border-radius) var(--border-radius) 0 0;
			margin: 0 auto;
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 10;
			right: 0;
			width: 100%;
			max-width: 100%;
			gap: 1.2rem;
			box-shadow: 0 -2px 12px var(--shadow-color);
		}

		.nav-content {
			justify-content: center;
			height: 56px;
		}

		.nav-links {
			position: static;
			transform: none;
			gap: 1.2rem;
		}

		/* .login-btn {
							display: none; should be fix
						} */
		.primary-nav a {
			font-size: 0.9rem;
			padding: 0.3rem 0;
		}

		.primary-nav a::after {
			height: 1.2px;
		}
	}
</style>
