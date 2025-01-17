import type {HashedEvent, TrustedEvent} from "@welshman/util";

export class Nip35TorrentEvent {
    public static KIND: number = 2003;

    constructor(
        public title: string,
        public x: string,
        public description: string,
        public files: string[][],
        public trackers: string[],
        public is: string[],
        public ts: string[]) {
    }

    createTemplate() {
        const tags = [
            ['title', this.title],
            ['x', this.x],
        ];

        this.files.map(file => { return ['file', ...file]}).forEach(tag => {
            tags.push(tag);
        })

        this.trackers.map(tracker => { return ['tracker', tracker]}).forEach(tag => {
            tags.push(tag);
        })

        this.is.map(i => { return ['i', i]}).forEach(tag => {
            tags.push(tag);
        })

        this.ts.map(t => { return ['t', t]}).forEach(tag => {
            tags.push(tag);
        })

        return {
            content: JSON.stringify(this.description),
            tags
        }
    }
}

function safeFindOptionalSingleTagValue(event: TrustedEvent, tag: string): string | undefined {
    const vals = event.tags.find(t => t[0] === tag)
    return (vals === undefined || vals.length < 2) ? undefined : vals[1];
}

function safeFindOptionalMultiTagValue(event: TrustedEvent, tag: string): string[] {
    return event.tags.filter(t => t[0] === tag).map(t => t[1])
}

function safeFindOptionalMultiTagValues(event: TrustedEvent, tag: string): string[][] {
    const foundTags = event.tags.filter(t => t[0] === tag).map(t => t.splice(1))
    return foundTags.length > 0 ? foundTags : []
}

function safeFindSingleTagValue(event: TrustedEvent, tag: string): string {
    const optionalVal = safeFindOptionalSingleTagValue(event, tag);

    if (optionalVal === undefined) throw new Error(`Unknown tag "${tag}"`);
    return optionalVal;
}

export class Nip35TorrentEventBuilder {
    constructor(private event: HashedEvent) {
    }

    build() {
        return new Nip35TorrentEvent(
            safeFindSingleTagValue(this.event, 'title'),
            safeFindSingleTagValue(this.event, 'x'),
            JSON.parse(this.event.content),
            safeFindOptionalMultiTagValues(this.event, 'file'),
            safeFindOptionalMultiTagValue(this.event, 'tracker'),
            safeFindOptionalMultiTagValue(this.event, 'i'),
            safeFindOptionalMultiTagValue(this.event, 't'),
        )
    }
}

export class Nip35TorrentEventComments {
    static KIND: number = 2004;
}

// export class Nip52CalendarEvent extends AbstractNip52CalendarEvent {
//     constructor(public event: HashedEvent) {
//         super(
//             safeFindSingleTagValue(event, 'd'),
//             safeFindSingleTagValue(event, 'title'),
//             JSON.parse(event.content),
//             safeFindSingleTagValue(event, 'start'),
//             safeFindOptionalSingleTagValue(event, 'end'),
//             safeFindOptionalMultiTagValue(event, 'locations'),
//             safeFindOptionalMultiTagValue(event, 'g'),
//             safeFindOptionalMultiTagValues(event, 'participant'),
//             safeFindOptionalMultiTagValue(event, 't'),
//             safeFindOptionalMultiTagValue(event, 'r'),
//         );
//     }
// }
//
// function getEnumFromValue<T>(enm: Object, value: string | undefined): T | undefined {
//     return Object.values(enm).find((enumValue) => enumValue === value) as T | undefined;
// }
//
// function getSafeEnumFromValue<T>(enm: Object, value: string): T {
//     const res = getEnumFromValue<T>(enm, value);
//
//     if (res === undefined)
//         throw new Error('Not so fast')
//
//     return res
// }
