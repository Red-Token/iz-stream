<script lang="ts">
	import {Button} from '@src/components/lib';
	import {onMount} from 'svelte';
	let file: File;
	let state = $state({resp: {state: {state: 'not started', msg: 'Not started the request'}}, infoHash: ''});
	onMount(() => {});

	function handleSubmit() {
		console.log(file);
		console.log('submit!');

		// const community = communities.at(0);
		const community = undefined;

		if (community === undefined) throw new Error('Community does not exist!');

		// const ci = community.identities.values().toArray()[0];
		//
		// if (ci === undefined) throw new Error('CI does not exist!');
		//
		// const ncs = new NostrCommunityServiceClient(community, ci);
		//
		// ncs.session.eventStream.emitter.on(EventType.DISCOVERED, (event: TrustedEvent) => {
		// 	console.log(event);
		//
		// 	if (event.kind === Nip9999SeederTorrentTransformationResponseEvent.KIND) {
		// 		const resp = Nip9999SeederTorrentTransformationResponseEvent.build(event);
		//
		// 		if (resp.state.state === 'seeding' && resp.event !== undefined) {
		// 			state.infoHash = safeFindSingleTagValue(resp.event, 'x');
		// 			wt.remove(torrent.infoHash);
		// 		}
		//
		// 		state.resp = resp;
		// 	}
		// });
		//
		// const torrent = wt.seed(file, options);
		//
		// torrent.on('infoHash', () => {
		// 	console.log('infoHash:' + torrent.infoHash);
		// 	console.log('magnetURI:' + torrent.magnetURI);
		//
		// 	const req = new Nip9999SeederTorrentTransformationRequestEvent('NN1', torrent.infoHash, {transform: 'cool'});
		// 	ncs.publisher.publish(Nip9999SeederTorrentTransformationRequestEvent.KIND, req.createTemplate());
		// });
		//
		// torrent.on('upload', (bytes: any) => {
		// 	console.log(bytes);
		// });
		//
		// torrent.on('error', (err: any) => {
		// 	console.log(err);
		// });
		//
		// torrent.on('wire', (wire: any) => {
		// 	console.log(wire);
		// });
	}

	function handleChange(event: any) {
		file = event.target.files[0];
	}
	// event: any
	function publish() {
		console.log('publish');
	}

	// function handleFileChange(event: any) {
	// 	console.log('I am a file');
	// 	const file = event.target.files[0];
	// 	console.log(file);
	// }
</script>

<div>
	<h1>File Upload Form</h1>
	<div>
		<label for="file">Choose a file:</label>
		<input type="file" id="file" name="file" onchange={handleChange} />
	</div>
	<!-- type="submit" -->
	<Button class="btn btn-filled btn-padding-large btn-gap-medium btn-full-width" onClick={handleSubmit}>Upload</Button>
	<div>
		<input type="text" bind:value={state.infoHash} placeholder="InfoHash" class="form-input" />
		<p></p>
		{#if state.infoHash !== ''}
			<!-- type="submit" -->
			<Button class="btn btn-filled btn-padding-large btn-gap-medium btn-full-width" onClick={publish}>Publish</Button>
		{/if}
	</div>
	<div>
		state: {state.resp.state.state}
		<p></p>
		msg: {state.resp.state.msg}
	</div>
</div>

<style>
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
</style>
