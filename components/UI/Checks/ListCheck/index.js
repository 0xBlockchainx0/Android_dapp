import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  View,
} from 'native-base';
import { CheckBox } from 'react-native-elements';

import commonColor from 'styles/variables/commonColor'

const ListCheck = ({
  label,
  checked,
  onValueChange,
}) => {

  return (
    <View style={styles.contain}>
      <Text style={styles.label}>
        {label}
      </Text>
      <CheckBox
        checkedColor='black'
        checked={checked}
        containerStyle={styles.checkBox}
        onPress={() => onValueChange(!checked)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: commonColor.darkGrey
  },
  checkBox: {
    marginVertical: 0
  }
});

export default memo(ListCheck);