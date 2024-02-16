import {StyleSheet} from 'react-native';
import {theme} from '../../Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingTop: 20,
    gap: 20,
  },

  salmoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  title: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '600',
  },

  text: {
    color: theme.colors.white,
  },

  wmb: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
