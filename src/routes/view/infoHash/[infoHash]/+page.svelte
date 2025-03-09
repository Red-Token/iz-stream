<script lang="ts">
	import {page} from '$app/state';
	import {VideoPlayer} from '$components';
</script>

<VideoPlayer infoHash={page.params.infoHash} />

<style>
</style>
