import React, { memo } from 'react';
import {
  StyleSheet,
  Text,
  Switch,
} from 'react-native';
import {
  View,
  ListItem,
  Left,
  Right,
} from 'native-base';

import commonColor from 'styles/variables/commonColor'

const VamostSwitch = ({
  label,
  subLabel,
  style,
  ...rest
}) => {

  return (
    <ListItem noBorder style={[{ marginLeft: 0 }, style]}>
      <Left>
        <View>
          {
            subLabel &&
            <Text style={styles.subLabel}>{subLabel}</Text>
          }
          <Text style={styles.label}>{label}</Text>
        </View>
      </Left>
      <Right>
        <Switch
          ios_backgroundColor={commonColor.black}
          {...rest}
        />
      </Right>
    </ListItem>
  )
}

export default memo(VamostSwitch);

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    color: commonColor.contentTextColor,
    fontWeight: 'bold'
  },
  subLabel: {
    fontSize: 12,
    color: commonColor.darkGrey
  }
})