import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Platform, Dimensions, StyleSheet, Image, Text} from 'react-native';
import * as Screens from '../screens/index';
import {
  home,
  home2,
  map,
  map2,
  notification,
  notification2,
  sendNotification,
  setting,
  setting2,
} from '../assets/images';
import {chat,chatActive,profile,profileActive,homeA,homeActive,notificationA,notificationActive,settingA ,settingActive} from '../assets/icons'
import { hp, wp } from '../theme/responsive';
import { colors } from '../theme/color';

globalStyles = {};
const isIOS = Boolean(Platform.OS == 'ios');
const tabarComponent = (activeImage, unActiveImage, ImageStyle) => {
  return {
    tabBarIcon: ({focused}) => (
      <View style={{...styles.tabarView(focused),}}>
        <Image
          style={{...styles.imgstyle, ...ImageStyle}}
          source={focused ? activeImage : unActiveImage}
        />
      {/* {focused  ? <Text style={{color:'black'}}>select</Text>:<Text style={{color:'black'}}>unselect</Text>} */}
      </View>
    ),
    title: '',
    tabBarLabelStyle: styles.tabarTitle,
  };
};

const Tab = createBottomTabNavigator();
function MybottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => 
      
      (
        {
        tabBarActiveTintColor: 'yellow',
        // tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor:console.log(route,'kalsdfjklajsf') && 'transparent',
        headerShown: false,
        
        tabBarActiveBackgroundColor: 'gra',
        tabBarInactiveBackgroundColor: 'white',
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarAllowFontScaling: true,
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarStyle: {
          // height: isIOS ? hp('5') : hp('2'),
          height: hp('5'),
          borderTopWidth: 0,
          width: wp('100'),
          alignSelf: 'center',
          backgroundColor: 'white',
          borderWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          // borderTopRightRadius: 20,
          // borderTopLeftRadius: 10,
          // overflow: 'hidden',
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={tabarComponent(homeActive, homeA)}
        component={Screens.Home}
      />
      <Tab.Screen
        name="EditTripScreen"
        options={tabarComponent(notificationActive, notificationA,   (ImageStyle = {
          // width: wp('24'),
          marginTop: hp('-1'),
          // height: hp('12'),
        }),)}
        component={Screens.Home}
      />
      <Tab.Screen
        name="SomeComponent"
        options={tabarComponent(
          chatActive,
          chat,
          (ImageStyle = {
            // width: wp('24'),
            marginTop: hp('-1'),
            // height: hp('12'),
          }),
        )}
        component={Screens.Home}
      />
      <Tab.Screen
        name="ChatScreen"
        options={tabarComponent(settingActive, settingA,   (ImageStyle = {
          // width: wp('24'),
          marginTop: hp('-1'),
          // height: hp('12'),
        }),)}
        component={Screens.Home}
      />
      <Tab.Screen
        name="AccountScreen"
        options={tabarComponent(profileActive, profile)}
        component={Screens.Home}
      /> 
 
    </Tab.Navigator>
  );
}
export default MybottomTabs;

const styles = StyleSheet.create({
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: hp('1.5'),
    backgroundColor: colors.red,
  },
  tabarTitle: {
    display: 'none',
  },
  tabarView: (focused, last) => ({
    width: 'auto',
    bottom: hp('0.5'),
  }),

  imgstyle: {
    resizeMode:'contain',
    // aspectRatio:1,
    width:wp('21'),
    // resizeMode: 'contain',
    height: hp('15'),

  },
});
