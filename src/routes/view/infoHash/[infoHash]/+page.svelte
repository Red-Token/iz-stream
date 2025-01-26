<script lang="ts">
	import Video from '../../../../components/Video.svelte';
	import {page} from '$app/state';
</script>

<Video infoHash={page.params.infoHash} />
