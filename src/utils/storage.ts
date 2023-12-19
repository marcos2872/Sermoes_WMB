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
    storage.set('app.favorite', JSON.stringify([id]));
    return true;
  }

  const favorites: IFavorites = JSON.parse(favoriteExist);

  if (favorites.includes(id)) {
    const newFavorites = favorites.filter(data => data !== id);
    storage.delete('app.favorite');
    storage.set('app.favorite', JSON.stringify(newFavorites));
    return false;
  }

  const newFavorites = [...favorites, id];
  storage.delete('app.favorite');
  storage.set('app.favorite', JSON.stringify(newFavorites));

  return true;
}

export function getFavorite(id?: string) {
  const favoriteExist = storage.getString('app.favorite');

  const favorites: IFavorites = JSON.parse(favoriteExist || '[]');

  if (id) {
    return favorites.filter(data => data === id);
  }

  return favorites;
}

export function setProgressPosition(id: string, position: number): void {
  const progressPosition = storage.getString('app.progressPosition');

  if (!progressPosition) {
    storage.set(
      'app.progressPosition',
      JSON.stringify([
        {
          id,
          position,
        },
      ]),
    );
  }

  const progress: {id: string; position: number}[] = JSON.parse(
    progressPosition || '',
  );

  const alreadyExist = progress.some(data => data.id === id);

  if (alreadyExist) {
    const newProgress = progress.map(data => {
      if (data.id === id) {
        return {
          ...data,
          position,
        };
      }
      return data;
    });
    storage.set('app.progressPosition', JSON.stringify(newProgress));
    return;
  }

  storage.set(
    'app.progressPosition',
    JSON.stringify([...progress, {id, position}]),
  );
}

export function getProgressPosition(id: string) {
  const progressPosition = storage.getString('app.progressPosition');

  if (!progressPosition) {
    return undefined;
  }

  const progress: {id: string; position: number}[] =
    JSON.parse(progressPosition);

  return progress.find(data => data.id === id)?.position;
}
