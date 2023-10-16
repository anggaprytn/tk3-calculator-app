import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './_types';
import { fadeTransition } from './transitions';

//Bottom Tabs
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator<RootStackParamList>();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BottomTabs'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          ...fadeTransition,
        }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return <AuthenticatedStack />;
};

export default RootNavigator;
