<script>
	let {
		direction = 'right',
		size = 20,
		className = '',
		fillColor = 'none',
		strokeColor = 'currentColor',
		strokeWidth = '1.5'
	} = $props();

	let rotation =
		{
			right: '0',
			down: '90',
			left: '180',
			up: '270'
		}[direction] || '0';
</script>

<svg
	class={className}
	width={size}
	height={size}
	viewBox="0 0 24 24"
	style={`transform: rotate(${rotation}deg);`}
	fill={fillColor}
	stroke={strokeColor}
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<path d="M6.4 18 5 16.6 14.6 7H6V5h12v12h-2V8.4Z" />
</svg>
