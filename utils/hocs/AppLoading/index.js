
import React, { memo } from 'react';
import { default as ExpoAppLoading } from 'expo-app-loading';
import { StyleProvider } from "native-base";
import { useFonts } from 'expo-font';

import getTheme from "styles/components";
import variables from "styles/variables/commonColor";

const AppLoading = ({
  children
}) => {

  let [fontsLoaded] = useFonts({
    Sf_Pro_Text: require('assets/fonts/sf-pro-text.ttf')
  });

  return (
    fontsLoaded
      ? (
        <StyleProvider style={getTheme(variables)}>
          {children}
        </StyleProvider>
      ) : (
        <ExpoAppLoading />
      )
  );
};

export default memo(AppLoading);