import {StyleSheet} from 'react-native';
import {theme} from '../../Theme';

export const playerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  goBackContainer: {
    width: '100%',
  },

  goBack: {
    width: '15%',
    alignItems: 'center',
  },

  trackView: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },

  image: {
    width: '60%',
    height: '50%',
    borderRadius: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.white,
  },

  text: {
    color: theme.colors.white,
  },

  slider: {
    width: '100%',
    height: 40,
  },

  progress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  track: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
  },

  track_button: {
    width: '15%',
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
