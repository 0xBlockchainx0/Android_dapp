import React, { memo, useState, useMemo } from 'react';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import PersonCountModal from './PersonCountModal'

const PersonIconButton = ({
  isNotMe = false,
  value,
  style,
  onChange,
  ...rest
}) => {
  const [openModal, setOpenModal] = useState(false);

  const personCountLabel = useMemo(() => {
    let labelArray = [];
    !isNotMe && (labelArray = ['Me'])
    !!value.women && (labelArray = [...labelArray, `${value.women} Women`])
    !!value.men && (labelArray = [...labelArray, `${value.men} Men`])
    !!value.other && (labelArray = [...labelArray, `${value.other} Other`])

    return labelArray.join(' + ')
  }, [value])

  return (
    <>
      <OutlinedButton
        rounded
        isSmall
        label={personCountLabel}
        style={style}
        onPress={() => setOpenModal(true)}
        {...rest}
      />

      {openModal &&
        <PersonCountModal
          value={value}
          setOpen={setOpenModal}
          onChange={onChange}
        />
      }
    </>
  );
}

export default memo(PersonIconButton);