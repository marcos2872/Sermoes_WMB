import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {cardStyle} from './style.card';
import {IData} from '../../Interfaces/IData';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../Theme';

const Card: React.FC<{data: IData}> = ({data}) => {
  const {navigate} = useNavigation() as {
    navigate: (
      name: string,
      params: {
        url: string | undefined;
        title?: string;
        details?: string;
        id?: string;
      },
    ) => void;
  };

  return (
    <View key={data.id} style={cardStyle.card}>
      <Image
        source={require('../../Assets/images/wbranham.jpg')}
        alt="foto do profeta"
        style={cardStyle.image}
      />
      <View style={cardStyle.textContainer}>
        <Text style={cardStyle.title} numberOfLines={1} ellipsizeMode="tail">
          {data.title}
        </Text>
        <View style={cardStyle.iconContainer}>
          <Text style={cardStyle.year} numberOfLines={1} ellipsizeMode="tail">
            {`19${data.details.split(' ')[1].slice(0, 2)}`}
          </Text>
          <TouchableOpacity
            style={cardStyle.buttonAudio}
            disabled={!data.audio}
            onPress={() => {
              navigate('player', {
                id: data.id,
                url: data.audio,
                title: data.title,
                details: data.details,
              });
            }}>
            <Text style={cardStyle.year}>Port</Text>
            <Icon
              name="music"
              size={30}
              color={data.audio ? theme.colors.white : theme.colors.white3}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={cardStyle.buttonAudio}
            disabled={!data.audio_en}
            onPress={() => {
              navigate('player', {
                id: data.id,
                url: data.audio_en || '',
                title: data.title,
                details: data.details,
              });
            }}>
            <Text style={cardStyle.year}>Eng-Port</Text>
            <Icon
              name="music"
              size={30}
              color={data.audio ? theme.colors.white : theme.colors.white3}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!data.pdf}
            onPress={() => {
              navigate('pdf', {url: data.pdf, id: data.id});
            }}>
            <Icon
              name="file-pdf-box"
              size={30}
              color={data.pdf ? theme.colors.white : theme.colors.white3}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
