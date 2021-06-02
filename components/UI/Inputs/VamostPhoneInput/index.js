
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Label
} from 'native-base';
import PhoneInput from 'react-native-phone-number-input';

import PREFERRED_COUNTRIES from 'utils/constants/preferred-countries';
import commonColor from 'styles/variables/commonColor';

const VamostPhoneInput = React.forwardRef(({
  error,
  label,
  style,
  ...rest
}, ref) => {

  return (
    <View style={style}>
      {
        !!label &&
        <Label style={styles.label}>
          {label}
        </Label>
      }
      <PhoneInput
        ref={ref}
        defaultCode='US'
        containerStyle={styles.containerStyle}
        textContainerStyle={styles.textContainerStyle}
        flagButtonStyle={styles.flagButtonStyle}
        countryPickerProps={{
          preferredCountries: PREFERRED_COUNTRIES
        }}
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
});

const styles = StyleSheet.create({
  label: {
    marginBottom: 28
  },
  containerStyle: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: commonColor.inputBorderColor
  },
  flagButtonStyle: {
    width: 54
  },
  textContainerStyle: {
    backgroundColor: commonColor.white,
    paddingHorizontal: 5,
    paddingVertical: 12
  },
  error: {
    textAlign: 'center',
    paddingTop: 16,
    color: commonColor.red
  }
});

export default memo(VamostPhoneInput);