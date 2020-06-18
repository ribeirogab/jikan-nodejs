import api from '../../api';

import MangaByGenre from '../../interfaces/genre/MangaByGenre';

export default async function mangasByGenre(
  mal_id: number,
  params?: { [Key: string]: number },
): Promise<MangaByGenre> {
  let url = `/search/manga?genre=${mal_id}`;

  for (const param in params) {
    if (params[param]) {
      url += `&${param}=${params[param]}`;
    }
  }

  const { data } = await api.get<MangaByGenre>(url);

  return data;
}
