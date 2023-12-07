import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {playerStyle} from './style.player';

// import { Container } from './styles';

const Player: React.FC = () => {
  return (
    <SafeAreaView style={playerStyle.container}>
      <Text>Player</Text>
    </SafeAreaView>
  );
};

export default Player;
