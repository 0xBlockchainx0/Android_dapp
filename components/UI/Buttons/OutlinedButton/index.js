import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  Button,
  View
} from 'native-base'

const OutlinedButton = ({
  leftIcon,
  rightIcon,
  label,
  style,
  isSmall = false,
  ...rest
}) => {

  return (
    <Button
      {...rest}
      bordered
      style={[isSmall && styles.smallButton, style]}
    >
      <View style={styles.container}>
        {leftIcon && leftIcon}
        <Text style={{ fontSize: isSmall ? 12 : 14 }}>
          {label}
        </Text>
        {rightIcon && rightIcon}
      </View>
    </Button>
  );
}

const styles = StyleSheet.create({
  smallButton: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftIcon: {
    marginRight: 9
  },
  rightIcon: {
    marginLeft: 9
  }
});

export default memo(OutlinedButton);