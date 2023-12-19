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
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import {convertTime} from '../../utils/convertTime';
import Slider from '@react-native-community/slider';
import {
  toggleFavorite,
  getFavorite,
  getProgressPosition,
  setProgressPosition,
} from '../../utils/storage';

let time = 0;

const Player: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigation();
  const progress = useProgress();
  const playBackState = usePlaybackState();
  const {
    params: {url, title, id},
  } = useRoute() as {
    params: {url: string; title: string; details: string; id: string};
  };

  const track = useCallback(async () => {
    await TrackPlayer.add([
      {
        url,
        title,
      },
    ]);
    await TrackPlayer.pause();
    TrackPlayer.setVolume(1);
  }, [url, title]);

  useEffect(() => {
    track();
    const isFavorite = getFavorite(id);

    setFavorite(!!isFavorite.length);

    TrackPlayer.seekTo(getProgressPosition(url) || 0);

    return () => {
      setProgressPosition(url, time);
      TrackPlayer.stop();
      TrackPlayer.remove([0]);
      TrackPlayer.removeUpcomingTracks();
    };
  }, [track, url, id]);

  useEffect(() => {
    setPlaying(playBackState.state === State.Playing);
  }, [playBackState]);

  const togglePlayback = useCallback(async () => {
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      setPlaying(false);
      return await TrackPlayer.pause();
    }
    setPlaying(true);
    return await TrackPlayer.play();
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
          <TouchableOpacity
            style={playerStyle.track_button}
            onPress={async () => {
              if (speed === 1) {
                await TrackPlayer.setRate(1.5);
                return setSpeed(1.5);
              }
              if (speed === 1.5) {
                await TrackPlayer.setRate(2);
                return setSpeed(2);
              }
              if (speed === 2) {
                await TrackPlayer.setRate(0.5);
                return setSpeed(0.5);
              }
              await TrackPlayer.setRate(1);
              return setSpeed(1);
            }}>
            <Text style={playerStyle.text}>{speed}x</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={playerStyle.track_button}
            onPress={() => {
              TrackPlayer.seekTo(progress.position - 10);
            }}>
            <Icon name="rewind-10" size={25} color={theme.colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={togglePlayback}
            style={playerStyle.track_button}>
            <Icon
              name={playing ? 'pause' : 'play'}
              size={50}
              color={theme.colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={playerStyle.track_button}
            onPress={() => {
              TrackPlayer.seekTo(progress.position + 10);
            }}>
            <Icon name="fast-forward-10" size={25} color={theme.colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={playerStyle.track_button}
            onPress={() => {
              setFavorite(toggleFavorite(id));
            }}>
            <Icon
              name={favorite ? 'cards-heart' : 'cards-heart-outline'}
              size={20}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    ),
    [togglePlayback, playing, progress, title, speed, id, favorite],
  );

  time = progress.position;
  return (
    <SafeAreaView style={playerStyle.container}>
      {progress.duration ? (
        <>
          <View style={playerStyle.goBackContainer}>
            <TouchableOpacity
              onPress={() => {
                navigate.goBack();
              }}
              style={playerStyle.goBack}>
              <Icon name="arrow-left" size={25} color={theme.colors.white} />
            </TouchableOpacity>
          </View>
          <Track />
        </>
      ) : (
        <ActivityIndicator size={40} />
      )}
    </SafeAreaView>
  );
};

export default Player;
