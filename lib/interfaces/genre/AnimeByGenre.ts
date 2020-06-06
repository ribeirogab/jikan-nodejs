interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Anime {
  mal_id: number;
  url: string;
  title: string;
  image_url: string;
  synopsis: string;
  type: string;
  airing_start: string;
  episodes: number | null;
  members: number | null;
  genres: Genre[];
  source: string;
  producers: Producer[];
  score: number | null;
  licensors: string[];
  r18: boolean;
  kids: boolean;
}

export default interface AnimeByGenre {
  request_hash: string;
  request_cached: true;
  request_cache_expiry: number;
  mal_url: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  };
  item_count: number;
  anime: Anime[];
}
