import api from '../../api';

import MangaByGenre, { Manga } from '../../interfaces/genre/MangaByGenre';

export default async function mangaByGenre(
  mal_id: number,
  limit?: number,
  page?: number,
): Promise<MangaByGenre> {
  const { data } = await api.get<MangaByGenre>(
    `/genre/manga/${mal_id}/${page || ''}`,
  );

  if (limit) {
    const items: Manga[] = [];

    for (let i = 0; i < limit; i += 1) {
      items.push(data.manga[i]);
    }

    data.manga = items;
  }

  return data;
}
