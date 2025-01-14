<script lang="ts">
	import { page, navigating } from '$app/state';
	let { children } = $props();
</script>

<main>
	<nav>
		<a href="/search" aria-current={page.url.pathname === '/search'}> event </a>
		{#if navigating.to}
			navigating to {navigating.to.url.pathname}
		{/if}
	</nav>
</main>

{@render children()}

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 1em;
		max-width: 100%;
		margin: 0 auto;
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		font-size: 18px;
		text-align: center;
		margin-top: 2rem;
		padding: 1rem 0;
	}

	nav a {
		display: inline-block;
		padding: 0 1rem;
		border-left: 1px solid var(--color-border);
		text-align: center;
	}

	nav a:first-of-type {
		border: 0;
	}
</style>
