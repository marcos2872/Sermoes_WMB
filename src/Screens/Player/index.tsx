import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {playerStyle} from './style.player';
import {useNavigation, useRoute} from '@react-navigation/native';

// import { Container } from './styles';

const Player: React.FC = () => {
  const navigate = useNavigation();
  const {
    params: {url},
  } = useRoute() as {params: {url: string}};

  console.log(url);

  return (
    <SafeAreaView style={playerStyle.container}>
      <Text>Player</Text>
    </SafeAreaView>
  );
};

export default Player;
