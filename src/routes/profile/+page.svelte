<script lang="ts">
    import {onMount} from "svelte";
    import {type Publisher} from "iz-nostrlib";
    import {me} from "../../stores/profile.svelte";
    import {Nip01UserMetaDataEvent} from "$lib/org/nostr/nip01/Nip01UserMetaData";
    import {NostrProfileMetaData} from "$lib/org/nostr/nip01/NostrProfileMetaData";

    let publisher: Publisher
    let profile: NostrProfileMetaData = me.profile !== undefined ? {...me.profile} : {...new NostrProfileMetaData()}

    onMount(async () => {
        if (me.profilesSession === undefined)
            throw Error("sfsfsfsfsd")

        publisher = me.profilesSession.createPublisher();
    })

    function onUpdate() {
        console.log(profile)
        const et = new Nip01UserMetaDataEvent(profile)
        publisher.publish(Nip01UserMetaDataEvent.KIND, et.createTemplate())
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
    <img src={profile.picture} alt="profile picture"/>
    <img src={profile.banner} alt="banner"/>
    <a href={profile.website}>website</a>
</div>
