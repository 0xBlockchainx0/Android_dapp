
import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from 'screens/Auth/SignIn'
import SignUp from 'screens/Auth/SignUp'
import ForgotPassword from 'screens/Auth/ForgotPassword'
import ResetPassword from 'screens/Auth/ResetPassword'
import ConfirmCode from 'screens/Auth/ConfirmCode'
import VerifyEmail from 'screens/Auth/VerifyEmail'
import RegisterName from 'screens/Auth/RegisterName'
import RegisterBirthday from 'screens/Auth/RegisterBirthday'
import RegisterProfile from 'screens/Auth/RegisterProfile'
import Home from 'screens/Home'
import CustomDrawerContent from './CustomDrawerContent'
import LINKS from 'utils/constants/links'
import useInit from 'utils/hooks/useInit'

const Drawer = createDrawerNavigator();

const SCREENS = [
  { link: LINKS.SIGN_IN, component: SignIn },
  { link: LINKS.SIGN_UP, component: SignUp },
  { link: LINKS.FORGOT_PASSWORD, component: ForgotPassword },
  { link: LINKS.RESET_PASSWORD, component: ResetPassword },
  { link: LINKS.CONFIRM_CODE, component: ConfirmCode },
  { link: LINKS.VERIFY_EMAIL, component: VerifyEmail },
  { link: LINKS.REGISTER_NAME, component: RegisterName },
  { link: LINKS.REGISTER_BIRTHDAY, component: RegisterBirthday },
  { link: LINKS.REGISTER_PROFILE, component: RegisterProfile },
  { link: LINKS.HOME, component: Home }
]

const AppNavigator = () => {
  useInit();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType='slide'
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        {
          SCREENS.map((screen) => (
            <Drawer.Screen
              key={screen.link.NAME}
              name={screen.link.NAME}
              component={screen.component}
            />
          ))
        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default memo(AppNavigator);