import React, { memo } from 'react';
import Modal from 'react-native-modal';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

import WhiteBackIcon from 'components/Icons/WhiteBackIcon'
import commonColor from 'styles/variables/commonColor'

const TbakeImageModal = ({
  open,
  setOpen,
  title,
  imageURL,
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
          <TouchableOpacity
            style={styles.backIcon}
            onPress={toggleModal}
          >
            <WhiteBackIcon />
          </TouchableOpacity>
          <Image
            source={{ uri: imageURL }}
            style={styles.image}
          />
          <Text style={styles.title}>
            {title}
          </Text>
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: commonColor.white
  },
  modalHeader: {
    position: 'relative',
  },
  image: {
    zIndex: -1,
    width: commonColor.deviceWidth,
    height: commonColor.deviceHeight * 0.3,
    borderRadius: 20,
  },
  backIcon: {
    position: 'absolute',
    top: 30,
    left: 18
  },
  title: {
    position: 'absolute',
    bottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    width: commonColor.deviceWidth,
    color: commonColor.white,
  },
  content: {
    marginTop: 30,
    padding: 30,
  },
});

export default memo(TbakeImageModal)