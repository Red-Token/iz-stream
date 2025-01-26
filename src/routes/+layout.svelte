<script lang="ts">
    import {page} from '$app/state';
    import '@src/style/app.css';
    import '@src/style/tailwind.css';
    import LogInComponent from '../components/login/LogInComponent.svelte';
    import Communities from '@src/components/Communities.svelte';
    import {onMount} from 'svelte';
    import {communities} from "@src/stores/community.svelte";
    import {type Community, NotificationEventType} from "iz-nostrlib/dist/org/nostr/communities/Community";
    import {Nip01UserMetaDataEvent} from "iz-nostrlib/dist/org/nostr/nip01/Nip01UserMetaData";
    import {profiles} from "@src/stores/profile.svelte";

    console.log(import.meta.resolve('./org/nostr/ses/Subscription'));

    let {children} = $props();

    // let profileSession: SynchronisedSession

    onMount(() => {
        communities.forEach((community: Community) => {
            community.connect()

            community.notifications.on(NotificationEventType.TORRENT, (event) => {
                console.log('updating', event)
            })

            community.notifications.on(NotificationEventType.PROFILE, (event) => {
                if (event instanceof Nip01UserMetaDataEvent) {
                    if (event.event === undefined)
                        throw new Error('event event is null');

                    console.log('profile', event.event.pubkey, event.profile)
                    profiles.set(event.event.pubkey, event.profile);
                    return
                }

                throw new Error("Unknown event")
            })
        })
        //
        //
        // const url = 'wss://relay.stream.labs.h3.se';
        // const relays = [normalizeRelayUrl(url)];
        //
        // if (me.profilesSession === undefined) {
        //     NostrClient.getInstance()
        //         .createSession(relays)
        //         .then((session) => {
        //             me.profilesSession = session;
        //
        //             const sub = me.profilesSession.createSubscription([{kinds: [Nip01UserMetaDataEvent.KIND]}]);
        //
        //             me.profilesSession.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
        //                 if (event.kind === Nip01UserMetaDataEvent.KIND) {
        //                     const re = new Nip01UserMetaDataEventBuilder(event).build();
        //
        //                     console.log('Update profile');
        //
        //                     if (re.event === undefined) throw Error(`Unknown event: ${event}`);
        //
        //                     profiles.set(re.event.pubkey, re.profile);
        //                 } else {
        //                     console.log('Unknown event ', event);
        //                 }
        //             });
        //         });
        // }
    });
</script>

<main>
    <nav class="primary-nav">
        <div class="nav-content">
            <div class="nav-links">
                <a href="/search" aria-current={page.url.pathname === '/search'}>Search</a>
                <a href="/create" aria-current={page.url.pathname === '/create'}>Create</a>
                <a href="/channels" aria-current={page.url.pathname === '/channels'}>Channels</a>
            </div>
            <div class="login-btn">
                <LogInComponent></LogInComponent>
            </div>
        </div>
    </nav>
    <Communities/>
    <div class="main-content">
        {@render children()}
    </div>
</main>

<style>
    main {
        position: relative;
        padding: 0 1rem;
        z-index: 10;
    }

    .main-content {
        padding: 1rem;
    }

    .primary-nav {
        --nav-padding: 0.5rem;
        --border-radius: 12px;
        font-size: 20px;
        background: var(--bg-1);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        box-shadow: 0 4px 12px var(--shadow-color);
        margin: 1rem auto;
        max-width: 1200px;
        transition: all 0.3s ease;
    }

    .nav-content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 var(--nav-padding);
        height: 55px;
        gap: 2rem;
        margin: 0 auto;
        position: relative;
    }

    .nav-links {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 2rem;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .primary-nav a {
        position: relative;
        padding: 0.5rem 0;
        color: var(--text-color);
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    .primary-nav a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--accent-color);
        transition: width 0.3s ease;
    }

    .primary-nav a[aria-current='true'] {
        color: var(--accent-color);
    }

    .primary-nav a[aria-current='true']::after,
    .primary-nav a:hover::after {
        width: 100%;
    }

    .login-btn {
        margin-left: auto;
    }

    @media (max-width: 768px) {
        .primary-nav {
            z-index: 10;
        }

        .nav-content {
            height: 56px;
            padding: 0 1rem;
            gap: 1.5rem;
            z-index: 10;
        }

        .nav-links {
            gap: 1.5rem;
            left: 50%;
            transform: translateX(-50%);
        }

        .primary-nav a {
            font-size: 0.95rem;
        }
    }

    @media (max-width: 640px) {
        .primary-nav {
            border-radius: var(--border-radius) var(--border-radius) 0 0;
            margin: 0 auto;
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 10;
            right: 0;
            width: 100%;
            max-width: 100%;
            gap: 1.2rem;
            box-shadow: 0 -2px 12px var(--shadow-color);
        }

        .nav-content {
            justify-content: center;
            height: 56px;
        }

        .nav-links {
            position: static;
            transform: none;
            gap: 1.2rem;
        }

        /* .login-btn {
            display: none; should be fix
        } */
        .primary-nav a {
            font-size: 0.9rem;
            padding: 0.3rem 0;
        }

        .primary-nav a::after {
            height: 1.2px;
        }
    }
</style>
