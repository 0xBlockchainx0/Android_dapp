import React, { memo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Button } from 'native-base';
import commonColor from 'styles/variables/commonColor';

import TbakeModal from 'components/TbakeModal'
import CountGroupButton from 'parts/IconButtons/CountGroupButton'

const PersonCountModal = ({
  value,
  setOpen,
  onChange
}) => {
  const [men, setMen] = useState(value.men || 0);
  const [women, setWomen] = useState(value.women || 0);
  const [other, setOther] = useState(value.other || 0);

  const finishHandler = () => {
    const params = {
      men,
      women,
      other
    }
    onChange(params)
    setOpen(false)
  }

  return (
    <TbakeModal
      open={true}
      setOpen={setOpen}
      size={0.65}
      title='New Post'
    >
      <View style={styles.container}>
        <Text style={styles.label}>
          Men
        </Text>
        <CountGroupButton
          isNotRemovable
          count={men}
          onCount={(value) => setMen(value)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>
          Women
        </Text>
        <CountGroupButton
          isNotRemovable
          count={women}
          onCount={(value) => setWomen(value)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>
          Other
        </Text>
        <CountGroupButton
          isNotRemovable
          count={other}
          onCount={(value) => setOther(value)}
        />
      </View>

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

export default memo(PersonCountModal)
