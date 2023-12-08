import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {searchStyle} from './style.search';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../Theme';
import sermoes from '../../../sermons.json';
import {useNavigation} from '@react-navigation/native';

const Search: React.FC = ({}) => {
  const [data, setData] = useState(sermoes.slice(0, 10).sort());

  const {navigate} = useNavigation() as {
    navigate: (
      name: string,
      params: {url: string | null; title?: string},
    ) => void;
  };

  return (
    <SafeAreaView style={searchStyle.container}>
      <View style={searchStyle.inputView}>
        <Icon name="magnify" size={30} color={theme.colors.black} />
        <TextInput
          style={searchStyle.input}
          placeholder="Qual sermão quer ouvir?"
          onChangeText={text => {
            setData(sermoes.filter(({title}) => title.includes(text)));
          }}
        />
      </View>
      <ScrollView style={searchStyle.scroll}>
        {data.map(item => (
          <View key={item.datails} style={searchStyle.card}>
            <Image
              source={require('../../Assets/images/wbranham.jpg')}
              alt="foto do profeta"
              style={searchStyle.image}
            />
            <View style={searchStyle.textContainer}>
              <Text
                style={searchStyle.title}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.title}
              </Text>
              <View style={searchStyle.iconContainer}>
                <TouchableOpacity
                  disabled={!item.audio}
                  onPress={() => {
                    navigate('player', {url: item.audio, title: item.title});
                  }}>
                  <Icon
                    name="music"
                    size={30}
                    color={
                      item.audio ? theme.colors.white : theme.colors.white3
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!item.pdf}
                  onPress={() => {
                    navigate('pdf', {url: item.pdf});
                  }}>
                  <Icon
                    name="file-pdf-box"
                    size={30}
                    color={item.pdf ? theme.colors.white : theme.colors.white3}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
