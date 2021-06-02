import React, { memo, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import format from 'date-fns/format';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton'

const TimeIconButton = ({
  label,
  style,
  dateFormat = 'hh:mm a',
  onChangeDate,
  ...rest
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
    onChangeDate(formatDate)
    hideDatePicker();
  };

  return (
    <>
      <OutlinedButton
        rounded
        isSmall
        label={label || 'Time'}
        style={style}
        onPress={showDatePicker}
        {...rest}
      />

      <DateTimePickerModal
        isVisible={isVisible}
        mode='time'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
}

export default memo(TimeIconButton);