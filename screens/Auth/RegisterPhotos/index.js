
import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import {
  Text,
  Button
} from 'native-base';

import * as userAPI from 'services/api-user'
import * as cloudinaryAPI from 'services/api-cloudinary'
import PhotosList from 'parts/PhotosList'
import AuthWrapper from '../Shared/AuthWrapper'
import useLoading from 'utils/hooks/useLoading'
import { showErrorToast } from 'utils/helpers/toast'
import { isEmpty } from 'utils/helpers/utility'
import LINKS from 'utils/constants/links';
import styles from './styles';

const PHOTOS = [
  '',
  '',
  '',
  '',
  '',
  ''
]

const RegisterPhotos = ({
  navigation
}) => {
  const { changeLoadingStatus } = useLoading();
  const { currentUser } = useSelector(state => state.auth)
  const [photos, setPhotos] = useState(PHOTOS);

  const clearPhotoHandler = (id) => {
    const newPhotos = [...photos];
    newPhotos[id] = ''
    setPhotos(newPhotos)
  }

  const addPhotoHandler = (id, newPhoto) => {
    const newPhotos = [...photos];
    newPhotos[id] = newPhoto
    setPhotos(newPhotos)
  }

  const finishHandler = async () => {
    if(isEmpty(currentUser)){
      return;
    }
    changeLoadingStatus(true)
    try {
      for (const photo of photos) {
        if (photo) {
          const response = await cloudinaryAPI.uploadImage(photo)
          await userAPI.fetchAddUserPhoto({
            userId: currentUser.id,
            imageId: response.data.asset_id,
            imageSrc: response.data.url,
          });
        }
      }
      navigation.navigate(LINKS.REGISTER_PROFILE.NAME)
    } catch (error) {
      console.log(error)
      if (error.response) {
        showErrorToast({ text: error.response.data.error.message });
      } else {
        showErrorToast({ text: error.message });
      }
    }
    changeLoadingStatus(false)
  }

  return (
    <AuthWrapper title='Add photos'>
      <Text style={styles.description}>
        Add at least one photo to continue
      </Text>

      <PhotosList
        photos={photos}
        onClear={clearPhotoHandler}
        onAdd={addPhotoHandler}
      />

      <View style={styles.submitButton}>
        <Button block onPress={finishHandler}>
          <Text>Finish registration</Text>
        </Button>
      </View>
    </AuthWrapper>
  );
};

export default memo(RegisterPhotos);