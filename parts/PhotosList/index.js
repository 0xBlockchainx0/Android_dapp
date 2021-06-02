
import React, { memo, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import * as ImagePicker from 'expo-image-picker';

import PhotoItem from './PhotoItem'
import PhotoPlaceholder from './PhotoPlaceholder'
import { deviceWidth, platform } from 'utils/helpers/dimensions'

const PhotosList = ({
  photos,
  onClear,
  onAdd
}) => {

  useEffect(() => {
    (async () => {
      if (platform !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })();
  }, []);

  const pickImage = async (id) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
      base64: true
    });

    if (!result.cancelled) {
      onAdd(id, `data:image/jpeg;base64,${result.base64}`)
    }
  }

  return (
    <FlatGrid
      spacing={12}
      itemDimension={(deviceWidth - 80) / 3}
      data={photos}
      additionalRowStyle={styles.rowStyle}
      renderItem={({ item, index }) => (
        item
          ? (
            <PhotoItem
              key={index}
              id={index}
              source={item}
              onClear={onClear}
            />
          ) : (
            <PhotoPlaceholder
              key={index}
              id={index}
              onAdd={pickImage}
            />
          )
      )}
    />
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    marginVertical: 8
  }
});

export default memo(PhotosList);