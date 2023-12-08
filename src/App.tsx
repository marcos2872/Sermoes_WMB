import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';
import {StatusBar} from 'react-native';
import TrackPlayer from 'react-native-track-player';

function App(): JSX.Element {
  useEffect(() => {
    TrackPlayer.setupPlayer();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle={'default'} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
