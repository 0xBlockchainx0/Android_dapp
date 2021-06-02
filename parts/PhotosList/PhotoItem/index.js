
import React, { memo } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import CLOSE_ICON from '../../../assets/images/icons/close.png';

const PhotoItem = ({
  id,
  source,
  onClear
}) => {

  const clearPhotoHandler = () => {
    onClear(id)
  }

  return (
    <View style={styles.root}>
      <View style={styles.photoContainer} />
      <Image
        source={{ uri: source }}
        style={styles.photo}
      />

      <TouchableOpacity
        onPress={clearPhotoHandler}
        style={styles.iconContainer}
      >
        <Image
          source={CLOSE_ICON}
          style={styles.closeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative'
  },
  photoContainer: {
    zIndex: 2,
    width: '100%',
    height: 135,
    borderRadius: 8,
    position: 'absolute',
    backgroundColor: '#00000036'
  },
  photo: {
    height: 135,
    width: '100%',
    borderRadius: 8,
  },
  iconContainer: {
    zIndex: 3,
    position: 'absolute',
    top: 6,
    right: 6,
  },
  closeIcon: {
    width: 20,
    height: 20
  }
});

export default memo(PhotoItem);