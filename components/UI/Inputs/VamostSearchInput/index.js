
import React, { memo } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Item,
  Input,
  Icon,
} from 'native-base';

import FilterIcon from 'components/Icons/FilterIcon'
import commonColor from 'styles/variables/commonColor'

const VamostSearchInput = ({
  isFilter = true,
  placeholder = '',
  style,
  onFilter,
  ...rest
}) => {

  return (
    <View style={style}>
      <Item style={styles.item}>
        <Icon name='search' style={styles.searchIcon} />
        <Input
          placeholder={placeholder}
          {...rest}
        />
        {isFilter &&
          <TouchableOpacity onPress={onFilter}>
            <FilterIcon />
          </TouchableOpacity>
        }
      </Item>
    </View>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    fontSize: 20,
    opacity: 0.3,
    marginRight: 10
  },
  item: {
    borderColor: commonColor.grey
  },
});

export default memo(VamostSearchInput);