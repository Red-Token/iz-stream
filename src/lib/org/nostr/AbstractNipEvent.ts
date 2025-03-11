import type {TrustedEvent} from '@red-token/welshman/util';

export class AbstractNipMiniMiniEvent {
	constructor(public event?: TrustedEvent) {}
}

export class AbstractNipMiniEvent extends AbstractNipMiniMiniEvent {
	constructor(
		public tags: string[][] = [],
		event?: TrustedEvent
	) {
		super(event);
	}
}

export class AbstractNipEvent extends AbstractNipMiniEvent {
	constructor(
		public description: string,
		tags: string[][] = [],
		event?: TrustedEvent
	) {
		super(tags, event);
	}
}
