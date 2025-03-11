async function callImdbApi(url: string) {
	const res = await fetch(url);
	if (res.ok) return await res.json();

	throw new Error('Could not find info');
}

export class ImdbApi {
	api = 'https://imdb.stream.labs.h3.se';

	async getInfo(imdbId: string) {
		return callImdbApi(`${this.api}/info/${imdbId}`);
	}

	async getInfoOnSeason(imdbId: string, season: number) {
		return callImdbApi(`${this.api}/info/${imdbId}/${season}`);
	}

	async getInfoOnEpisode(imdbId: string, season: number, episode: number) {
		return callImdbApi(`${this.api}/info/${imdbId}/${season}/${episode}`);
	}

	async searchTitle(title: string) {
		return callImdbApi(`${this.api}/search?title=${title}`);
	}
}

const imdbApi = new ImdbApi();
export default imdbApi;
