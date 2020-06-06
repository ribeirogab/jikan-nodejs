import api from '../api';

import AnimeMainInformation from '../interfaces/anime/MainInformation';
import MangaMainInformation from '../interfaces/manga/MainInformation';

export default async function itemsById(
  type: 'anime' | 'manga',
  mal_id: number,
): Promise<AnimeMainInformation | MangaMainInformation> {
  const { data: item } = await api.get<
    AnimeMainInformation | MangaMainInformation
  >(`/${type}/${mal_id}`);

  return item;
}
