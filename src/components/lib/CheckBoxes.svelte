<script lang="ts">
	import { IconCheckmark } from '$components/Icons';
	let {name, selected, checked}: {name: string; selected: Function; checked: boolean} = $props();
</script>

<label class="option-item">
	<input class="sr-only" type="checkbox" bind:checked onclick={() => selected()} />
	<div class="custom-checkbox {checked ? 'checked' : ''}">
		{#if checked}
			<IconCheckmark className="checkmark" size="100%" />
		{/if}
	</div>
	<div class="option-info">
		<div class="option-title">{name}</div>
	</div>
</label>

<style>
	.option-item {
		display: flex;
		cursor: pointer;
		gap: 1rem;
		padding: 1rem;
		border-radius: var(--border-radius);
		margin-bottom: 0.5rem;
		background: var(--bg-2);
	}
	.option-title {
		font-weight: 500;
		margin-bottom: 4px;
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
	/* checkbox */
	.custom-checkbox {
		border: 2px solid var(--fg-2);
		flex-shrink: 0;
		transition: all 0.2s ease;
		width: 20px;
		height: 20px;
		/* border: 2px solid #ccc; */
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.custom-checkbox.checked {
		border-color: var(--accent-color);
		background: var(--accent-transparent);
	}

	.checkmark {
		width: 100%;
		height: 100%;
		/* mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E"); */
		/* background: var(--accent-color); */
		clip-path: polygon(28% 56%, 15% 44%, 6% 55%, 28% 76%, 88% 16%, 76% 6%, 28% 56%);
	}
</style>
