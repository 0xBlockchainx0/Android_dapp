import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler'

import CircleMinusIcon from 'components/Icons/CircleMinusIcon'

const CircleMinusIconButton = ({
  style,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <CircleMinusIcon {...rest} />
    </TouchableOpacity>
  );
}

export default memo(CircleMinusIconButton);