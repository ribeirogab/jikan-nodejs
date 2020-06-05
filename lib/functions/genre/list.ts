import api from '../../api';

export default async function list(
  type: 'anime' | 'manga',
  id: number,
  limit?: number,
  page?: number,
): Promise<object[]> {
  const { data } = await api.get(`/genre/${type}/${id}/${page || ''}`);

  if (limit) {
    const items: object[] = [];

    for (let i = 0; i < limit; i += 1) {
      items.push(data[type][i]);
    }

    return items;
  }

  return data[type];
}
