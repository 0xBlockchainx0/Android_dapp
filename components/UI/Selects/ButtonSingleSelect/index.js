import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  View,
  Button
} from 'native-base';

import commonColor from 'styles/variables/commonColor'

const ButtonSingleSelect = ({
  label,
  items,
  value,
  onChange
}) => {
  const buttonHandler = (item) => () => {
    if (value === item) {
      onChange('')
    } else {
      onChange(item)
    }
  }

  return (
    <View style={styles.contain}>
      {
        label &&
        <Text style={styles.label}>
          {label}
        </Text>
      }

      <View style={styles.buttonContainer}>
        {
          items.map((item, index) => (
            <Button
              key={index}
              light={value !== item}
              style={styles.button}
              onPress={buttonHandler(item)}
            >
              <Text>{item}</Text>
            </Button>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    marginVertical: 12
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: commonColor.black,
    marginBottom: 12
  },
  buttonContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  button: {
    marginTop: 8,
    marginRight: 8
  }
});

export default memo(ButtonSingleSelect);