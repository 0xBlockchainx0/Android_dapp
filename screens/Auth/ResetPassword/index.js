
import React, { memo } from 'react';
import { View } from 'react-native';
import {
  Text,
  Button
} from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as authAPI from 'services/api-auth';
import VamostInput from 'components/UI/Inputs/VamostInput'
import VamostCodeInput from 'components/UI/Inputs/VamostCodeInput'
import AuthWrapper from '../Shared/AuthWrapper'
import {
  PASSWORD_VALID,
  CODE_VALID,
} from 'utils/constants/validations'
import LINKS from 'utils/constants/links';
import { showErrorToast } from 'utils/helpers/toast';
import useLoading from 'utils/hooks/useLoading'
import styles from './styles';

const schema = yup.object().shape({
  password: PASSWORD_VALID,
  code: CODE_VALID
});

const ResetPassword = ({
  route,
  navigation
}) => {
  const { changeLoadingStatus } = useLoading();
  const { phoneNumber } = route.params;
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    changeLoadingStatus(true)
    try {
      const params = {
        newPassword: data.password,
        code: data.code,
        phoneNumber
      }

      await authAPI.fetchForgotPasswordSubmit(params)
      changeLoadingStatus(false)
      navigation.navigate(LINKS.SIGN_IN.NAME)
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
    <AuthWrapper title='Forgot Password'>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <VamostInput
            label='Enter new password.'
            placeholder='Create new password'
            secureTextEntry={true}
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            error={errors?.password?.message || ''}
            style={styles.input}
          />
        )}
        name='password'
        defaultValue=''
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <VamostCodeInput
            label='Enter the code we sent to your phone'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            error={errors?.code?.message || ''}
            style={styles.input}
          />
        )}
        name='code'
        defaultValue=''
      />

      <View style={styles.submitButton}>
        <Button block onPress={handleSubmit(onSubmit)}>
          <Text>Update Password</Text>
        </Button>
      </View>
    </AuthWrapper>
  );
};

export default memo(ResetPassword);