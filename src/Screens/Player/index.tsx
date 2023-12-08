import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {playerStyle} from './style.player';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../Theme';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {convertTime} from '../../utils/convertTime';
import Slider from '@react-native-community/slider';

const Player: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const navigate = useNavigation();
  const progress = useProgress();
  const {
    params: {url, title},
  } = useRoute() as {params: {url: string; title: string}};

  const track = useCallback(async () => {
    await TrackPlayer.add([
      {
        url,
        title,
      },
    ]);
  }, [url, title]);

  useEffect(() => {
    track();

    return () => {
      console.log('close');
      TrackPlayer.remove([0]);
      TrackPlayer.removeUpcomingTracks();
    };
  }, [track]);

  const play = useCallback(async () => {
    await TrackPlayer.play();
    setPlaying(true);
  }, []);

  const pause = useCallback(async () => {
    await TrackPlayer.pause();
    setPlaying(false);
  }, []);

  const Track = useCallback(
    () => (
      <View style={playerStyle.trackView}>
        <Image
          source={require('../../Assets/images/wbranham.jpg')}
          alt="foto do profeta"
          style={playerStyle.image}
        />

        <Text style={playerStyle.title}>{title}</Text>

        <View style={{width: '90%'}}>
          <Slider
            maximumValue={progress.duration}
            minimumValue={0}
            maximumTrackTintColor={theme.colors.white3}
            minimumTrackTintColor={theme.colors.white}
            value={progress.position}
            onValueChange={value => {
              TrackPlayer.seekTo(value);
            }}
            style={playerStyle.slider}
          />
          <View style={playerStyle.progress}>
            <Text style={playerStyle.text}>
              {convertTime(progress.position * 1000)}
            </Text>

            <Text style={playerStyle.text}>
              {convertTime(progress.duration * 1000)}
            </Text>
          </View>
        </View>

        <View style={playerStyle.track}>
          {playing ? (
            <TouchableOpacity onPress={pause}>
              <Icon name="pause" size={50} color={theme.colors.white} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={play}>
              <Icon name="play" size={50} color={theme.colors.white} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    ),
    [pause, play, playing, progress, title],
  );

  return (
    <SafeAreaView style={playerStyle.container}>
      {progress.duration ? (
        <>
          <TouchableOpacity
            onPress={() => {
              navigate.goBack();
            }}
            style={playerStyle.goBack}>
            <Icon
              name="subdirectory-arrow-left"
              size={25}
              color={theme.colors.white}
            />
          </TouchableOpacity>
          <Track />
        </>
      ) : (
        <ActivityIndicator size={40} />
      )}
    </SafeAreaView>
  );
};

export default Player;
