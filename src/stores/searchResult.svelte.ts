class Asset {
    magnet: string = '';
}

class SearchResultItem {
    id: string = '';
    title: string = '';
    description: string = '';
    assets: Asset[] = [];
}

class SearchResult {
    items: SearchResultItem[] = [];
}

export const searchResult: SearchResult = $state(new SearchResult());
