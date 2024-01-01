import {Dimensions, StyleSheet} from 'react-native';

const pdfStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },

  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  goBack: {
    width: '100%',
  },
});

export default pdfStyle;
