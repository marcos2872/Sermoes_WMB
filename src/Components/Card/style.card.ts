import {StyleSheet} from 'react-native';
import {theme} from '../../Theme';

export const cardStyle = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    marginTop: 20,
    gap: 10,
  },

  image: {
    width: 50,
    height: 70,
  },

  textContainer: {
    height: 70,
    width: '90%',
    padding: 5,
    justifyContent: 'space-between',
  },

  title: {
    width: '90%',
    fontSize: 16,
    color: theme.colors.white,
  },

  year: {
    fontSize: 16,
    color: theme.colors.white,
  },

  iconContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonAudio: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
