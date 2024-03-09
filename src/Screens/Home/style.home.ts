import {StyleSheet, Dimensions} from 'react-native';
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

  link: {
    color: theme.colors.white,
  },

  image: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width + 100,
    borderRadius: 10,
  },

  wmb: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
