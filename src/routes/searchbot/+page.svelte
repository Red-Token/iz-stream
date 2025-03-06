<script lang="ts">
	let search = $state('hello bot')

	function onSearch(): void {
		console.log(search)
	}

</script>

HELLO BOT!

<div class="container">
	<div class="header_search">
		<div class="header_search_image">
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"></svg>
		</div>

		<div class="header_search_input">
			<input
				type="search"
				bind:value={search}
				placeholder="Search..."
				onkeydown={(e) => {
					if (e.key === 'Enter') {
						onSearch();
					}
				}}
			/>
		</div>
	</div>
</div>
