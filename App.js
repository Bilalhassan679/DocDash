import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import StackNavigatior from './src/navigation/navigation';
const logoScreen = require('./src/assets/images/splash.jpg');

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };

  // const {isloading} = getState('isloading');
  const time = () => {
    return 2000;
  };

  //Get Token for firebase
  const getTokenFunction = async()=>{
    const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    const authToken = await messaging().getToken();
    console.log('Authorization status:', authStatus);
    console.log({authToken})
  }

  }


  useEffect(() => {
    getTokenFunction()
    setTimeout(function () {
      Hide_Splash_Screen();
    }, time());
  }, []);
  
  let Splash_Screen = (
    <ImageBackground
      source={logoScreen}
      resizeMode="cover"
      style={styles.SplashScreen_RootView}></ImageBackground>
  );

  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      {isVisible === true ? Splash_Screen : <StackNavigatior />}
    </>
  );
}

const styles = StyleSheet.create({
  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
