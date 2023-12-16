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
import {getData, getByTitle} from '../../utils/getData';
import {useNavigation} from '@react-navigation/native';

const Search: React.FC = ({}) => {
  const [data, setData] = useState(getData().slice(0, 10).sort());

  const {navigate} = useNavigation() as {
    navigate: (
      name: string,
      params: {
        url: string | null;
        title?: string;
        details?: string;
        id?: string;
      },
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
            setData(getByTitle(text));
          }}
        />
      </View>
      <ScrollView style={searchStyle.scroll}>
        {data.map(item => (
          <View key={item.id} style={searchStyle.card}>
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
                <Text
                  style={searchStyle.year}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {`19${item.details.split(' ')[1].slice(0, 2)}`}
                </Text>
                <TouchableOpacity
                  style={searchStyle.buttonAudio}
                  disabled={!item.audio}
                  onPress={() => {
                    navigate('player', {
                      id: item.id,
                      url: item.audio,
                      title: item.title,
                      details: item.details,
                    });
                  }}>
                  <Text style={searchStyle.year}>Port</Text>
                  <Icon
                    name="music"
                    size={30}
                    color={
                      item.audio ? theme.colors.white : theme.colors.white3
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={searchStyle.buttonAudio}
                  disabled={!item.audio_en}
                  onPress={() => {
                    navigate('player', {
                      id: item.id,
                      url: item.audio_en || '',
                      title: item.title,
                      details: item.details,
                    });
                  }}>
                  <Text style={searchStyle.year}>Eng-Port</Text>
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
