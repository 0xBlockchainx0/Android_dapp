
import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import LOGO_IMAGE from '../../assets/images/logo.png';
import LINKS from 'utils/constants/links';

const Logo = ({
  style
}) => {
  const navigation = useNavigation();

  const logoHandler = () => {
    navigation.navigate(LINKS.HOME.NAME)
  };

  return (
    <TouchableOpacity onPress={logoHandler}>
      <Thumbnail
        source={LOGO_IMAGE}
        style={[styles.logo, style]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32
  }
});

export default memo(Logo);