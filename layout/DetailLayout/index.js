
import React, { memo } from 'react'
import {
  Container,
  View
} from 'native-base'
import { StatusBar } from 'expo-status-bar'

import MainFooter from 'layout/Shared/MainFooter'
import styles from './styles'
import { ScrollView } from 'react-native'

const DetailLayout = ({
  header,
  children
}) => {

  return (
    <>
      <Container style={styles.container}>
        <StatusBar style='light' />
        <ScrollView showsVerticalScrollIndicator={false}>
          {header}
          <View style={styles.content}>
            {children}
          </View>
        </ScrollView>
        <MainFooter />
      </Container>
    </>
  );
};

export default memo(DetailLayout);