interface Actor {
  mal_id: number;
  name: string;
  url: string;
  image_url: string;
  language: string;
}

interface Character {
  mal_id: number;
  url: string;
  image_url: string;
  name: string;
  role: string;
  voice_actors: Actor[];
}

interface Staff {
  mal_id: number;
  url: string;
  image_url: string;
  positions: string[];
}

export default interface CharactersAndStaff {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  characters: Character[];
  staff: Staff[];
}
