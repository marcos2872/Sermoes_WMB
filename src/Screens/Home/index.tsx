import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {homeStyle} from './style.home';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={homeStyle.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
