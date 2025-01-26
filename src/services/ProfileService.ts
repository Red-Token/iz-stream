import {EventType, SynchronisedSession} from "iz-nostrlib";
import type {TrustedEvent} from "@welshman/util";
import {Nip01UserMetaDataEvent, Nip01UserMetaDataEventBuilder} from "$lib/org/nostr/nip01/Nip01UserMetaData";
import {profiles} from "../stores/profile.svelte";

class ProfileService extends SynchronisedSession{

    constructor() {
        super([])
        this.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
            if(event.kind === Nip01UserMetaDataEvent.KIND) {
                const nip01UserMetaDataEvent = new Nip01UserMetaDataEventBuilder(event).build()
                profiles.set(event.pubkey,nip01UserMetaDataEvent.profile)
            }
        })
    }
}

export const profileService = new ProfileService();
