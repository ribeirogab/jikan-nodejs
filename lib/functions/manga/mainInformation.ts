import api from '../../api';

import MainInformation from '../../interfaces/manga/MainInformation';

export default async function mainInformation(
  mal_id: number,
): Promise<MainInformation> {
  const { data: item } = await api.get<MainInformation>(`/manga/${mal_id}`);

  return item;
}
