<script lang="ts">
    import {onMount} from "svelte";
    import {type Publisher} from "iz-nostrlib";
    import {me} from "../../stores/profile.svelte";

    let publisher: Publisher
    let profile = {...me.profile}

    onMount(async () => {
        if (me.profilesSession === undefined)
            throw Error("sfsfsfsfsd")

        publisher = me.profilesSession.createPublisher();
    })

    function onUpdate() {
        console.log(profile)
    }

</script>
<div>
    name: <input type="search" bind:value={profile.name}/>
    about: <input type="search" bind:value={profile.about}/>
    display_name: <input type="search" bind:value={profile.display_name}/>
    picture: <input type="search" bind:value={profile.picture}/>
    banner: <input type="search" bind:value={profile.banner}/>
    website: <input type="search" bind:value={profile.website}/>
    bot: <input type="search" bind:value={profile.bot}/>
    <button on:click={onUpdate}>Update</button>
</div>
