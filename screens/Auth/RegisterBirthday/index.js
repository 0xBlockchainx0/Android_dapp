import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import {
  Text,
  Button,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as authAPI from 'services/api-auth';
import * as userAPI from 'services/api-user';
import { setCurrentUser } from 'actions/auth'
import TbakeDatePicker from 'components/UI/TbakeDatePicker'
import AuthWrapper from '../Shared/AuthWrapper'
import { BIRTHDAY_VALID } from 'utils/constants/validations'
import LINKS from 'utils/constants/links';
import { showErrorToast } from 'utils/helpers/toast'
import useLoading from 'utils/hooks/useLoading'
import styles from './styles';

const schema = yup.object().shape({
  birthday: BIRTHDAY_VALID,
});

const RegisterBirthday = ({
  navigation
}) => {
  const dispatch = useDispatch();
  const { changeLoadingStatus } = useLoading();
  const { currentUser } = useSelector(state => state.auth)

  useEffect(() => {
    if (currentUser?.birthday) {
      navigation.navigate(LINKS.REGISTER_PHOTOS.NAME)
    }
  }, [currentUser]);

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      changeLoadingStatus(true)
      const awsAttributes = {
        birthdate: data.birthday,
      };
      const dynamoAttributes = {
        birthdate: data.birthday,
      };

      const user = await authAPI.fetchCurrentCognitoUser();
      await authAPI.fetchUpdateUser({ user, attributes: awsAttributes });
      await userAPI.fetchUpdateUserInfo({
        userId: currentUser.id,
        attributes: dynamoAttributes,
      });

      dispatch(setCurrentUser({
        ...currentUser,
        birthday: data.birthday,
      }))
      changeLoadingStatus(false)

      navigation.navigate(LINKS.REGISTER_PHOTOS.NAME)
    } catch (error) {
      console.log('error => ', error)
      if (error?.message) {
        showErrorToast({
          text: error?.message
        })
      }
    }
    changeLoadingStatus(false)
  };

  return (
    <AuthWrapper title='My birthday is...'>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TbakeDatePicker
            label='Your age will be public.'
            placeholder='YYYY-MM-DD'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            error={errors?.birthday?.message || ''}
            style={styles.input}
          />
        )}
        name='birthday'
        defaultValue={''}
      />

      <View style={styles.submitButton}>
        <Button block onPress={handleSubmit(onSubmit)}>
          <Text>Continue</Text>
        </Button>
      </View>
    </AuthWrapper>
  );
};

export default memo(RegisterBirthday);