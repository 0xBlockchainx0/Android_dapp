
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { View, SafeAreaView } from 'react-native';
import {
  Content,
  Text,
} from 'native-base';

import TbakeSpinner from 'components/TbakeSpinner';
import Logo from 'components/Logo'
import AuthHeader from '../AuthHeader'
import styles from './styles';

const AuthWrapper = ({
  title,
  children
}) => {
  const { loadingStatus } = useSelector(state => state.loading)

  return (
    <SafeAreaView style={styles.container}>
      <TbakeSpinner loading={loadingStatus} />
      <AuthHeader />
      <Content padder contentContainerStyle={styles.content}>
        <View style = {{display : 'flex', alignItems :'center'}}>
          <Logo style={{ width: 218, height: 168 }} />
          <Text style={styles.subtitle}>
            {title}
          </Text>
        </View>
        {children}
      </Content>
    </SafeAreaView>
  );
};

export default memo(AuthWrapper);