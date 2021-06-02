
import React, { memo, useRef } from 'react';
import { useDispatch } from 'react-redux';
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
import {
  PHONE_NUMBER_VALID,
  PASSWORD_VALID,
  EMAIL_VALID
} from 'utils/constants/validations'
import LINKS from 'utils/constants/links';
import { showErrorToast } from 'utils/helpers/toast'
import useLoading from 'utils/hooks/useLoading'
import styles from './styles';

const schema = yup.object().shape({
  phoneNumber: PHONE_NUMBER_VALID,
  password: PASSWORD_VALID,
  email  : EMAIL_VALID
});

const SignIn = ({
  navigation
}) => {
  const dispatch = useDispatch()
  const phoneRef = useRef();
  const { changeLoadingStatus } = useLoading();

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    const countryCallingCode = phoneRef.current.getCallingCode();
    const phoneNumber = `+${countryCallingCode}${data.phoneNumber}`;

    try {
      changeLoadingStatus(true)
      const params = {
        phoneNumber,
        password: data.password,
      }
      const user = await authAPI.fetchLogin(params);
      dispatch(setCurrentUser(user));

      changeLoadingStatus(false)

      if (user?.birthday) {
        navigation.navigate(LINKS.HOME.NAME)
      } else {
        navigation.navigate(LINKS.VERIFY_EMAIL.NAME)
      }
    } catch (error) {
      changeLoadingStatus(false)

      if (error.code === 'NotAuthorizedException') {
        const response = await userAPI.fetchUserByParam({
          type: 'phone_number',
          value: phoneNumber,
        });

        const user = response.Items[0];
        const isUserExists = !!response.Items.length;
        const isUserVerified = user?.phone_number_verified === "true";

        if (isUserExists && !isUserVerified) {
          const username = user && user.cognito_username;

          await authAPI.fetchResendConfirmationCode({ username });
          navigation.navigate(LINKS.CONFIRM_CODE.NAME, {
            username,
            phoneNumber,
            password: data.password
          })
        } else {
          if (error?.message) {
            showErrorToast({
              text: error?.message
            })
          }
        }
      } else {
        if (error?.message) {
          showErrorToast({
            text: error?.message
          })
        }
      }
    }
  };

  const forgotPasswordHandler = () => {
    navigation.navigate(LINKS.FORGOT_PASSWORD.NAME)
  }

  return (
    <AuthWrapper title='Bring you a trading experience, not just a tools.'>
    <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <VamostInput
            placeholder='Enter email'
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

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <VamostInput
            placeholder='Enter password'
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
      <View>
      <Button transparent full dark onPress={forgotPasswordHandler} style = {{display : 'flex', justifyContent:'flex-end'}}>
        <Text style = {{ color : '#FE6220'}} text = 'rig'>Forgot password?</Text>
      </Button>
      </View>
      <View style={styles.submitButton}>
        <Button danger block onPress={handleSubmit(onSubmit)} style = {{backgroundColor : '#A05314'}}>
          <Text >Log in</Text>
        </Button>
      </View>
    </AuthWrapper>
  );
};

export default memo(SignIn);