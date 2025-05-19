<script lang="ts">
	import {goto} from '$app/navigation';
	import {UserType} from 'iz-nostrlib/nips';
	import {Button, Profile2} from '$components';
	import {globalRunes} from '@src/stores/profile.svelte';
	import {IconArrow} from '$components/Icons';

	function gotoPage(key: string) {
		goto(`/channels/${key}/torrents`);
	}

	//TODO add limit the number of items loaded or paginate them to avoid overload due to an excessive number of elements.
</script>

<div class="profiles-container">
	{#each globalRunes.nip01Events.values().filter((val) => val.type === UserType.INDIVIDUAL) as val, i}
		<Profile2 nip01Event={val} {i}>
			<Button className="btn show-movies-btn" onClick={() => gotoPage(val.pubkey)}>
				Explore
				<IconArrow className="arrow-icon" direction="right" size={18} fillColor="currentColor" strokeColor="none" />
			</Button>
		</Profile2>
	{/each}
</div>

<style>
	@keyframes cardAppear {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.profiles-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
		padding: 2rem;
		max-width: 1440px;
		margin: 0 auto;
		z-index: 1;
	}

	@media (max-width: 768px) {
		.profiles-container {
			grid-template-columns: 1fr;
			padding: 1rem;
		}
	}
</style>
