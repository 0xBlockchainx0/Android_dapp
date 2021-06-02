
import React, { memo } from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base';

import PrimaryHeader from './PrimaryHeader'
import styles from './styles';

const PrimaryLayout = ({
  title,
  isArrow,
  children
}) => {

  return (
    <Container style={styles.container}>
      <PrimaryHeader isArrow={isArrow} />
      <Content padder contentContainerStyle={styles.content}>
        <View>
          {
            !!title &&
            <Text style={styles.title}>
              {title}
            </Text>
          }
          {children}
        </View>
      </Content>
    </Container>
  );
};

export default memo(PrimaryLayout);