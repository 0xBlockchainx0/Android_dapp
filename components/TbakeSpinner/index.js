import React, { memo } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

import commonColor from 'styles/variables/commonColor'

const TbakeSpinner = ({
  loading
}) => {
  return (
    <Spinner
      visible={loading}
      color={commonColor.black}
    />
  );
};

export default memo(TbakeSpinner);
