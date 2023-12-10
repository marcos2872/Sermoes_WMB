import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';
import {StatusBar} from 'react-native';
import TrackPlayer, {Capability} from 'react-native-track-player';
import {theme} from './Theme';

function App(): JSX.Element {
  useEffect(() => {
    TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions({
      capabilities: [Capability.Play, Capability.Pause],
      compactCapabilities: [Capability.Play, Capability.Pause],
      notificationCapabilities: [Capability.Play, Capability.Pause],
    });
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle={'default'} backgroundColor={theme.colors.black} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
