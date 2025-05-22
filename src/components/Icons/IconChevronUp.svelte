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
	<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
</svg>
