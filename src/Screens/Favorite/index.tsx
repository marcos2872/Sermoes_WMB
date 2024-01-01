import React, {useCallback, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {favoriteStyle} from './style.favorite';
import {IData} from '../../Interfaces/IData';
import {getData} from '../../utils/getData';
import {getFavorite} from '../../utils/storage';
import Card from '../../Components/Card/Card';
import {useFocusEffect} from '@react-navigation/native';

const Favorite: React.FC = () => {
  const [favorites, setFavorites] = useState<IData[] | []>([]);

  const getFavorites = useCallback(() => {
    const data = getData();

    const favoritesIds = getFavorite() as string[];

    setFavorites(data.filter(item => favoritesIds.includes(item.id)));
  }, []);

  useFocusEffect(
    useCallback(() => {
      getFavorites();

      return () => {
        setFavorites([]);
      };
    }, [getFavorites]),
  );
  return (
    <SafeAreaView style={favoriteStyle.container}>
      <ScrollView>
        {favorites.map(data => (
          <Card key={data.id} data={data} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorite;
