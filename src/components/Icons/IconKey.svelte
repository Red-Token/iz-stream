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
	stroke-width="1.5"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<circle cx="12" cy="9" r="3" stroke="currentColor" stroke-width="1.5" fill="none" />
	<path d="M12 12V18M12 18H9V21H15V18H12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
	<path d="M15 12L18 9L21 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>

<style>
	.key-icon {
		animation: successSpin 0.8s ease-out;
		transform: scale(0.95);
	}
</style>
