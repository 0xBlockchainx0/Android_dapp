
import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components'

const ContainedButton = ({
  status = 'primary',
  style,
  children,
  ...rest
}) => {
  return (
    <Button
      style={[styles.root, style]}
      status={status}
      {...rest}
    >
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 6,
    fontWeight: 'bold'
  }
});

export default memo(ContainedButton);