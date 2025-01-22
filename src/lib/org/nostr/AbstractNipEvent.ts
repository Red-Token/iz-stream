import type {TrustedEvent} from "@welshman/util";

export class AbstractNipMiniEvent {
    constructor(
        public tags: string[][] = [],
        public event?: TrustedEvent
    ) {
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
