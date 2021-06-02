
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';

const LinkButton = ({
  label = '',
  link = '',
  params = {},
  icon,
  style
}) => {
  const navigation = useNavigation();

  const buttonHandler = () => {
    navigation.navigate(link, params);
  };

  return (
    <Text
      style={[styles.root, style]}
      onPress={buttonHandler}
    >
      {label}
      {icon && icon}
    </Text>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default memo(LinkButton);