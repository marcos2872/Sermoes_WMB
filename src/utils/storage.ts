import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

// interface IData {
//   id: string;
//   title: string;
//   details: string;
//   audio: string;
//   pdf: string;
//   audio_en: string;
// }

type IFavorites = string[];

export function toggleFavorite(id: string) {
  const favoriteExist = storage.getString('app.favorite');
  // storage.clearAll();
  if (!favoriteExist) {
    console.log('set');

    storage.set('app.favorite', JSON.stringify([id]));
    return true;
  }

  const favorites: IFavorites = JSON.parse(favoriteExist);

  if (favorites.includes(id)) {
    const newFavorites = favorites.filter(data => data !== id);
    storage.delete('app.favorite');
    storage.set('app.favorite', JSON.stringify(newFavorites));
    console.log('remove');
    return false;
  }

  const newFavorites = [...favorites, id];
  storage.delete('app.favorite');
  storage.set('app.favorite', JSON.stringify(newFavorites));
  console.log('add');

  return true;
}

export function getFavorite(id?: string) {
  const favoriteExist = storage.getString('app.favorite');

  const favorites: IFavorites = JSON.parse(favoriteExist || '');

  if (id) {
    return favorites.filter(data => data === id);
  }

  return favorites;
}
