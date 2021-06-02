
import React, { memo, useRef } from 'react';
import { View } from 'react-native';
import {
  Text,
  Button,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import * as authAPI from 'services/api-auth';
import * as userAPI from 'services/api-user';
import VamostInput from 'components/UI/Inputs/VamostInput'
import AuthWrapper from '../Shared/AuthWrapper'
import {
  PHONE_NUMBER_VALID,
  PASSWORD_VALID,
  EMAIL_VALID
} from 'utils/constants/validations'
import LINKS from 'utils/constants/links';
import MESSAGES from 'utils/constants/messages';
import {
  showErrorToast,
  showInfoToast,
} from 'utils/helpers/toast'
import useLoading from 'utils/hooks/useLoading'
import styles from './styles';
import {  } from '../../../utils/constants/validations';

const schema = yup.object().shape({
  phoneNumber: PHONE_NUMBER_VALID,
  password: PASSWORD_VALID,
  confirmPassword : PASSWORD_VALID,
  email :EMAIL_VALID
});

const SignUp = ({
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
      const username = uuidv4();

      let response = await userAPI.fetchUserByParam({
        type: 'phone_number',
        value: phoneNumber,
      });

      if (response.Items.length) {
        showInfoToast({ text: MESSAGES.USER_EXIST })
        changeLoadingStatus(false)
        navigation.navigate(LINKS.SIGN_IN.NAME, params);
        return;
      }

      const params = {
        username,
        phoneNumber,
        password: data.password,
      }
      response = await authAPI.fetchRegister(params);

      await userAPI.fetchPostUserInfo({
        userId: response.userSub,
        attributes: {
          cognito_username: username,
          phone_number: phoneNumber,
          phone_number_verified: 'false',
        },
      });
      changeLoadingStatus(false)

      navigation.navigate(LINKS.CONFIRM_CODE.NAME, params)
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
    <AuthWrapper title="Create an account">
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

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <VamostInput
            placeholder='Re-Enter password'
            secureTextEntry={true}
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            error={errors?.password?.message || ''}
            style={styles.input}
          />
        )}
        name='confirmPassword'
        defaultValue=''
      />

      <View style={styles.submitButton}>
        <Button block onPress={handleSubmit(onSubmit)}  style = {{backgroundColor : '#A05314'}}>
          <Text>Register</Text>
        </Button>
      </View>
    </AuthWrapper>
  );
};

export default memo(SignUp);