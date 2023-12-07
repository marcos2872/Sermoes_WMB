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

const Search: React.FC = () => {
  const [data, setData] = useState(sermoes.sort());

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
                <TouchableOpacity disabled={!item.audio}>
                  <Icon
                    name="music"
                    size={30}
                    color={
                      item.audio ? theme.colors.white : theme.colors.white3
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity disabled={!item.pdf}>
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
