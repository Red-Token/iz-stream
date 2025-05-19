<script lang="ts">
    let { size = 18, className = '', fillColor = 'var(--fg-1)' } = $props();
</script>

<svg 
    class={className}
    width={size}
    height={size}
    viewBox="0 0 24 24" 
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
>
	<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 6.5c1.93 0 3.5-1.57 3.5-3.5S13.93 3.5 12 3.5 8.5 5.07 8.5 7s1.57 3.5 3.5 3.5zM18 18H6v-1.12c0-1.21 2.17-1.34 2.98-.03.63.99 1.67 1.64 3.02 1.64s2.39-.65 3.02-1.64c.81-1.31 2.98-1.18 2.98.03V18z"/>
</svg> 