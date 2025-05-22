<script lang="ts">
	let {size = 48, className = '', circleClass = '', stroke = 'white', strokeWidth = 3} = $props();
</script>

<svg class={className} width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<circle class={circleClass} cx="24" cy="24" r="22" />
	<line x1="24" y1="16" x2="24" y2="32" {stroke} stroke-width={strokeWidth} stroke-linecap="round" />
	<line x1="16" y1="24" x2="32" y2="24" {stroke} stroke-width={strokeWidth} stroke-linecap="round" />
</svg>
