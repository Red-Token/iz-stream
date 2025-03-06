<script lang="ts">
	import {globalNostrContext, me} from '@src/stores/profile.svelte';
	import {generateSecretKey, getPublicKey} from 'nostr-tools/pure';
	import {nip19} from 'nostr-tools';
	import {SignerType} from 'iz-nostrlib';
	import {normalizeURL} from 'nostr-tools/utils';
	import {globalRunes} from '@src/stores/profile.svelte.js';
	import {defaultCommunityRelay} from '@src/config/config';
	import PrimaryNav from '@src/components/PrimaryNav.svelte';
	import Profile from '@src/components/Profile.svelte';
	import {
		Followee,
		Nip01UserMetaDataEvent, Nip02FollowListEvent,
		Nip65RelayListMetadataEvent,
		NostrUserProfileMetaData,
		UserType
	} from 'iz-nostrlib/nips';
	import {DynamicPublisher} from 'iz-nostrlib/ses';
	import {asyncCreateWelshmanSession, Identifier, Identity} from 'iz-nostrlib/communities';
	import {COMMUNITY} from '@red-token/welshman/util';
	import {SvelteSet} from 'svelte/reactivity';

	let cred = $state({nsec: 'nsec16lc2cn2gzgf3vcv20lwkqquprqujpkq9pj0wcxmnw8scxh6j0yrqlc9ae0'});
	let pubkey = $derived.by(() => {
		if (!cred.nsec.startsWith('nsec')) return 'Incorrect credentials';

		return nip19.npubEncode(getPublicKey(<Uint8Array<ArrayBufferLike>>nip19.decode(cred.nsec).data));
	});

	let profile = $state({
		data: new NostrUserProfileMetaData('Big Fish', 'About me', 'https://pre-alfa.iz-stream.com/users/big-fish.jpg'),
		relay: defaultCommunityRelay
	});


	function join(pubkey: string): void {
		console.log(pubkey);

		if (me.profile === undefined || me.publisher === undefined) return;

		const followees = me.profile.nip02Event.list
			.reduce((map: Map<string, Followee>, element) => map.set(element.pubkey, element), new Map<string, Followee>())
			.values()
			.toArray();

		followees.push(new Followee(pubkey));

		me.publisher.publish(new Nip02FollowListEvent(followees));
	}

	function generate(): void {
		cred.nsec = nip19.nsecEncode(generateSecretKey());
	}

	function parseRelayText(relay: string): string[][] {
		return relay.split('\n').map((line: string) => [normalizeURL(line)]);
	}

	// nsec1f87t43zppv2ppl5k88laz894ucmqpu2wfftgg50chzwhqyzr6yfq7zdk8e

	function create(): void {
		console.log('create' + profile);
		console.log(profile.relay);

		asyncCreateWelshmanSession({type: SignerType.NIP01, nsec: cred.nsec}).then((wsession) => {
			const identifier = new Identifier(wsession);
			const identity = new Identity(globalNostrContext, identifier);

			const relays: string[][] = parseRelayText(profile.relay);
			const publisher = new DynamicPublisher(globalNostrContext.profileService, identity);

			// TODO FIX THIS FFS! Where are my capabilities
			publisher.publish(new Nip01UserMetaDataEvent(profile.data, UserType.COMMUNITY));
			publisher.publish(new Nip65RelayListMetadataEvent([[profile.relay]]));
		});
	}
</script>

<div>
	Hello My Community
	{#each me.communities as community, i}
		<div>
			{community}
			{community.pubkey}

		</div>
		{globalRunes.profiles.get(community.pubkey)?.nip01Event.profile.name ?? 'Unnamed Community'}
	{/each}
</div>

Hello ALL Community

<div>
	{#each globalRunes.ctest as key, i}
		<div>{i}:{key}</div>
	{/each}
</div>

<div>
	{#each globalRunes.ctest.values().filter((key) => globalRunes.profiles.get(key)?.nip01Event.type === UserType.COMMUNITY) as key, i}
		<div>{i}:{key}</div>
	{/each}
</div>
TEST2
<div>
	{#each globalRunes.profiles.keys().filter((key) => globalRunes.profiles.get(key)?.nip01Event.type === UserType.COMMUNITY) as key, i}
		<div>{i}:{key}</div>
	{/each}
</div>



<div class="profiles-container">
	{#each globalRunes.profiles.values().filter((val) => val.nip01Event.type === UserType.COMMUNITY) as community, i}
		<div>
			${community.nip01Event.profile.name}
			<Profile key={community.nip01Event.pubkey} i={i}></Profile>
		</div>
		<button onclick={() => join(community.nip01Event.pubkey)}>JOIN</button>
	{/each}
</div>

<div>
	<div>
		<div>
			PUB: {pubkey}
		</div>
		<div>
			<input bind:value={cred.nsec} />
		</div>
		<div>
			<button onclick={() => generate()}>GENERATE</button>
		</div>
	</div>

	<div>
		<input bind:value={profile.data.name} />
	</div>
	<div>
		<input bind:value={profile.data.about} />
	</div>
	<div>
		<input bind:value={profile.data.picture} />
	</div>
	<div>
		<textarea bind:value={profile.relay}>TEST</textarea>
	</div>
	<div>
		<button onclick={create}>CREATE</button>
	</div>
</div>


<style>
    .profile-edit {
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
        background: var(--bg-1);
        border-radius: var(--border-radius);
        box-shadow: 0 2px 8px var(--shadow-color);
    }

    .image-previews {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .image-preview {
        position: relative;
        padding: 1rem;
        background: var(--bg-2);
        border-radius: var(--border-radius);
    }

    .preview-img {
        display: block;
        object-fit: cover;
        border: 2px solid var(--border-color);
    }

    .preview-img.avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 0 auto 1rem;
    }

    .preview-img.banner {
        width: 100%;
        height: 150px;
        border-radius: var(--border-radius);
        margin-bottom: 1rem;
    }

    .delete-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 50%;
        background: rgba(255, 185, 185, 0.8);
        color: white;
        cursor: pointer;
        font-size: 1.2rem;
        line-height: 1;
        transition: background 0.2s ease;
    }

    .delete-btn:hover {
        background: rgba(255, 0, 0, 1);
    }

    .source-switcher {
        display: none;
        /*display: flex;*/
        gap: 0.5rem;
        margin: 1rem 0;
        justify-content: center;
    }

    .source-switcher button {
        padding: 0.5rem 1rem;
        border: 1px solid var(--border-color);
        background: var(--bg-2);
        color: var(--fg-2);
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .source-switcher button.active {
        background: var(--accent-color);
        color: white;
        border-color: var(--accent-color);
    }

    .upload-label {
        display: block;
        padding: 0.75rem;
        background: var(--bg-3);
        color: var(--text-primary);
        text-align: center;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.2s ease;
    }

    .upload-label:hover {
        background: var(--border-color);
    }

    .file-input {
        display: none;
    }

    .url-input {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .url-field {
        flex: 1;
        padding: 0.75rem;
        border: 1px solid var(--border-color);
        border-radius: 6px;
        background: var(--bg-1);
        color: var(--fg-1);
    }

    .url-button {
        padding: 0.5rem 1.5rem;
        background: var(--accent-color);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: filter 0.2s ease;
    }

    .url-button:disabled {
        background: var(--bg-3);
        cursor: not-allowed;
        opacity: 0.7;
    }

    .form-fields {
        display: grid;
        gap: 1.5rem;
    }

    .form-row {
        display: grid;
        gap: 0.5rem;
    }

    label {
        color: var(--text-secondary);
        font-weight: 500;
        font-size: 0.9rem;
    }

    .form-input {
        padding: 0.75rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        background: var(--bg-1);
        color: var(--text-primary);
        font-size: 1rem;
    }

    .textarea {
        min-height: 100px;
        resize: vertical;
    }

    .website-link {
        display: inline-block;
        margin-top: 0.5rem;
        color: var(--accent-color);
        text-decoration: none;
        font-size: 0.9rem;
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        user-select: none;
    }

    .checkbox {
        width: 18px;
        height: 18px;
        accent-color: var(--accent-color);
    }

    .update-btn {
        width: 100%;
        padding: 1rem;
        background: var(--accent-color);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: filter 0.2s ease;
    }

    .update-btn:hover {
        filter: brightness(1.1);
    }

    @media (max-width: 768px) {
        .profile-edit {
            padding: 1rem;
            margin: 1rem;
        }

        .image-previews {
            grid-template-columns: 1fr;
        }

        .preview-img.avatar {
            width: 150px;
            height: 150px;
        }

        .preview-img.banner {
            height: 100px;
        }
    }
</style>
