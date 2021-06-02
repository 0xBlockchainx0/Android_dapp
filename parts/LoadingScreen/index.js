
import React, { memo } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {
  Container,
  View,
  Spinner
} from 'native-base';

import commonColor from 'styles/variables/commonColor';

const LoadingScreen = () => {

  return (
    <Container style={styles.container}>
      <SafeAreaView />
      <View style={styles.content}>
        <Spinner color='white' />
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
  }
});

export default memo(LoadingScreen);