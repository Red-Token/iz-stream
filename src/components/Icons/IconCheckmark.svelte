<script lang="ts">
	let {size, className = '', strokeWidth = 2, strokeColor = 'currentColor', fillColor = 'none'} = $props();
</script>

<svg
	class={className}
	width={size}
	height={size}
	viewBox="0 0 12 10"
	fill={fillColor}
	stroke={strokeColor}
	stroke-width={strokeWidth}
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M1 5l3 3 6-6" />
</svg>

<style>
	.checkmark {
		width: 100%;
		height: 100%;
		/* mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E"); */
		/* background: var(--accent-color); */
		clip-path: polygon(28% 56%, 15% 44%, 6% 55%, 28% 76%, 88% 16%, 76% 6%, 28% 56%);
	}
</style>
