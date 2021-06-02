import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MainLayout from 'layout/MainLayout';
import VamostSearchInput from 'components/UI/Inputs/VamostSearchInput';
import LINKS from 'utils/constants/links';


const Home = () => {
  const navigation = useNavigation();

  const filterHandler = useCallback(() => {
    navigation.navigate(LINKS.FILTERS.NAME)
  }, [navigation])

  return (
    <MainLayout>
      <VamostSearchInput
        placeholder='Choose/Search Coin'
        onFilter={filterHandler}
        style={styles.searchInput}
      />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    marginBottom: 16
  }
});

export default memo(Home);