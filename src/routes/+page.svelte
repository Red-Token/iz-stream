<script lang="ts">
	import {globalNostrContext} from '@src/stores/profile.svelte';
</script>

Running these relays:
{#each globalNostrContext.relays.value as relay}
	<div>
		{relay}
	</div>
{/each}
