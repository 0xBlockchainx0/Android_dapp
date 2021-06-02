import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

import CirclePlusIconButton from 'parts/IconButtons/CirclePlusIconButton';
import CircleMinusIconButton from 'parts/IconButtons/CircleMinusIconButton';
import CircleDeleteIconButton from 'parts/IconButtons/CircleDeleteIconButton';
import commonColor from 'styles/variables/commonColor'

const CountGroupButton = ({
  isNotRemovable = false,
  count,
  onCount,
  ...rest
}) => {

  const countHandler = (value) => () => {
    onCount(value)
  }

  return (
    <View style={styles.container}>
      {
        isNotRemovable || count > 1
          ? (
            <CircleMinusIconButton
              onPress={countHandler(count - 1)}
              {...rest}
            />
          ) : (
            <CircleDeleteIconButton
              onPress={countHandler(count - 1)}
              {...rest}
            />
          )
      }

      <View style={styles.countView}>
        <Text style={styles.count}>
          {count}
        </Text>
      </View>
      <CirclePlusIconButton
        onPress={countHandler(count + 1)}
        {...rest}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  countView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: commonColor.lightGrey
  },
  count: {
    fontSize: 12,
    color: commonColor.white
  }
});

export default memo(CountGroupButton);