export class Asset {
    magnet: string = '';
}

export class Episode {
    data: any = ''
}

export class Season {
    id: number = 0;
    episodes: Episode[] = $state([])
    data: any = ''
}

class SearchResultItem {
    id: string = '';
    title: string = '';
    description: string = '';
    imdbResult: any;
    seasons: Season[] = $derived([]);
    assets: Asset[] = $state([]);
}

class SearchResult {
    items: SearchResultItem[] = [];
}

export const searchResult: SearchResult = $state(new SearchResult())

