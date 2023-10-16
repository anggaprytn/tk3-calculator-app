import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from '@/routes/RootNavigation';
import { useFont } from '@/utils/hooks';
import Toast from 'react-native-toast-message';
import { initializeDB } from '@/utils/database/db';

initializeDB()
  .then(() => {
    console.log('DB Initialized');
  })
  .catch(err => {
    console.log(`DB Initialization failed: ${err}`);
  });

const MainApp = () => {
  const { loaded, error } = useFont();
  if (!loaded) {
    return null;
  }

  if (error) {
    console.error(error);
  }

  return (
    <NavigationContainer>
      <RootNavigation />
      <Toast />
    </NavigationContainer>
  );
};

export default MainApp;
