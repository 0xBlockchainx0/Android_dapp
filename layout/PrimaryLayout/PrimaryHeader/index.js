
import React, { memo, useCallback } from 'react';
import { StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Header,
  Button,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';

import Logo from 'components/Logo'
import NOTIFICATION_ICON from '../../../assets/images/icons/notification.png';

const PrimaryHeader = ({
  isArrow = false
}) => {
  const navigation = useNavigation();

  const closeHandler = useCallback(() => {
    navigation.goBack()
  }, [])

  const notificationHandler = useCallback(() => {
    console.log('notification')
  }, [])

  return (
    <Header>
      <Left>
        <Button transparent onPress={closeHandler}>
          <Icon active name={isArrow ? 'arrow-back' : 'close'} />
        </Button>
      </Left>
      <Body>
        <Logo />
      </Body>
      <Right>
        <Button transparent onPress={notificationHandler}>
          <Image
            source={NOTIFICATION_ICON}
            style={styles.notificationIcon}
          />
        </Button>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 14,
    height: 14
  },
  notificationIcon: {
    width: 18,
    height: 18
  }
});

export default memo(PrimaryHeader);