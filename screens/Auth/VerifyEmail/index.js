
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
import { EMAIL_VALID } from 'utils/constants/validations'
import LINKS from 'utils/constants/links';
import MESSAGES from 'utils/constants/messages';
import { showErrorToast } from 'utils/helpers/toast'
import useLoading from 'utils/hooks/useLoading'
import styles from './styles';

const schema = yup.object().shape({
  email: EMAIL_VALID,
});

const VerifyEmail = ({
  navigation
}) => {
  const dispatch = useDispatch();
  const { changeLoadingStatus } = useLoading();
  const { currentUser } = useSelector(state => state.auth)

  useEffect(() => {
    if (currentUser?.email) {
      navigation.navigate(LINKS.REGISTER_NAME.NAME)
    }
  }, [currentUser]);

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    changeLoadingStatus(true)
    try {
      const awsAttributes = {
        email: data.email,
      };
      const dynamoAttributes = {
        email: data.email,
        email_verified: 'false',
      };

      const userByEmail = await userAPI.fetchUserByParam({
        type: 'email',
        value: data.email,
      });
      const isEmailExists = userByEmail.Items.length;

      if (!isEmailExists) {
        const user = await authAPI.fetchCurrentCognitoUser();
        await authAPI.fetchUpdateUser({ user, attributes: awsAttributes });
        await userAPI.fetchUpdateUserInfo({
          userId: currentUser.id,
          attributes: dynamoAttributes,
        });

        dispatch(setCurrentUser({
          ...currentUser,
          email: data.email
        }))
        changeLoadingStatus(false)
        navigation.navigate(LINKS.REGISTER_NAME.NAME)
      } else {
        showErrorToast({
          text: MESSAGES.EMAIL_EXIST
        })
      }
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
    <AuthWrapper title="What's your email?">
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <VamostInput
            label="Don't lose access to your account, verify your email."
            placeholder='Enter your email Address'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            error={errors?.email?.message || ''}
            style={styles.input}
          />
        )}
        name='email'
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

export default memo(VerifyEmail);