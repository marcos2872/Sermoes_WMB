import React, {useCallback, useEffect} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {playerStyle} from './style.player';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../Theme';
import TrackPlayer, {State} from 'react-native-track-player';

const Player: React.FC = () => {
  const navigate = useNavigation();
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
      TrackPlayer.removeUpcomingTracks()
    };
  }, [track]);

  const play = useCallback(() => {
    TrackPlayer.play();
  }, []);

  const pause = useCallback(() => {
    TrackPlayer.pause();
  }, []);

  return (
    <SafeAreaView style={playerStyle.container}>
      <TouchableOpacity onPress={play}>
        <Icon name="play" size={30} color={theme.colors.white} />
      </TouchableOpacity>
      <TouchableOpacity onPress={pause}>
        <Icon name="pause" size={30} color={theme.colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Player;
