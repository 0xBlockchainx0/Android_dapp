
import React, { memo } from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';
import {
  Container,
  View,
} from 'native-base';

import CHECK_ICON from '../../assets/images/icons/white-check.png';
import commonColor from 'styles/variables/commonColor';

const CompletedScreen = () => {

  return (
    <Container style={styles.container}>
      <SafeAreaView />
      <View style={styles.content}>
        <Image
          source={CHECK_ICON}
          style={styles.check}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonColor.navy,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  check: {
    width: 76,
    height: 76
  }
});

export default memo(CompletedScreen);