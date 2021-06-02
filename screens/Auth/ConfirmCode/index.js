
import React, { memo } from 'react';
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
import VamostCodeInput from 'components/UI/Inputs/VamostCodeInput'
import AuthWrapper from '../Shared/AuthWrapper'
import { CODE_VALID } from 'utils/constants/validations'
import LINKS from 'utils/constants/links';
import { showErrorToast } from 'utils/helpers/toast';
import useLoading from 'utils/hooks/useLoading'
import styles from './styles';

const schema = yup.object().shape({
  code: CODE_VALID
});

const ConfirmCode = ({
  route,
  navigation
}) => {
  const dispatch = useDispatch();
  const { changeLoadingStatus } = useLoading();

  const { phoneNumber, username, password } = route.params;
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      changeLoadingStatus(true)
      const userByParam = await userAPI.fetchUserByParam({
        type: 'phone_number',
        value: phoneNumber,
      });

      const params = {
        code: data.code,
        username
      }
      await authAPI.fetchRegisterVerify(params);

      await userAPI.fetchUpdateUserInfo({
        userId: `${userByParam.Items[0].id}`,
        attributes: {
          phone_number_verified: 'true',
        },
      });

      if (!!password) {
        const authParams = {
          phoneNumber,
          password
        }
        const user = await authAPI.fetchLogin(authParams);
        changeLoadingStatus(false)

        dispatch(setCurrentUser(user));
        navigation.navigate(LINKS.VERIFY_EMAIL.NAME)
      } else {
        changeLoadingStatus(false)
        navigation.navigate(LINKS.SIGN_IN.NAME)
      }
    } catch (error) {
      changeLoadingStatus(false)
      if (error?.message) {
        showErrorToast({
          text: error?.message
        })
      }
    }
  };

  const resendCodeHandler = () => {
    authAPI.fetchResendConfirmationCode({ username });
  }

  return (
    <AuthWrapper
      title={
        <>
          {'Enter the 6-digit code sent to you at '}
          <Text style={styles.phoneNumber}>
            {phoneNumber}
          </Text>
        </>
      }
    >
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <VamostCodeInput
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

      <Text style={styles.description}>
        {"Didn't get a code? "}
        <Text style={styles.sendOver} onPress={resendCodeHandler}>
          Send Over
        </Text>
      </Text>

      <View style={styles.submitButton}>
        <Button block onPress={handleSubmit(onSubmit)}>
          <Text>Confirm</Text>
        </Button>
      </View>
    </AuthWrapper>
  );
};

export default memo(ConfirmCode);