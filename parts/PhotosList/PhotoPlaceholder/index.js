
import React, { memo } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import commonColor from 'styles/variables/commonColor';
import PLUS_ICON from '../../../assets/images/icons/plus.png';

const PhotoPlaceholder = ({
  id,
  onAdd
}) => {

  const addPhotoHandler = () => {
    onAdd(id)
  }

  return (
    <TouchableOpacity onPress={addPhotoHandler}>
      <View style={styles.placeholder}>
        <Image
          source={PLUS_ICON}
          style={styles.plusIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonColor.grey,
    borderRadius: 8,
    height: 135
  },
  plusIcon: {
    width: 32,
    height: 32
  }
});

export default memo(PhotoPlaceholder);