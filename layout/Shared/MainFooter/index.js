
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import {
  Footer
} from 'native-base'

import commonColor from 'styles/variables/commonColor'

const MainFooter = () => {

  return (
    <Footer>
      
    </Footer>
  );
};

const styles = StyleSheet.create({
  plusIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: commonColor.navy
  }
});

export default memo(MainFooter);