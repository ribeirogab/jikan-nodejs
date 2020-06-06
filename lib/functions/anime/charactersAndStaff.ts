import api from '../../api';
import CharactersAndStaff from '../../interfaces/anime/CharactersAndStaff';

export default async function charactersAndStaff(
  mal_id: number,
): Promise<CharactersAndStaff> {
  const { data: item } = await api.get<CharactersAndStaff>(
    `/anime/${mal_id}/characters_staff`,
  );

  return item;
}
