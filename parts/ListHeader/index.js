
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Text,
  Icon
} from 'native-base';

import LinkButton from 'components/UI/Buttons/LinkButton'
import commonColor from 'styles/variables/commonColor'

const ListHeader = ({
  title,
  link,
  params,
  style
}) => {

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>
        {title}
      </Text>
      <LinkButton
        label='View all'
        icon={
          <Icon
            name='right'
            type='AntDesign'
            style={styles.viewIcon}
          />
        }
        link={link}
        params={params}
        style={styles.link}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    color: commonColor.contentTextColor,
    fontSize: 24,
    fontWeight: 'bold'
  },
  link: {
    fontSize: 14
  },
  viewIcon: {
    fontSize: 14,
    marginLeft: 5
  },
});

export default memo(ListHeader);
