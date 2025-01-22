<script lang="ts">
    import {page} from "$app/state";

    import {onMount} from "svelte";

    onMount(async () => {
    })
</script>
<div>
    {page.params.id}
</div>
