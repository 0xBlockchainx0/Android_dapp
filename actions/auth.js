
import * as TYPES from './types'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserToken = ({ accessToken, user }) => dispatch => {
  dispatch(setAccessToken(accessToken));
  dispatch(setCurrentUser(user));
};

export const setAccessToken = accessToken => {
  AsyncStorage.setItem('accessToken', accessToken);
  return {
    type: TYPES.SET_ACCESS_TOKEN,
    payload: accessToken
  };
};

export const setCurrentUser = currentUser => {
  AsyncStorage.setItem('currentUser', JSON.stringify(currentUser));
  return {
    type: TYPES.SET_CURRENT_USER,
    payload: currentUser
  };
};

export const logoutUser = () => dispatch => {
  AsyncStorage.clear();
  dispatch(setAccessToken(''));
  dispatch(setCurrentUser({}));
};