<script lang="ts">
    import {onMount} from "svelte";
    import {Season} from "../stores/searchResult.svelte";
    import SeasonComponent from "./SeasonComponent.svelte";

    let {imdbId, numberOfSeasons} = $props();

    console.log(imdbId)
    console.log(numberOfSeasons)

    let seasons: Season[] = $state([])

    onMount(() => {
        console.log(imdbId);

        for (let i = 1; i <= numberOfSeasons; i++) {
            const season: Season = {
                id: i, data: {}, episodes: []
            }

            seasons.push(season);
        }
    })

</script>
<div>
Rendering series {imdbId}

{#each seasons as season }
    {season.id}
    <SeasonComponent imdbId={imdbId} seasonNumber={season.id}></SeasonComponent>
{/each}

</div>


