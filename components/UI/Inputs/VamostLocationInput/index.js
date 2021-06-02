
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Item,
  Input,
} from 'native-base';

import PathIcon from 'components/Icons/PathIcon'
import commonColor from 'styles/variables/commonColor'

const VamostLocationInput = ({
  placeholder = '',
  style,
  ...rest
}) => {

  return (
    <View style={style}>
      <Item style={styles.item}>
        <PathIcon style={styles.searchIcon} />
        <Input
          placeholder={placeholder}
          {...rest}
        />
      </Item>
    </View>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    marginRight: 14
  },
  item: {
    borderColor: commonColor.grey
  },
});

export default memo(VamostLocationInput);