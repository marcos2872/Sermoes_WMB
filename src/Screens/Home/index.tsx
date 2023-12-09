import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import homeStyle from './style.home';
import axios from 'axios';

interface ISalmos {
  text: string;
  chapter: string;
  number: string;
}

const Home: React.FC = () => {
  const [salmos, setSalmos] = useState<ISalmos>();

  useEffect(() => {
    axios
      .get('https://www.abibliadigital.com.br/api/verses/nvi/sl/random', {})
      .then(({data}) => {
        setSalmos({
          chapter: data.chapter,
          text: data.text,
          number: data.number,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView style={homeStyle.container}>
      <View style={homeStyle.salmoContainer}>
        <Text style={homeStyle.title}>Salmo do Dia</Text>
        <Text
          style={
            homeStyle.text
          }>{`${salmos?.text} Salmos ${salmos?.chapter}:${salmos?.number}`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
