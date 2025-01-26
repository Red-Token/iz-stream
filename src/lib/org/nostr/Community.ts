import type {SynchronisedSession} from 'iz-nostrlib';

class Id {
	constructor(public pubkey: string) {}

	sign() {}

	pay() {}
}

class Community {
	constructor(
		public name: string,
		public relays: string[],
		public image?: string
	) {}

	public sessions: SynchronisedSession[] = [];
	public id: Id | undefined;

	connect() {
		// start service to update Kind 0
	}

	// Assumes an identity inside the community
	login(id: Id) {
		// load the list of subscriptions for the community
		this.id = id;
	}

	logout() {
		// unload the list of subscriptions
	}

	disconnect() {
		// stop service to update Kind 0
	}
}
