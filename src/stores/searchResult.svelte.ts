export class Asset {
	magnet: string = '';
}

export class Episode {
	data: any = $state({});
}

export class Season {
	id: number = $state(0);
	episodes: Episode[] = $state([]);
	data: any = $state({});
}

export class SearchResultItem {
	id: string = '';
	title: string = '';
	description: string = '';
	imdbResult: any = $state();
	seasons: Season[] = $state([]);
	assets: Asset[] = $state([]);
}

export class SearchResult {
	items: SearchResultItem[] = $state([]);
}

export const searchResult: SearchResult = $state(new SearchResult());
