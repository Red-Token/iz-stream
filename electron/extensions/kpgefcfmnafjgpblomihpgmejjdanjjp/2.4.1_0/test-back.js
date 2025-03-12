chrome.runtime.onInstalled.addListener(() => {
	console.log('Extension installed!');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log('Hevreka!');

	if (message.action === 'fetchData') {
		sendResponse({data: 'Hello from service worker!'});
	}

	// sendResponse({data: 'Hello from service worker2jksdfjksd!'});
});
