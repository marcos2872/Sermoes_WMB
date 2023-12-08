import {StyleSheet} from 'react-native';
import {theme} from '../../Theme';

export const searchStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingTop: 10,
  },

  inputView: {
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    gap: 5,
  },

  input: {
    width: '85%',
    height: 40,
    color: theme.colors.black2,
  },

  scroll: {
    marginTop: 10,
    marginBottom: 5,
  },

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

  iconContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
  },
});
