import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'native-base';

import TbakeModal from 'components/TbakeModal'
import VamostLocationInput from 'components/UI/Inputs/VamostLocationInput'
import PathIcon from 'components/Icons/PathIcon'
import commonColor from 'styles/variables/commonColor'

const LocationModal = ({
  open,
  setOpen,
  setLocation
}) => {

  const selectCurrentLocation = () => {
    setLocation('Miami, FL')
    setOpen(false)
  }

  const selectLocation = (location) => () => {
    setLocation(location)
    setOpen(false)
  }

  return (
    <TbakeModal
      open={open}
      setOpen={setOpen}
      size={0.9}
      title='Select Location'
    >
      <VamostLocationInput
        placeholder='Location'
      />

      <TouchableOpacity
        style={styles.currentLocationContainer}
        onPress={selectCurrentLocation}
      >
        <PathIcon
          style={styles.pathIcon}
          color={commonColor.midBlue}
        />
        <Text style={styles.currentLocation}>
          Current Location
        </Text>
      </TouchableOpacity>

      {
        locations.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.locationContainer}
            onPress={selectLocation(item.location)}
          >
            <Text style={styles.location}>
              {item.location}
            </Text>
            <Text style={styles.description}>
              {item.description}
            </Text>
          </TouchableOpacity>
        ))
      }
    </TbakeModal>
  )
}

const styles = StyleSheet.create({
  currentLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  currentLocation: {
    fontSize: 14,
    color: commonColor.midBlue,
  },
  pathIcon: {
    marginRight: 14
  },
  locationContainer: {
    paddingVertical: 12,
  },
  location: {
    fontSize: 14,
    marginBottom: 8
  },
  description: {
    fontSize: 12,
    color: commonColor.darkGrey
  }
});

const locations = [
  {
    location: '1535 Mihsup Street, Los Angeles',
    description: 'Home Location'
  },
  {
    location: 'Los Angeles, CA, United States',
    description: 'Recent Searches'
  }
]

export default memo(LocationModal)
