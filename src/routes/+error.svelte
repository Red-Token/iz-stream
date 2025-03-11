<script lang="ts">
	import {page} from '$app/stores';
</script>

<div class="error-page">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>

<style>
	.error-page {
		text-align: center;
		margin: 4rem;
	}
</style>
