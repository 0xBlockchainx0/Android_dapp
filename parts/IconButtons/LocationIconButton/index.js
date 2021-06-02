import React, { memo, useState } from 'react';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import FilledMapIcon from 'components/Icons/FilledMapIcon'
import LocationModal from 'parts/LocationModal'

const LocationIconButton = ({
  label,
  style,
  setLocation,
  ...rest
}) => {
  const [openLocationModal, setOpenLocationModal] = useState(false);

  return (
    <>
      <OutlinedButton
        rounded
        isSmall
        label={label}
        leftIcon={<FilledMapIcon style={{ marginRight: 9 }} />}
        style={style}
        onPress={() => setOpenLocationModal(true)}
        {...rest}
      />

      { openLocationModal &&
        <LocationModal
          open={openLocationModal}
          setOpen={setOpenLocationModal}
          setLocation={setLocation}
        />
      }
    </>
  );
}

export default memo(LocationIconButton);