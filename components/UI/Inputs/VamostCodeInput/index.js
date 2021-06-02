
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Label
} from 'native-base';
import {
  CodeField,
  Cursor
} from 'react-native-confirmation-code-field';

import commonColor from 'styles/variables/commonColor'

const CELL_COUNT = 6;

const VamostCodeInput = ({
  label = '',
  error,
  style,
  ...rest
}) => {

  return (
    <View style={style}>
      {
        !!label &&
        <Label style={styles.label}>{label}</Label>
      }
      <CodeField
        {...rest}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType='number-pad'
        textContentType='oneTimeCode'
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell, error && styles.errorCell]}>
            <Text style={[styles.cellText, !symbol && !isFocused && styles.defaultText]}>
              {symbol || (isFocused ? <Cursor /> : '•')}
            </Text>
          </View>
        )}
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
  error: {
    textAlign: 'center',
    paddingTop: 16,
    color: commonColor.red
  },
  codeFiledRoot: {
    width: '100%',
  },
  cellRoot: {
    width: 40,
    height: 40,
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: commonColor.grey
  },
  cellText: {
    color: commonColor.black,
    fontSize: 25,
    textAlign: 'center',
  },
  defaultText: {
    color: commonColor.grey,
  },
  errorCell: {
    borderBottomColor: commonColor.red
  },
  focusCell: {
    borderBottomColor: commonColor.inputBorderColor,
    borderBottomWidth: 2,
  },
});

export default memo(VamostCodeInput);