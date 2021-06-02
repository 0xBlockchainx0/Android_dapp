
import React, { memo, useCallback } from 'react';
import { StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Header,
  Button,
  Left,
  Right,
  Body,
} from 'native-base';

import Logo from 'components/Logo'
import MENU_ICON from '../../../assets/images/icons/menu.png';
import NOTIFICATION_ICON from '../../../assets/images/icons/notification.png';

const MainHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const sideHandler = useCallback(() => {
    navigation.openDrawer()
  }, [])

  const notificationHandler = useCallback(() => {
    console.log('notification')
  }, [])

  return (
    <Header>
      <Left>
        <Button transparent onPress={sideHandler}>
          <Image
            source={MENU_ICON}
            style={styles.closeIcon}
          />
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

export default memo(MainHeader);