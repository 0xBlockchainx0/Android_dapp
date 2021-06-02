
import * as yup from 'yup'

const NAME_VALID = yup.string()
  .required('Please enter your name.');

const EMAIL_VALID = yup.string()
  .email('Please enter a valid email address.')
  .required('Please enter your email address.');

const PHONE_NUMBER_VALID = yup.string()
  .required('Please enter your phone number.');

const PASSWORD_VALID = yup.string()
  .required('Please enter in Password.')
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
    'Password should contain minimum 6 characters: at least one digit, upper and lower case required'
  );

const CONFIRM_PASSWORD_VALID = yup.string()
  .required('Please enter in Password.')
  .oneOf(
    [yup.ref('password'), null],
    'Passwords needs to match.'
  );

const CODE_VALID = yup.string()
  .required('Please enter in Code')
  .length(6, 'Invalid code. Please try again.');

const BIRTHDAY_VALID = yup.string()
  .required('Please enter your birthday')

export {
  NAME_VALID,
  EMAIL_VALID,
  PHONE_NUMBER_VALID,
  PASSWORD_VALID,
  CONFIRM_PASSWORD_VALID,
  CODE_VALID,
  BIRTHDAY_VALID
};