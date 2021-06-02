
import React, { memo, useEffect, useState } from 'react';

import LoadingScreen from 'parts/LoadingScreen'
import CompletedScreen from 'parts/CompletedScreen'
import LINKS from 'utils/constants/links';
import delay from 'utils/helpers/delay';

const RegisterProfile = ({
  navigation
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    registerProfile();
  }, [])

  useEffect(() => {
    if (loading) {
      setTimeout(() => navigation.navigate(LINKS.HOME.NAME), 5000)
    }
  }, [loading])

  const registerProfile = async () => {
    await delay(3000)
    setLoading(true);
  };

  return (
    loading ? <CompletedScreen /> : <LoadingScreen />
  );
};

export default memo(RegisterProfile);