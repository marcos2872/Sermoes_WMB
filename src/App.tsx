import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
