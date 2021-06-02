import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler'

import CircleDeleteIcon from 'components/Icons/CircleDeleteIcon'

const CircleDeleteIconButton = ({
  style,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <CircleDeleteIcon {...rest} />
    </TouchableOpacity>
  );
}

export default memo(CircleDeleteIconButton);