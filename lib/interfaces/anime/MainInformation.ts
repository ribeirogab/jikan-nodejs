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

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Licensor {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Studio {
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

export default interface MainInformation {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  mal_id: number;
  url: string;
  image_url: string;
  trailer_url: string | null;
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: {
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
  duration: string;
  rating: string;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  premiered: string;
  broadcast: string;
  related?: {
    Adaptation?: Adaption[];
    'Side story'?: SideStory[];
    Prequel?: Prequel[];
    Summary?: Summary[];
  };
  producers: Producer[];
  licensors: Licensor[];
  studios: Studio[];
  genres: Genre[];
  opening_themes: string[];
  ending_themes: string[];
}
