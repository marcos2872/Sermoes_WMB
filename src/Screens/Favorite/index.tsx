import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {favoriteStyle} from './style.favorite';

// import { Container } from './styles';

const Favorite: React.FC = () => {
  return (
    <SafeAreaView style={favoriteStyle.container}>
      <Text>Favoriote</Text>
    </SafeAreaView>
  );
};

export default Favorite;
