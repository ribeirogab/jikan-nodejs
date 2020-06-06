import api from '../../api';

import Characters from '../../interfaces/manga/Characters';

export default async function characters(mal_id: number): Promise<Characters> {
  const { data: item } = await api.get<Characters>(
    `/manga/${mal_id}/characters`,
  );

  return item;
}
