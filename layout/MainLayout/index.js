
import React, { memo } from 'react'
import { View } from 'react-native'
import {
  Container,
  Content,
  Text
} from 'native-base'

import MainFooter from 'layout/Shared/MainFooter'
import MainHeader from './MainHeader'
import styles from './styles'

const MainLayout = ({
  title,
  children
}) => {

  return (
    <Container style={styles.container}>
      <MainHeader />
      <Content padder contentContainerStyle={styles.content}>
        <View>
          {
            !!title &&
            <Text style={styles.title}>
              {title}
            </Text>
          }
        </View>
        {children}
      </Content>
      <MainFooter />
    </Container>
  );
};

export default memo(MainLayout);