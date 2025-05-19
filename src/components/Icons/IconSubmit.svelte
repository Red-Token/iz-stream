<script>
	let {size = 24, className = ''} = $props();
</script>

<svg
	class={className}
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<path d="M3 20v-6l8-2-8-2V4l19 8-19 8Z" />
</svg>

<style>
	.submit-icon {
		width: 24px;
		height: 24px;
		fill: currentColor;
	}
</style>
