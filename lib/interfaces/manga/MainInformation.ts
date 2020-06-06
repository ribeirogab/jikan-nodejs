interface Adaption {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface SideStory {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Summary {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Prequel {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

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

interface Serialization {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export default interface MainInformation {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  mal_id: number;
  url: string;
  title: string;
  title_english: string | null;
  title_synonyms: string[];
  title_japanese: string | null;
  status: string;
  image_url: string;
  type: string;
  volumes: number | null;
  chapters: number | null;
  publishing: boolean;
  published: {
    from: string;
    to: string | null;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
    };
  };
  rank: number | null;
  score: number | null;
  scored_by: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  related?: {
    Adaptation?: Adaption[];
    'Side story'?: SideStory[];
    Prequel?: Prequel[];
    Summary?: Summary[];
  };
  genres: Genre[];
  authors: Author[];
  serializations: Serialization[];
}
