import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Thumbnail } from 'native-base';

import commonColor from 'styles/variables/commonColor'

const TbakeAvatar = ({
  style,
  ...rest
}) => {
  return (
    <Thumbnail
      style={[styles.avatar, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 2,
    borderColor: commonColor.white
  },
});

export default memo(TbakeAvatar);