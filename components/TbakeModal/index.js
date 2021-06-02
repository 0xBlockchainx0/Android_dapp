import React, { memo } from 'react';
import Modal from 'react-native-modal';
import { StyleSheet } from 'react-native';
import {
  Text,
  Icon,
  View
} from 'native-base';

import commonColor from 'styles/variables/commonColor'

const TbakeModal = ({
  open,
  setOpen,
  title,
  style,
  size = 0.5,
  children
}) => {

  const toggleModal = () => {
    setOpen(false)
  }

  return (
    <Modal
      isVisible={open}
      style={[styles.modal, style]}
    >
      <View style={[styles.container, { height: commonColor.deviceHeight * size, }]}>
        <View style={styles.modalHeader}>
          <Text style={styles.title}>
            {title}
          </Text>

          <Icon
            name='close'
            style={styles.closeIcon}
            onPress={toggleModal}
          />
        </View>

        <View style={styles.content}>
          {children}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    position: 'relative'
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: commonColor.deviceWidth,
    marginHorizontal: -16,
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: commonColor.white
  },
  modalHeader: {
    position: 'relative',
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 30,
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  content: {
    marginTop: 30,
  },
});

export default memo(TbakeModal)