import React, { memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  View,
  Button
} from 'native-base';

import commonColor from 'styles/variables/commonColor'

const ButtonGroupSelect = ({
  label,
  items,
  value,
  valueKey = 'value',
  labelKey = 'label',
  isAll = false,
  isLeft = false,
  onChange
}) => {
  const checkAll = useMemo(() => {
    let checked = true;
    for (const item of items) {
      checked = value.includes(item[valueKey]);
      if (!checked) {
        return checked;
      }
    }

    return checked
  }, [value, items]);

  const allButtonHandler = () => {
    let newValue = []

    if (!checkAll) {
      for (const item of items) {
        newValue = [
          ...newValue,
          item[valueKey]
        ]
      }
    }

    onChange(newValue)
  }

  const buttonHandler = (selectedValue) => () => {
    let newValue = [...value];
    const currentIndex = value.findIndex((item) => item === selectedValue);
    if (currentIndex < 0) {
      newValue = [
        ...newValue,
        selectedValue
      ]
    } else {
      newValue.splice(currentIndex, 1)
    }

    onChange(newValue)
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
          isAll && isLeft &&
          <Button
            key='all'
            light={!checkAll}
            style={styles.button}
            onPress={allButtonHandler}
          >
            <Text>All</Text>
          </Button>
        }
        {
          items.map((item, index) => (
            <Button
              key={index}
              light={!value.includes(item[valueKey])}
              style={styles.button}
              onPress={buttonHandler(item[valueKey])}
            >
              <Text>{item[labelKey]}</Text>
            </Button>
          ))
        }
        {
          isAll && !isLeft &&
          <Button
            key='all'
            light={!checkAll}
            style={styles.button}
            onPress={allButtonHandler}
          >
            <Text>All</Text>
          </Button>
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

export default memo(ButtonGroupSelect);