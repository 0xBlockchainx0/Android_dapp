
import React, { memo, useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import {
  Item,
  Input,
  Icon,
  Text,
  Label
} from 'native-base';
import { TextInputMask } from 'react-native-masked-text'

import commonColor from 'styles/variables/commonColor'

const VamostMaskInput = ({
  label = '',
  error,
  style,
  ...rest
}) => {

  return (
    <View style={style}>
      {
        !!label &&
        <Label style={styles.label}>
          {label}
        </Label>
      }
      <TextInputMask
        style={styles.input}
        {...rest}
      />
      {
        !!error &&
        <Text style={styles.error}>
          {error}
        </Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 28
  },
  input: {
    fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: commonColor.darkGrey
  },
  error: {
    textAlign: 'center',
    paddingTop: 16,
    color: commonColor.red
  }
});

export default memo(VamostMaskInput);