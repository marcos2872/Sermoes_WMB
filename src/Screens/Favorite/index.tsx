import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {favoriteStyle} from './style.favorite';
import {IData} from '../../Interfaces/IData';
import {getData} from '../../utils/getData';
import {getFavorite} from '../../utils/storage';
import Card from '../../Components/Card/Card';

const Favorite: React.FC = () => {
  const [favorites, setFavorites] = useState<IData[] | []>([]);
  useEffect(() => {
    const data = getData();
    const favoritesIds = getFavorite();

    setFavorites(data.filter(item => favoritesIds.includes(item.id)));
  }, []);
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
