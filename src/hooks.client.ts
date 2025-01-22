import {normalizeRelayUrl, type TrustedEvent} from "@welshman/util";
import {EventType, NostrClient, type SynchronisedSession} from "iz-nostrlib";
import {Nip01UserMetaDataEvent, Nip01UserMetaDataEventBuilder} from "$lib/org/nostr/nip01/Nip01UserMetaData";
import {me, profiles} from "./stores/profile.svelte";
import {sessions} from "@welshman/app";

console.log("Hooks client started");


