import {AbstractNipMiniEvent} from '$lib/org/nostr/AbstractNipEvent';
import type {HashedEvent, TrustedEvent} from '@welshman/util';
import type {NostrProfileMetaData} from '$lib/org/nostr/nip01/NostrProfileMetaData';

export class Nip01UserMetaDataEvent extends AbstractNipMiniEvent {
	public static KIND: number = 0;

	constructor(
		public profile: NostrProfileMetaData,
		tags: string[][] = [],
		event?: TrustedEvent
	) {
		super(tags, event);
	}

	createTemplate() {
		const tags = [...this.tags];

		return {
			content: JSON.stringify(this.profile),
			tags
		};
	}
}

export class Nip01UserMetaDataEventBuilder {
	constructor(private event: HashedEvent) {}

	build() {
		return new Nip01UserMetaDataEvent(JSON.parse(this.event.content), [], this.event);
	}
}
