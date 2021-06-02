import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import Amplify from '@aws-amplify/core';

import store from 'store';
import AppNavigator from 'AppNavigator'
import AppLoading from 'utils/hocs/AppLoading'

Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_ZIrXrwFil",
    userPoolWebClientId: "60cllkc27cbh07dl2pja9up1cf"
  },
});

const App = () => {

  useEffect(() => {
    LogBox.ignoreAllLogs();
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])

  return (
    <AppLoading>
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    </AppLoading>
  );
};

export default App;