import React, { memo, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import format from 'date-fns/format';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import FilledCalendarIcon from 'components/Icons/FilledCalendarIcon'

const CalendarIconButton = ({
  label,
  style,
  dateFormat = 'yyyy-MM-dd',
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
        label={label || 'Date'}
        leftIcon={<FilledCalendarIcon style={{ marginRight: 9 }} />}
        style={style}
        onPress={showDatePicker}
        {...rest}
      />

      <DateTimePickerModal
        isVisible={isVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
}

export default memo(CalendarIconButton);