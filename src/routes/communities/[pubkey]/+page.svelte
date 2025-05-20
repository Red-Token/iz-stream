<script lang="ts">
	import {page} from '$app/state';
	import {NostrUserProfileMetaData} from 'iz-nostrlib/nip01';
	import {defaultNip02, globalRunes, me} from '@src/stores/profile.svelte';
	import {Followee, Nip02FollowListEvent} from 'iz-nostrlib/nips';
	import {onMount} from 'svelte';
	import {IconFollow, IconArrow} from '$components/Icons';
	import {Button} from '$components/lib';

	const defaultProfile = new NostrUserProfileMetaData();

	let joinable: boolean = $derived.by(() => {
		console.log(me.pubkey);

		return (
			(globalRunes.nip02Events.get(me.pubkey) ?? defaultNip02).list.find((f) => f.pubkey === page.params.pubkey) ===
			undefined
		);
		// return communities.find(f => f.pubkey === page.params.pubkey) === undefined;
	});

	let channelOwner: NostrUserProfileMetaData = $derived.by(() => {
		return globalRunes.nip01Events.get(page.params.pubkey)?.profile ?? defaultProfile;
	});

	const events: any = [];

	function follow() {
		console.log('Stalking');

		if (joinable) {
			join(page.params.pubkey);
		} else {
			leave(page.params.pubkey);
		}
	}

	onMount(() => {
		console.log('Mounting communities');
	});

	$effect.pre(() => {
		console.log('Before update');
	});

	$effect(() => {
		console.log('After update');
	});

	function view(key: any) {
		console.log('Vaolaire' + key);
	}

	function leave(pubkey: string): void {
		console.log('leave' + pubkey);

		if (me.profile === undefined || me.publisher === undefined) return;

		const followees = me.profile.nip02Event.list
			.reduce((map: Map<string, Followee>, element) => map.set(element.pubkey, element), new Map<string, Followee>())
			.values()
			.toArray();

		const folloy = followees.filter((f) => f.pubkey !== page.params.pubkey);
		const xx = new Nip02FollowListEvent(folloy);

		console.log(xx.opts);

		console.log('TE');
		me.publisher.publish(xx);
	}

	function join(pubkey: string): void {
		console.log('join' + pubkey);

		if (me.profile === undefined || me.publisher === undefined) {
			console.log(me.pubkey);
			console.log(me.publisher);
			return;
		}

		console.log(JSON.stringify(me.profile.nip02Event));

		const x = me.profile.nip02Event.list.reduce(
			(map: Map<string, Followee>, element) => map.set(element.pubkey, element),
			new Map<string, Followee>()
		);

		const y = x.values();
		const followees = y.toArray();

		followees.push(new Followee(pubkey));

		console.log('TE2');

		me.publisher.publish(new Nip02FollowListEvent(followees));
	}
</script>

<div class="channel-container">
	<div class="channel-header">
		<div class="banner-container">
			{#if channelOwner.banner}
				<img class="channel-banner" src={channelOwner.banner} alt="Channel banner" loading="lazy" />
			{:else}
				<div class="banner-placeholder"></div>
			{/if}

			{#if channelOwner.picture}
				<img class="channel-avatar" src={channelOwner.picture} alt="Channel avatar" loading="lazy" />
			{:else}
				<div class="avatar-placeholder">
					{channelOwner.name?.charAt(0) || '?'}
					<!-- TODO fix the correct rendering of the first letter of the name in the avatar circle -->
				</div>
			{/if}
		</div>

		<div class="channel-info">
			<div class="channel-meta">
				<h1 class="channel-name">{channelOwner.name}</h1>
				<div class="channel-pubkey" title={page.params.pubkey}>
					{page.params.pubkey.slice(0, 8)}...{page.params.pubkey.slice(-8)}
				</div>
			</div>
			<Button className="btn follow-btn" onClick={follow}>
				{joinable ? 'Join' : 'Leave'}
				<IconFollow className="follow-icon" />
			</Button>
		</div>
	</div>

	<div class="events-list">
		{#each events as event}
			<div class="event-card">
				<div class="event-content">
					<h2 class="event-title">{event.title}</h2>
					<p class="event-x">{event.x}</p>
				</div>
				<Button className="view-btn" onClick={() => view(event)}>
					VIEW
					<IconArrow className="arrow-icon" direction="right" />
				</Button>
			</div>
		{/each}
	</div>
</div>

<style>
	.channel-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.channel-header {
		background: var(--bg-1);
		border-radius: 16px;
		border: 1px solid var(--border-color);
		box-shadow: 0 4px 12px var(--shadow-color);
		margin-bottom: 2rem;
		overflow: hidden;
	}

	.banner-container {
		position: relative;
		height: 240px;
		background: var(--bg-2);
	}

	.channel-banner {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.9;
	}

	.banner-placeholder {
		height: 100%;
		background: linear-gradient(135deg, var(--bg-2) 0%, var(--border-color) 100%);
	}

	.channel-avatar {
		position: absolute;
		bottom: -48px;
		left: 32px;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		border: 3px solid var(--bg-1);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		object-fit: cover;
		/* TODO fix the margin between the avatar and the name. */
	}

	.channel-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 32px 32px;
	}

	.channel-name {
		font-size: 2rem;
		margin: 0 0 0.5rem;
		color: var(--text-primary);
	}

	.channel-pubkey {
		font-size: 0.9rem;
		color: var(--text-tertiary);
		word-break: break-all;
	}

	.events-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.event-card {
		background: var(--bg-1);
		position: relative;
		padding-right: 120px;
		border-radius: 12px;
		border: 1px solid var(--border-color);
		padding: 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: transform 0.3s ease;
	}

	.event-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 4px 12px var(--shadow-hover);
	}

	.event-content {
		flex: 1;
		margin-right: 1rem;
		max-width: calc(100% - 140px);
		overflow: hidden;
	}

	.event-title {
		font-size: 1.1rem;
		margin: 0 0 0.5rem;
		color: var(--text-primary);
	}

	.event-x {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.arrow-icon {
		width: 18px; /* Or manage size via prop <IconArrow size={18} /> */
		height: 18px; /* Or manage size via prop <IconArrow size={18} /> */
		/* fill: currentColor; */ /* IconArrow uses stroke by default */
	}

	@media (max-width: 768px) {
		.event-card {
			padding-right: 1rem;
			padding-bottom: 3.5rem;
		}

		.channel-header {
			border-radius: 12px;
		}

		.banner-container {
			height: 180px;
		}

		.channel-avatar {
			width: 80px;
			height: 80px;
			bottom: -32px;
			left: 16px;
		}

		.channel-info {
			flex-direction: column;
			align-items: flex-start;
			padding: 1.5rem 16px;
		}

		.channel-name {
			font-size: 1.5rem;
		}

		.events-list {
			grid-template-columns: 1fr;
		}

		.event-content {
			max-width: 100%;
		}
	}
</style>
