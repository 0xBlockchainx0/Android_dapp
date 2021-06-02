
import React, { memo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Label,
  Item
} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import format from 'date-fns/format';

import commonColor from 'styles/variables/commonColor';

const TbakeDatePicker = ({
  label = '',
  error,
  style,
  value,
  dateFormat = 'yyyy-MM-dd',
  placeholder,
  onChangeText,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const showDatePicker = () => {
    setIsVisible(true);
  };

  const hideDatePicker = () => {
    setIsVisible(false);
  };

  const handleConfirm = (date) => {
    const formatDate = format(date, dateFormat);
    onChangeText(formatDate)
    hideDatePicker();
  };

  return (
    <View style={style}>
      {
        !!label &&
        <Label style={styles.label}>
          {label}
        </Label>
      }
      <Item onPress={showDatePicker}>
        <Text style={[styles.date, !value && styles.placeholder]}>
          {value || placeholder}
        </Text>
      </Item>
      <DateTimePickerModal
        isVisible={isVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {
        !!error &&
        <Text Text style={styles.error}>
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
  date: {
    paddingVertical: 12
  },
  placeholder: {
    opacity: 0.4
  },
});

export default memo(TbakeDatePicker);