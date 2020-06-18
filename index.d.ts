import AnimeMainInformation from './lib/interfaces/anime/MainInformation';
import AnimeCharactersAndStaff from './lib/interfaces/anime/CharactersAndStaff';
import MangaMainInformation from './lib/interfaces/manga/MainInformation';
import MangaCharacters from './lib/interfaces/manga/Characters';
import GenreAnimeByGenre from './lib/interfaces/genre/AnimeByGenre';
import GenreMangaByGenre from './lib/interfaces/genre/MangaByGenre';

declare module 'jikan-nodejs' {
  export function itemById(
    type: string,
    mal_id: number,
  ): Promise<AnimeMainInformation | MangaMainInformation>;

  namespace anime {
    export function mainInformation(
      mal_id: number,
    ): Promise<AnimeMainInformation>;
    export function charactersAndStaff(
      mal_id: number,
    ): Promise<AnimeCharactersAndStaff>;
  }

  namespace manga {
    export function mainInformation(
      mal_id: number,
    ): Promise<MangaMainInformation>;
    export function characters(mal_id: number): Promise<MangaCharacters>;
  }

  namespace genre {
    export function animesByGenre(
      mal_id: number,
      params?: { [Key: string]: number },
    ): Promise<GenreAnimeByGenre>;
    export function mangasByGenre(
      mal_id: number,
      params?: { [Key: string]: number },
    ): Promise<GenreMangaByGenre>;
  }
}
