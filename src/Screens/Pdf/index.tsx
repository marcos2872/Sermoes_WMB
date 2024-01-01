import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import Pdf from 'react-native-pdf';
import {theme} from '../../Theme';
import {
  getFavorite,
  getPdfPosition,
  setPdfPosition,
  toggleFavorite,
} from '../../utils/storage';

let positionPdf = 0;

const PdfView: React.FC = () => {
  const navigate = useNavigation();
  const [favorite, setFavorite] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(0);
  const [pages, setPages] = useState(0);

  const {
    params: {url, id},
  } = useRoute() as {params: {url: string; id: string}};

  const source = {
    uri: url,
    cache: true,
  };

  useEffect(() => {
    const position = getPdfPosition(id);
    setPageCurrent(position || 0);

    console.log(getFavorite(id));

    setFavorite(getFavorite(id) as boolean);

    return () => {
      setPdfPosition(id, positionPdf);
    };
  }, [id]);

  return (
    <SafeAreaView style={pdfStyle.container}>
      <View style={pdfStyle.option}>
        <TouchableOpacity
          onPress={() => {
            navigate.goBack();
          }}>
          <Icon
            name="subdirectory-arrow-left"
            size={25}
            color={theme.colors.black}
          />
        </TouchableOpacity>
        <Text>{`${pageNumber} / ${pages}`}</Text>
        <TouchableOpacity
          onPress={() => {
            setFavorite(toggleFavorite(id));
          }}>
          <Icon
            name={favorite ? 'cards-heart' : 'cards-heart-outline'}
            size={25}
            color={theme.colors.black}
          />
        </TouchableOpacity>
      </View>
      <Pdf
        page={pageCurrent}
        trustAllCerts={false}
        source={source}
        onLoadComplete={(numberOfPages, _filePath) => {
          setPages(numberOfPages);
        }}
        onPageChanged={(page, _numberOfPages) => {
          setPageNumber(page);
          positionPdf = page;
        }}
        onError={error => {
          console.log(error);
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

  option: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
