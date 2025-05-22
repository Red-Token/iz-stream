<script lang="ts">
	let {size = 24, className = '', fillColor = 'none', strokeColor = 'currentColor', strokeWidth = '2'} = $props();
</script>

<svg
	class={className}
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill={fillColor}
	stroke={strokeColor}
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
</svg>
