import React, { useEffect, useRef, useState } from 'react';
import * as Screens from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MybottomTabs from './botttomNavigation';
import messaging from '@react-native-firebase/messaging';

const Stack = createNativeStackNavigator();

export default function StackNavigatior() {
  const initialRouteRef = useRef('Signup');
  const [bool,setBool] = useState(false);

  useEffect(() => {
    const checkInitialNotification = async () => {
      const remoteMessage = await messaging().getInitialNotification();
      if (remoteMessage) {
      setBool(true)
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        initialRouteRef.current = 'Onboarding'; // Update the ref value to "Home"
      }
    };
    checkInitialNotification();
  }, [bool]);
  console.log(bool,'jdjdjduddkdidli')
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={initialRouteRef}
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerShown: false,
        }}>
       {bool ?<Stack.Screen name="MybottomTabs" component={MybottomTabs} />:<Stack.Screen name="Onboarding1" component={Screens.Onboarding} />}
        <Stack.Screen name="StackNavigatior" component={StackNavigatior} />
        <Stack.Screen name="Signup" component={Screens.Signup} />
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen name="Onboarding" component={Screens.Onboarding} />
        <Stack.Screen name="OnBoardLogin" component={Screens.OnBoardLogin} />
        <Stack.Screen name="Login" component={Screens.Login} />
        <Stack.Screen name="SignupAs" component={Screens.SignupAs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
