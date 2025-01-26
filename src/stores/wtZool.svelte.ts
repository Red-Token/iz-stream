import SimplePeer from 'simple-peer/simplepeer.min';
import WebTorrent from 'webtorrent/dist/webtorrent.min';

const rtcConfig = {
	iceServers: [
		{
			urls: ['turn:turn.stream.labs.h3.se'],
			username: 'test',
			credential: 'testme'
		},
		{
			urls: ['stun:stun.stream.labs.h3.se'],
			username: 'test',
			credential: 'testme'
		}
	],
	iceTransportPolicy: 'all',
	iceCandidatePoolSize: 0
};

export const wt = new WebTorrent({
	tracker: {
		rtcConfig: {
			...SimplePeer.config,
			...rtcConfig
		}
	}
});

let options = {
	announce: ['wss://tracker.webtorrent.dev'],
	maxWebConns: 500
};

navigator.serviceWorker.register('/sw.min.js', {scope: '/'}).then((reg) => {
	console.log('I am service worker!');

	const worker = reg.active || reg.waiting || reg.installing;

	if (worker === null) throw new Error('Service worker not available!');

	function checkState(worker: ServiceWorker | null): boolean {
		console.log('Check state');
		return worker !== null && worker.state === 'activated' && wt.createServer({controller: reg}) !== null;
	}

	if (!checkState(worker)) {
		worker.addEventListener('statechange', ({target}) => checkState(target as ServiceWorker | null));
	}
});
