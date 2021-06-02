import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Text,
  Button
} from 'native-base'

import NoLocationIcon from 'components/Icons/NoLocationIcon'

const NoLocation = ({
  setOpenLocationModal
}) => {

  const refreshHandler = () => {
    setOpenLocationModal(true)
  };

  return (
    <View style={styles.container}>
      <NoLocationIcon />
      <Text style={styles.title}>
        Uh oh!
      </Text>

      <Text style={styles.description}>
        Please turn on Location Services in Settings to
        allow Vamost to determine your location, or enter
        a location to search manually.
      </Text>

      <View>
        <Button style={styles.button} onPress={refreshHandler}>
          <Text>Refresh</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20
  },
  description: {
    maxWidth: 242,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25
  },
  button: {
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 25,
  },
});

export default memo(NoLocation);