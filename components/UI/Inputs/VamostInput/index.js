
import React, { memo, useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import {
  Item,
  Input,
  Icon,
  Text,
  Label
} from 'native-base';

import commonColor from 'styles/variables/commonColor'

const VamostInput = ({
  label = '',
  placeholder = '',
  secureTextEntry = false,
  error,
  style,
  ...rest
}) => {

  const [show, setShow] = useState(true);

  const toggleSecureEntry = () => {
    setShow(prev => !prev);
  };

  return (
    <View style={style}>
      {
        !!label &&
        <Label>
          {label}
        </Label>
      }
      <Item error={!!error} >
        <Input
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && show}
          {...rest}
        />
        {
          secureTextEntry &&
          <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon
              style={styles.accessoryRight}
              name={show ? 'eye-off' : 'eye'}
            />
          </TouchableWithoutFeedback>
        }
      </Item>
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
  accessoryRight: {
    opacity: 0.3,
  },
  error: {
    textAlign: 'center',
    paddingTop: 16,
    color: commonColor.red
  }
});

export default memo(VamostInput);