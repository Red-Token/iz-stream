<script lang="ts">
	import {wt} from '@src/stores/wtZool.svelte';

	wt.torrents;
</script>

<table>
	<thead>
		<tr>
			<td>infoHast</td>
			<td>Ready</td>
			<td>Received</td>
			<td>Progress</td>
		</tr>
	</thead>
	<tbody>
		{#each wt.torrents as torrent}
			<tr>
				<td>{torrent.infoHash}</td>
				<td> {torrent.ready}</td>
				<td> {torrent.received}</td>
				<td> {torrent.progress * 100}%</td>
			</tr>
		{/each}
	</tbody>
</table>
