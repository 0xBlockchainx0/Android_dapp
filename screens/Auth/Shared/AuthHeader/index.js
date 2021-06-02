
import React, { memo, useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';

import { isEmpty } from 'utils/helpers/utility'
import LINKS from 'utils/constants/links';

const AuthHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const leftLink = useMemo(() => {
    switch (route.name) {
      case LINKS.SIGN_IN.NAME:
        return LINKS.SIGN_UP;
      case LINKS.FORGOT_PASSWORD.NAME:
        return LINKS.SIGN_UP;
      case LINKS.RESET_PASSWORD.NAME:
        return LINKS.SIGN_UP;
      case LINKS.SIGN_UP.NAME:
        return LINKS.SIGN_IN;
      default:
        return null;
    }
  }, [route.name]);

  const leftButtonHandler = useCallback(() => {
    if (isEmpty(leftLink)) {
      navigation.goBack()
    } else {
      navigation.navigate(leftLink.NAME)
    }
  }, [leftLink, navigation])

  return (
    <Header>
      <Left>
        <Button transparent onPress={leftButtonHandler}>
          {
            isEmpty(leftLink)
              ? <Icon active name='arrow-back' />
              : <Title style={styles.leftButton}>{leftLink.TITLE}</Title>
          }
        </Button>
      </Left>
      <Body>
      
      </Body>
      <Right>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon active name='close' />
        </Button>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  leftLink: {
    fontSize: 14
  }
});

export default memo(AuthHeader);