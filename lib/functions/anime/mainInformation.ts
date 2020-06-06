import api from '../../api';

import MainInformation from '../../interfaces/anime/MainInformation';

export default async function mainInformation(
  mal_id: number,
): Promise<MainInformation> {
  const { data: item } = await api.get<MainInformation>(`/anime/${mal_id}`);

  return item;
}
