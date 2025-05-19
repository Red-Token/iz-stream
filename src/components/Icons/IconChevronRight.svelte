<script lang="ts">
    let { size = 24, className = '', strokeColor = 'currentColor', fillColor = 'none', strokeWidth = '2' } = $props();
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
    xmlns="http://www.w3.org/2000/svg"
>
    <path d="M9 18l6-6-6-6" />
</svg> 