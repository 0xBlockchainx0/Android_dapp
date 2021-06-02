import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import {
  Text,
  Button
} from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as authAPI from 'services/api-auth';
import * as userAPI from 'services/api-user';
import { setCurrentUser } from 'actions/auth'
import VamostInput from 'components/UI/Inputs/VamostInput'
import AuthWrapper from '../Shared/AuthWrapper'
import { NAME_VALID } from 'utils/constants/validations'
import LINKS from 'utils/constants/links';
import { showErrorToast } from 'utils/helpers/toast'
import useLoading from 'utils/hooks/useLoading'
import styles from './styles';

const schema = yup.object().shape({
  name: NAME_VALID,
});

const RegisterName = ({
  navigation
}) => {
  const dispatch = useDispatch();
  const { changeLoadingStatus } = useLoading();
  const { currentUser } = useSelector(state => state.auth)

  useEffect(() => {
    if (currentUser?.name) {
      navigation.navigate(LINKS.REGISTER_BIRTHDAY.NAME)
    }
  }, [currentUser]);

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      changeLoadingStatus(true)
      const awsAttributes = {
        name: data.name,
      };
      const dynamoAttributes = {
        full_name: data.name,
      };

      const user = await authAPI.fetchCurrentCognitoUser();
      await authAPI.fetchUpdateUser({ user, attributes: awsAttributes });
      await userAPI.fetchUpdateUserInfo({
        userId: currentUser.id,
        attributes: dynamoAttributes,
      });
      changeLoadingStatus(false)

      dispatch(setCurrentUser({
        ...currentUser,
        name: data.name
      }))
      navigation.navigate(LINKS.REGISTER_BIRTHDAY.NAME)
    } catch (error) {
      if (error?.message) {
        showErrorToast({
          text: error?.message
        })
      }
    }
    changeLoadingStatus(false)
  };

  return (
    <AuthWrapper title='My first name is...'>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <VamostInput
            label="This is how you will appear in Vamost."
            placeholder='First name'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            error={errors?.name?.message || ''}
            style={styles.input}
          />
        )}
        name='name'
        defaultValue=''
      />

      <View style={styles.submitButton}>
        <Button block onPress={handleSubmit(onSubmit)}>
          <Text>Continue</Text>
        </Button>
      </View>
    </AuthWrapper>
  );
};

export default memo(RegisterName);