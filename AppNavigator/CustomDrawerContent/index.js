import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import { Icon } from 'native-base';

import { logoutUser } from 'actions/auth'
import styles from './styles'
import LINKS from 'utils/constants/links';
import DrawerFoodIcon from 'components/Icons/DrawerFoodIcon'


const DRAWER_ITEMS = [
  { link: LINKS.HOME, icon: DrawerFoodIcon }
]

function CustomDrawerContent(props) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    props.navigation.navigate(LINKS.SIGN_IN.NAME)
  }

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <DrawerItem
        label='Close'
        icon={() => <Icon name='close' style={styles.closeIcon} />}
        onPress={() => props.navigation.closeDrawer()}
        labelStyle={styles.closeLabel}
      />
      <View>
        {
          DRAWER_ITEMS.map(item => (
            <DrawerItem
              key={item.link.NAME}
              label={item.link.TITLE}
              icon={() => <item.icon />}
              onPress={() => props.navigation.navigate(item.link.NAME)}
              labelStyle={styles.navLabel}
              style={styles.drawerItem}
            />
          ))
        }
      </View>
      <DrawerItem
        label='Logout'
        icon={() => <Icon name='logout' type='MaterialCommunityIcons' style={styles.logoutIcon} />}
        onPress={logoutHandler}
        labelStyle={styles.logoutLabel}
      />
    </DrawerContentScrollView>
  );
}

export default memo(CustomDrawerContent)
