
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Text,
} from 'native-base';

import commonColor from 'styles/variables/commonColor';

const ListFilterHeader = ({
  title,
  filters,
  style
}) => {

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.filter}>
        {filters.join(' • ')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    color: commonColor.contentTextColor,
    fontSize: 15,
    marginRight: 15
  },
  filter: {
    fontSize: 15,
    color: commonColor.darkGrey
  }
});

export default memo(ListFilterHeader);
