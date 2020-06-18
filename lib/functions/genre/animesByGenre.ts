import api from '../../api';

import AnimeByGenre from '../../interfaces/genre/AnimeByGenre';

export default async function animesByGenre(
  id: number,
  params?: { [Key: string]: number },
): Promise<AnimeByGenre> {
  let url = `/search/anime?genre=${id}`;

  for (const param in params) {
    if (params[param]) {
      url += `&${param}=${params[param]}`;
    }
  }

  const { data } = await api.get<AnimeByGenre>(url);

  return data;
}
