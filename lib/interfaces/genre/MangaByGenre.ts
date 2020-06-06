interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Author {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Manga {
  mal_id: number;
  url: string;
  title: string;
  image_url: string;
  synopsis: string;
  type: string;
  publishing_start: string;
  volumes: number | null;
  members: number | null;
  genres: Genre[];
  authors: Author[];
  score: number | null;
  serialization: string[];
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
  manga: Manga[];
}
