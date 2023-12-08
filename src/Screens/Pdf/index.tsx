import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import Pdf from 'react-native-pdf';
import {theme} from '../../Theme';

const PdfView: React.FC = () => {
  const navigate = useNavigation();
  const {
    params: {url},
  } = useRoute() as {params: {url: string}};

  const source = {
    uri: url,
    cache: true,
  };

  return (
    <SafeAreaView style={pdfStyle.container}>
      <TouchableOpacity
        onPress={() => {
          navigate.goBack();
        }}
        style={pdfStyle.goBack}>
        <Icon
          name="subdirectory-arrow-left"
          size={25}
          color={theme.colors.black}
        />
      </TouchableOpacity>
      <Pdf
        trustAllCerts={false}
        source={source}
        onLoadComplete={(numberOfPages, _filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, _numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={pdfStyle.pdf}
      />
    </SafeAreaView>
  );
};

export default PdfView;

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
