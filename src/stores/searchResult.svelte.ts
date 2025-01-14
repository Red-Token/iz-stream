export class Asset {
    magnet: string = '';
}

export class Episode {
    data: any = ''
}

export class Season {
    episodes: Episode[] = $state([])
    data: any = ''
}

class SearchResultItem {
    id: string = '';
    title: string = '';
    description: string = '';
    imdbResult: any;
    seasons: Season[] = $state([]);
    assets: Asset[] = [];
}

export class SearchResult {
    items: SearchResultItem[] = [];
}

export const searchResult: SearchResult = $state(new SearchResult());
