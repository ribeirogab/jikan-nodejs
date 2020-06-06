import api from '../../api';

import AnimeByGenre, { Anime } from '../../interfaces/genre/AnimeByGenre';

export default async function animeByGenre(
  id: number,
  limit?: number,
  page?: number,
): Promise<AnimeByGenre> {
  const { data } = await api.get<AnimeByGenre>(
    `/genre/anime/${id}/${page || ''}`,
  );

  if (limit) {
    const items: Anime[] = [];

    for (let i = 0; i < limit; i += 1) {
      items.push(data.anime[i]);
    }

    data.anime = items;
  }

  return data;
}
