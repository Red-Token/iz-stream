<script lang="ts">
    import Popup from './Popup.svelte';
    import {EventType, NostrClient, type SignerData} from 'iz-nostrlib';
    import {setContext} from '@welshman/lib';
    import {getDefaultAppContext, getDefaultNetContext} from '@welshman/app';
    import {me} from '../../stores/profile.svelte';
    import {goto} from "$app/navigation";
    import {page} from "$app/state";
    import {normalizeRelayUrl, type TrustedEvent} from "@welshman/util";
    import {Nip02FollowListEvent, Nip02FollowListEventBuilder} from "$lib/org/nostr/nip02/Nip02FollowListEvent";
    import {Nip35TorrentEvent, Nip35TorrentEventBuilder} from "$lib/org/nostr/nip35/Nip35TorrentEvent";

    let isPopupOpen = $state(false); // Track the popup visibility

    const client = NostrClient.getInstance();

    setContext({
        net: getDefaultNetContext(),
        app: getDefaultAppContext()
    });

    function openPopup() {
        isPopupOpen = true;
    }

    function closePopup() {
        isPopupOpen = false;
    }

    function logIn(data: SignerData) {

        client.logIn(data).then(() => {
                me.pubkey = client.publicKey !== undefined ? client.publicKey : '';

                const url = 'wss://relay.stream.labs.h3.se'
                const relays = [normalizeRelayUrl(url)]

                NostrClient.getInstance().createSession(relays).then((session) => {
                    me.notificationSession = session;
                })

                NostrClient.getInstance().createSession(relays).then((session) => {
                    me.listSession = session;
                    me.listPublisher = session.createPublisher();

                    const sub = session.createSubscription([
                        {kinds: [Nip02FollowListEvent.KIND], authors: [me.pubkey]}
                    ])

                    session.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
                        if (event.kind === Nip02FollowListEvent.KIND) {
                            const te = new Nip02FollowListEventBuilder(event).build();
                            me.followList = te.list
                            console.log("Found Torrent event", te)

                            if (me.notificationSubscription !== undefined) {
                                me.notificationSubscription.unsubscribe()
                            }

                            me.notificationSubscription = me.notificationSession?.createSubscription([
                                {kinds: [Nip35TorrentEvent.KIND], authors: [...me.followList.map(follow => follow.pubkey)]}
                            ])


                        } else {
                            console.log("Unknown event ", event)
                        }
                    })
                })


            }
        );
    }

    function logOut() {
        NostrClient.getInstance().logOut();
        me.pubkey = client.publicKey !== undefined ? client.publicKey : '';
    }

    function goToChannelPage() {
        goto(`/channels/${me.pubkey}`);
    }


</script>

{#if me.pubkey !== ''}
    <h1>Welcome to Svelte Popup Example, { me.profile?.name}!</h1>
    <button onclick={logOut}>LogOut</button>
    <button onclick={goToChannelPage}>Channel</button>
    <a href="/profile" aria-current={page.url.pathname === '/profile'}> Profile </a>
{:else }
    <button onclick={openPopup}>LogIn</button>
{/if}

<!-- Pass props to control visibility and close action -->
<Popup isOpen={isPopupOpen} closePopup={closePopup} logIn={logIn}/>
