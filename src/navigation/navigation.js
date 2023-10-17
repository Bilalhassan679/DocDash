import React from 'react';
import * as Screens from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MybottomTabs from './botttomNavigation';

const Stack = createNativeStackNavigator();
export default function StackNavigatior() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerShown: false,
        }}>
        <Stack.Screen name="Signup" component={Screens.Signup} />
        <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen name="Onboarding" component={Screens.Onboarding} />
        <Stack.Screen name="OnBoardLogin" component={Screens.OnBoardLogin} />
        <Stack.Screen name="Login" component={Screens.Login} />
        <Stack.Screen name="SignupAs" component={Screens.SignupAs} />

        {/* <Stack.Screen name="MyTabs" component={MyTabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
