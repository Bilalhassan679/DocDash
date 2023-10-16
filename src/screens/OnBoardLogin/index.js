import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './style';
import {TextComponent} from '../../components/TextComponent';
import PatternBgBottom from '../../components/PatternBgBottom';
import PatternBgTop from '../../components/PatternBgTop';
import ShareButton from '../../components/ShareButton';
import {wp} from '../../theme/responsive';

import {ls_in} from '../../assets/images';
import {line, apple, google, fb} from '../../assets/icons';

export default function OnBoardLogin({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView />

      <PatternBgTop />
      <ScrollView>
        <View style={styles.centerMainView}>
          <TextComponent
            numberOfLines={4}
            text={
              'Make live Consultation & Prescriptions Easily with Top Doctors'
            }
            styles={styles.centerHeading}
          />
          <Image style={styles.bannerImg} resizeMode="contain" source={ls_in} />
        </View>
        <View style={{marginHorizontal: wp('4')}}>
          <ShareButton
            onPress={() => {
              navigation.navigate('Login');
            }}
            title={'Login to your account'}
          />
          <View style={styles.haveAcc}>
            <TextComponent
              text={'Don’t have an account?'}
              styles={styles.haveAccText}
            />
            <TextComponent
              text={'Sign Up'}
              styles={styles.haveAccTextSignup}
              onPress={() => {
                navigation.navigate('Signup');
              }}
            />
          </View>
          <View style={styles.signUpWith}>
            <Image source={line} resizeMode="contain" />
            <TextComponent
              text={'Or Sign up with'}
              styles={styles.signUpWithText}
            />
            <Image source={line} resizeMode="contain" />
          </View>
          <View style={styles.iconStyles}>
            <Image
              source={fb}
              resizeMode="contain"
              style={styles.scIconStyle}
            />
            <Image
              source={apple}
              resizeMode="contain"
              style={styles.scIconStyle}
            />
            <Image
              source={google}
              resizeMode="contain"
              style={styles.scIconStyle}
            />
          </View>
        </View>
      </ScrollView>
      <PatternBgBottom />
    </View>
  );
}
