import React, { memo } from 'react';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton'

const LabelCircleButton = ({
  label,
  style,
  ...rest
}) => {
  return (
    <OutlinedButton
      rounded
      isSmall
      label={label}
      style={style}
      {...rest}
    />
  );
}

export default memo(LabelCircleButton);