
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { setCurrentUser, setAccessToken } from 'actions/auth'

const useInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = AsyncStorage.accessToken;
    const currentUser = AsyncStorage.currentUser;

    if (!!accessToken) {
      dispatch(setAccessToken(accessToken))
    }

    if (!!currentUser) {
      dispatch(setCurrentUser(JSON.parse(currentUser)))
    }
  }, [dispatch])
};

export default useInit;