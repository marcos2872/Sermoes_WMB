import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TextInput, View} from 'react-native';
import {searchStyle} from './style.search';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../Theme';
import {getData, getByTitle} from '../../utils/getData';
import Card from '../../Components/Card/Card';

const Search: React.FC = ({}) => {
  const [data, setData] = useState(getData().slice(0, 10).sort());

  return (
    <SafeAreaView style={searchStyle.container}>
      <View style={searchStyle.inputView}>
        <Icon name="magnify" size={30} color={theme.colors.black} />
        <TextInput
          style={searchStyle.input}
          placeholder="Qual sermão quer ouvir?"
          onChangeText={text => {
            setData(getByTitle(text));
          }}
        />
      </View>
      <ScrollView style={searchStyle.scroll}>
        {data.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
