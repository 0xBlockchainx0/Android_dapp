import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, View, Icon } from 'native-base';
import commonColor from 'styles/variables/commonColor';

import TbakeModal from 'components/TbakeModal'
import TAG_TYPES from 'utils/constants/tag-types'

const TagSelectModal = ({
  value = [],
  setOpen,
  onChange
}) => {

  const itemHandler = (tag) => () => {
    let newValue = [...value];
    const currentIndex = value.findIndex((item) => item === tag.value);

    if (currentIndex < 0) {
      newValue = [
        ...newValue,
        tag.value
      ]
    } else {
      newValue.splice(currentIndex, 1)
    }

    onChange(newValue)
  }

  const finishHandler = () => {
    setOpen(false)
  }

  return (
    <TbakeModal
      open={true}
      setOpen={setOpen}
      title='Tag Select'
    >
      {TAG_TYPES.map((tag) => (
        <TouchableOpacity key={tag.value} style={styles.container} onPress={itemHandler(tag)}>
          <View style={styles.info}>
            <tag.icon />
            <Text style={styles.label}>
              {tag.text}
            </Text>
          </View>
          {value.includes(tag.value) && <Icon type='Entypo' name='check' style={styles.check} />}
        </TouchableOpacity>
      ))}

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
    paddingVertical: 15,
    borderBottomColor: commonColor.darkGrey,
    borderBottomWidth: 1
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 10
  },
  check: {
    fontSize: 18,
    color: commonColor.navy
  },
  button: {
    marginTop: 40
  }
});

export default memo(TagSelectModal)
