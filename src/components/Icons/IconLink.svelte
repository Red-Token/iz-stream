<script lang="ts">
	let {size = 24, className = '', fill = 'currentColor'} = $props();
</script>

<svg class={className} width={size} height={size} viewBox="0 0 24 24" {fill} xmlns="http://www.w3.org/2000/svg">
	<path
		d="M11 17H7Q4.925 17 3.463 15.537T2 12Q2 9.925 3.463 8.462T7 7H11V9H7Q5.75 9 4.875 9.875T4 12Q4 13.25 4.875 14.125T7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17Q18.25 15 19.125 14.125T20 12Q20 10.75 19.125 9.875T17 9H13V7H17Q19.075 7 20.538 8.462T22 12Q22 14.075 20.538 15.537T17 17H13Z"
	/>
</svg>
