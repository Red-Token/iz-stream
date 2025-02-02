<script lang="ts">
	import {onMount} from 'svelte';

	let file: File | null = null;

	// const socket = new WebSocket('ws://localhost:3400');
	const socket = new WebSocket('wss://seeder.pre-alfa.iz-collaborator.com/ws');

	onMount(() => {

		socket.addEventListener('message', (event) => {
			const message = JSON.parse(event.data);
			console.log(message);
		});

		socket.addEventListener('open', () => {
			console.log('Open');
		});
	});

	// Handle file selection
	const handleFileChange = (event: Event) => {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files[0]) {
			file = input.files[0];
		}
	};

	// Handle form submission
	const handleSubmit = async () => {
		if (!file) {
			alert('Please select a file.');
			return;
		}

		// Create a FormData object
		const formData = new FormData();
		formData.append('file', file);

		try {
			// Send the file to the REST API
			// const response = await fetch('http://localhost:3000/api/upload', {
			const endpoint = 'https://seeder.pre-alfa.iz-collaborator.com/api/upload'
			console.log("trying to connect to" + endpoint);
			const response = await fetch(endpoint, {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				const result = await response.json();
				console.log('File uploaded successfully:', result);

				socket.send(JSON.stringify({type: 'progress-request', id: result.id}));

			} else {
				console.error('Failed to upload file:', response.statusText);
				alert('Failed to upload file.');
			}
		} catch (error) {
			console.error('Error uploading file:', error);
			alert('Error uploading file.');
		}
	};
</script>
<div>

	<h1>File Upload Form</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<div>
			<label for="file">Choose a file:</label>
			<input type="file" id="file" name="file" on:change={handleFileChange} />
		</div>
		<button type="submit" class="update-btn">Upload</button>
	</form>

</div>
