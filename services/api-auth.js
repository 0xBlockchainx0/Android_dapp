import Auth from '@aws-amplify/auth';

const parseUser = (response) => {
  const id = response.attributes.sub || null;
  const phoneNumber = response.attributes.phone_number || null;
  const isPhoneVerified = response.attributes.phone_number_verified || null;
  const email = response.attributes.email || null;
  const name = response.attributes.name || null;
  const nickname = response.attributes.preferred_username || null;
  const birthday = response.attributes.birthdate || null;

  return {
    id,
    phoneNumber,
    isPhoneVerified,
    email,
    name,
    nickname,
    birthday,
  };
};

export const fetchRegister = async ({
  phoneNumber,
  username,
  password,
}) => {
  return await Auth.signUp({
    username,
    password,
    attributes: {
      phone_number: phoneNumber,
    },
  });
};

export const fetchRegisterVerify = async ({
  username,
  code,
}) => {
  await Auth.confirmSignUp(`${username}`, `${code}`);
};

export const fetchLogin = async ({
  phoneNumber,
  password,
}) => {
  const response = await Auth.signIn({ username: phoneNumber, password });

  return parseUser(response);
};

export const fetchLogout = async () => {
  await Auth.signOut();
};

export const fetchCurrentUser = async () => {
  const response = await Auth.currentAuthenticatedUser();

  return response.attributes ? parseUser(response) : null;
};

export const fetchCurrentCognitoUser = async () => {
  return await Auth.currentAuthenticatedUser();
};

export const fetchUpdateUser = async ({
  user,
  attributes,
}) => {
  await Auth.updateUserAttributes(user, attributes);
};

export const fetchForgotPassword = async ({
  phoneNumber,
}) => {
  await Auth.forgotPassword(phoneNumber);
};

export const fetchForgotPasswordSubmit = async ({
  phoneNumber,
  code,
  newPassword,
}) => {
  await Auth.forgotPasswordSubmit(phoneNumber, code, newPassword);
};

export const fetchResendConfirmationCode = async ({
  username,
}) => {
  await Auth.resendSignUp(username);
};
