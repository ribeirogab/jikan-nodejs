import api from '../api';

export default async function itemsById(
  type: 'anime' | 'manga',
  mal_ids: number[],
): Promise<object[]> {
  const items: object[] = [];

  for (let i = 0; i < mal_ids.length; i += 1) {
    const { data: item } = await api.get(`/${type}/${mal_ids[i]}`);

    items.push(item);
  }

  return items;
}
