
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Icon,
} from 'native-base';
import * as Progress from 'react-native-progress'

import commonColor from 'styles/variables/commonColor';

const TbakeRateBar = ({
  value,
  label,
  width = 200,
  color = commonColor.black,
  unfilledColor = commonColor.grey,
  borderWidth = 0,
  style
}) => {

  return (
    <View style={style}>
      {
        label &&
        <Text style={styles.label}>
          {label}
        </Text>
      }
      <Progress.Bar
        progress={value}
        width={width}
        color={color}
        unfilledColor={unfilledColor}
        borderWidth={borderWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginBottom: 8
  }
});

export default memo(TbakeRateBar);
