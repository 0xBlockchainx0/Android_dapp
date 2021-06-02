
import React, { memo, useRef } from 'react';
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
import VamostPhoneInput from 'components/UI/Inputs/VamostPhoneInput'
import AuthWrapper from '../Shared/AuthWrapper'
import { PHONE_NUMBER_VALID } from 'utils/constants/validations'
import LINKS from 'utils/constants/links';
import MESSAGES from 'utils/constants/messages';
import { showErrorToast } from 'utils/helpers/toast';
import useLoading from 'utils/hooks/useLoading'
import styles from './styles';

const schema = yup.object().shape({
  phoneNumber: PHONE_NUMBER_VALID,
});

const ForgotPassword = ({
  navigation
}) => {
  const { changeLoadingStatus } = useLoading();
  const phoneRef = useRef();

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      changeLoadingStatus(true)
      const countryCallingCode = phoneRef.current.getCallingCode();
      const phoneNumber = `+${countryCallingCode}${data.phoneNumber}`;

      const response = await userAPI.fetchUserByParam({
        type: 'phone_number',
        value: phoneNumber,
      });
      const user = response.Items[0];
      const isUserExists = !!response.Items.length;
      const isUserVerified = user?.phone_number_verified === "true";

      if (isUserExists && isUserVerified) {
        const params = {
          phoneNumber
        }
        await authAPI.fetchForgotPassword(params);
        changeLoadingStatus(false)
        navigation.navigate(LINKS.RESET_PASSWORD.NAME, params);
        return;
      }

      if (isUserExists && !isUserVerified) {
        const username = user.cognito_username;
        await authAPI.fetchResendConfirmationCode({ username });
        changeLoadingStatus(false)
        navigation.navigate(LINKS.CONFIRM_CODE.NAME, {
          username,
          phoneNumber,
          password: ""
        })
        return;
      }

      showErrorToast({
        text: MESSAGES.USER_NOT_EXIST
      })
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
          <VamostPhoneInput
            ref={phoneRef}
            label="Please enter the phone number you used to register and we'll send you the recovery code"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors?.phoneNumber?.message || ''}
            style={styles.input}
          />
        )}
        name='phoneNumber'
        defaultValue=''
      />

      <View style={styles.submitButton}>
        <Button block onPress={handleSubmit(onSubmit)}>
          <Text>Send</Text>
        </Button>
      </View>
    </AuthWrapper>
  );
};

export default memo(ForgotPassword);