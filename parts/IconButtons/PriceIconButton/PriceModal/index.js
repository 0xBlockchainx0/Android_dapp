import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';
import commonColor from 'styles/variables/commonColor';

import TbakeModal from 'components/TbakeModal'
import VamostInput from 'components/UI/Inputs/VamostInput'

const PriceModal = ({
  value,
  setOpen,
  onChange
}) => {
  const finishHandler = () => {
    setOpen(false)
  }

  return (
    <TbakeModal
      open={true}
      setOpen={setOpen}
      size={0.4}
      title='Fee (optional)'
    >
      <VamostInput
        placeholder='Fee'
        value={value}
        keyboardType='numeric'
        onChangeText={value => onChange(value)}
      />

      <Button block style={styles.button} onPress={finishHandler}>
        <Text>Done</Text>
      </Button>
    </TbakeModal>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: commonColor.darkGrey,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    marginTop: 40
  }
});

export default memo(PriceModal)
