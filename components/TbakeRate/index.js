
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Icon,
} from 'native-base';

import commonColor from 'styles/variables/commonColor';

const TbakeRate = ({
  value,
  label,
  style
}) => {

  return (
    <View style={[styles.container, style]}>
      {
        [...Array(5)].map((e, index) => (
          <Icon
            key={index}
            active={value >= index + 1}
            name="star"
            style={styles.icon}
          />
        ))
      }
      {
        label &&
        <Text style={styles.label}>
          {label}
        </Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center'
  },
  icon: {
    color: commonColor.contentTextColor,
    fontSize: 14,
  },
  label: {
    fontSize: 14,
    marginLeft: 8
  }
});

export default memo(TbakeRate);
