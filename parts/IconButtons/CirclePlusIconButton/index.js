import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler'

import CirclePlusIcon from 'components/Icons/CirclePlusIcon'

const CirclePlusIconButton = ({
  style,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <CirclePlusIcon {...rest} />
    </TouchableOpacity>
  );
}

export default memo(CirclePlusIconButton);