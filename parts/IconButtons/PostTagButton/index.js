import React, { memo, useState } from 'react';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import TagSelectModal from './TagSelectModal'
import { isEmpty } from 'utils/helpers/utility'

const PostTagButton = ({
  isLabel = false,
  value,
  style,
  onChange,
  ...rest
}) => {
  const [openModal, setOpenModal] = useState(false);

  const showTypePicker = () => {
    if (isLabel) {
      return
    }
    setOpenModal(true)
  };

  return (
    <>
      <OutlinedButton
        rounded
        isSmall
        label={isEmpty(value) ? 'What' : value.join(' + ')}
        style={style}
        onPress={showTypePicker}
        {...rest}
      />
      {openModal &&
        <TagSelectModal
          value={value}
          setOpen={setOpenModal}
          onChange={onChange}
        />
      }
    </>
  );
}

export default memo(PostTagButton);