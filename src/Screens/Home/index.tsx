import React from 'react';
import {Image, Linking, SafeAreaView, Text, View} from 'react-native';
import homeStyle from './style.home';
import {TouchableOpacity} from 'react-native';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={homeStyle.container}>
      <View style={homeStyle.wmb}>
        <Text style={homeStyle.title}>William Branham</Text>
        <Image
          source={require('../../Assets/images/wbranham.jpg')}
          alt="foto do profeta"
          style={homeStyle.image}
        />
        <TouchableOpacity
          onPress={() => {
            Linking.canOpenURL('https://branham.org/pt/williambranham').then(
              () => {
                Linking.openURL('https://branham.org/pt/williambranham');
              },
            );
          }}>
          <Text style={homeStyle.link}>
            Clique aqui para saber mais sobre William Branham
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
