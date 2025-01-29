<script lang="ts">
	import {page} from '$app/state';
	import VideoPlayer from '@src/components/VideoPlayer.svelte';
</script>
<VideoPlayer infoHash={page.params.infoHash} />
