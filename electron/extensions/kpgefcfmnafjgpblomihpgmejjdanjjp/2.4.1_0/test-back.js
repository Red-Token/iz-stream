// Background service worker script (background.js)

// Listen for when the extension is installed or updated
// import {getPermissionStatus, getPosition, NO_PERMISSIONS_REQUIRED, showNotification} from './common.js';
// import * as nip19 from 'nostr-tools/nip19';
// import {finalizeEvent, getPublicKey, validateEvent} from 'nostr-tools/pure';
// import * as nip04 from 'nostr-tools/nip04';
// import * as nip44 from 'nostr-tools/nip44';

// import {NO_PERMISSIONS_REQUIRED} from './common.js';

const NO_PERMISSIONS_REQUIRED = {
	replaceURL: true
}

chrome.runtime.onInstalled.addListener(() => {
	console.log('Extension installed!' + NO_PERMISSIONS_REQUIRED.replaceURL);
});

// Listen for messages from other parts of the extension (e.g., content scripts or popup)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log('Received message:', message);

	if (message.type === 'getPublicKey') {
		sendResponse('I am BOB!');
	}

	return true; // Required if response is async
});

// async function handleContentScriptMessage({type, params, host}) {
// 	if (NO_PERMISSIONS_REQUIRED[type]) {
// 		// authorized, and we won't do anything with private key here, so do a separate handler
// 		switch (type) {
// 			case 'replaceURL': {
// 				let {protocol_handler: ph} = await chrome.storage.local.get(['protocol_handler']);
// 				if (!ph) return false;
//
// 				let {url} = params;
// 				let raw = url.split('nostr:')[1];
// 				let {type, data} = nip19.decode(raw);
// 				let replacements = {
// 					raw,
// 					hrp: type,
// 					hex:
// 						type === 'npub' || type === 'note'
// 							? data
// 							: type === 'nprofile'
// 								? data.pubkey
// 								: type === 'nevent'
// 									? data.id
// 									: null,
// 					p_or_e: {npub: 'p', note: 'e', nprofile: 'p', nevent: 'e'}[type],
// 					u_or_n: {npub: 'u', note: 'n', nprofile: 'u', nevent: 'n'}[type],
// 					relay0: type === 'nprofile' ? data.relays[0] : null,
// 					relay1: type === 'nprofile' ? data.relays[1] : null,
// 					relay2: type === 'nprofile' ? data.relays[2] : null
// 				};
// 				let result = ph;
// 				Object.entries(replacements).forEach(([pattern, value]) => {
// 					result = result.replace(new RegExp(`{ *${pattern} *}`, 'g'), value);
// 				});
//
// 				return result;
// 			}
// 		}
//
// 		return;
// 	} else {
// 		// acquire mutex here before reading policies
// 		let releasePromptMutex = await promptMutex.acquire();
//
// 		let allowed = await getPermissionStatus(host, type, type === 'signEvent' ? params.event : undefined);
//
// 		if (allowed === true) {
// 			// authorized, proceed
// 			releasePromptMutex();
// 			showNotification(host, allowed, type, params);
// 		} else if (allowed === false) {
// 			// denied, just refuse immediately
// 			releasePromptMutex();
// 			showNotification(host, allowed, type, params);
// 			return {
// 				error: 'denied'
// 			};
// 		} else {
// 			// ask for authorization
// 			try {
// 				let id = Math.random().toString().slice(4);
// 				let qs = new URLSearchParams({
// 					host,
// 					id,
// 					params: JSON.stringify(params),
// 					type
// 				});
// 				// center prompt
// 				const {top, left} = await getPosition(width, height);
// 				// prompt will be resolved with true or false
// 				let accept = await new Promise((resolve, reject) => {
// 					let openPrompt = {resolve, reject};
//
// 					chrome.windows.create({
// 						url: `${chrome.runtime.getURL('prompt.html')}?${qs.toString()}`,
// 						type: 'popup',
// 						width: width,
// 						height: height,
// 						top: top,
// 						left: left
// 					});
// 				});
//
// 				// denied, stop here
// 				if (!accept) return {error: 'denied'};
// 			} catch (err) {
// 				// errored, stop here
// 				releasePromptMutex();
// 				return {
// 					error: `error: ${err}`
// 				};
// 			}
// 		}
// 	}
//
// 	// if we're here this means it was accepted
// 	let results = await chrome.storage.local.get('private_key');
// 	if (!results || !results.private_key) {
// 		return {error: 'no private key found'};
// 	}
//
// 	let sk = results.private_key;
//
// 	try {
// 		switch (type) {
// 			case 'getPublicKey': {
// 				return getPublicKey(sk);
// 			}
// 			case 'getRelays': {
// 				let results = await chrome.storage.local.get('relays');
// 				return results.relays || {};
// 			}
// 			case 'signEvent': {
// 				const event = finalizeEvent(params.event, sk);
//
// 				return validateEvent(event) ? event : {error: {message: 'invalid event'}};
// 			}
// 			case 'nip04.encrypt': {
// 				let {peer, plaintext} = params;
// 				return nip04.encrypt(sk, peer, plaintext);
// 			}
// 			case 'nip04.decrypt': {
// 				let {peer, ciphertext} = params;
// 				return nip04.decrypt(sk, peer, ciphertext);
// 			}
// 			case 'nip44.encrypt': {
// 				const {peer, plaintext} = params;
// 				const key = getSharedSecret(sk, peer);
//
// 				return nip44.v2.encrypt(plaintext, key);
// 			}
// 			case 'nip44.decrypt': {
// 				const {peer, ciphertext} = params;
// 				const key = getSharedSecret(sk, peer);
//
// 				return nip44.v2.decrypt(ciphertext, key);
// 			}
// 		}
// 	} catch (error) {
// 		return {error: {message: error.message, stack: error.stack}};
// 	}
// }
