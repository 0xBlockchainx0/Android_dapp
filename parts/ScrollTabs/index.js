
import React, { memo } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

import commonColor from 'styles/variables/commonColor'

const ScrollTabs = ({
  tabs,
  selectedTab,
  setSelectedTab,
  style
}) => {

  const tabHandler = (value) => () => {
    setSelectedTab(value)
  }

  return (
    <ScrollView
      horizontal
      style={[styles.container, style]}
      showsHorizontalScrollIndicator={false}
    >
      {
        tabs.map((item, index) => (
          <TouchableOpacity key={index} onPress={tabHandler(item)}>
            <Text style={[styles.tab, item === selectedTab && styles.selectedTab]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16
  },
  tab: {
    fontSize: 24,
    fontWeight: 'bold',
    color: commonColor.darkGrey,
    marginRight: 16
  },
  selectedTab: {
    color: commonColor.black
  }
});

export default memo(ScrollTabs);
