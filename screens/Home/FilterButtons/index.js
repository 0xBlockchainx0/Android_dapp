import React, { memo } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import LocationIconButton from 'parts/IconButtons/LocationIconButton'
import CalendarIconButton from 'parts/IconButtons/CalendarIconButton'

const FilterButtons = ({
  location,
  setLocation,
  selectedDate,
  setSelectedDate,
  partySize,
  setPartySize,
}) => {

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      <LocationIconButton
        label={location}
        style={styles.button}
        setLocation={setLocation}
      />
      <CalendarIconButton
        label={selectedDate}
        style={styles.button}
        onChangeDate={setSelectedDate}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  button: {
    margin: 4,
  }
});

export default memo(FilterButtons);