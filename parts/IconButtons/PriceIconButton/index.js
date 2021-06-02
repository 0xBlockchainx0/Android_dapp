import React, { memo, useState } from 'react';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import PriceModal from './PriceModal'

const PriceIconButton = ({
  value,
  style,
  onChange,
  ...rest
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <OutlinedButton
        rounded
        isSmall
        label={`$${value}`}
        style={style}
        onPress={() => setOpenModal(true)}
        {...rest}
      />

      {openModal &&
        <PriceModal
          value={value}
          setOpen={setOpenModal}
          onChange={onChange}
        />
      }
    </>
  );
}

export default memo(PriceIconButton);