import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './style';
import InputComponent from '../../components/InputComponent';
import PatternBgTop from '../../components/PatternBgTop';
import PatternBgBottom from '../../components/PatternBgBottom';
import {TextComponent} from '../../components/TextComponent';
import ShareButton from '../../components/ShareButton';
import {hp} from '../../theme/responsive';

import {logo} from '../../assets/images';
import {sms, line, apple, google, fb} from '../../assets/icons';

export default function Signup({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView />

      <PatternBgTop />
      <ScrollView>
        <View style={styles.centerMainView}>
          <Image source={logo} resizeMode="contain" style={styles.logoStyle} />
          <TextComponent text={'Signup'} styles={styles.textStyle} />
          <InputComponent
            iconImg={sms}
            keyboard={'default'}
            placeholder={'First Name'}
          />
          <InputComponent
            iconImg={sms}
            keyboard={'default'}
            placeholder={'Last Name'}
          />
          <InputComponent
            iconImg={sms}
            keyboard={'email-address'}
            placeholder={'Email Address'}
          />
          <InputComponent
            iconImg={sms}
            keyboard={'visible-password'}
            placeholder={'Password'}
          />
          <InputComponent
            iconImg={sms}
            keyboard={'default'}
            placeholder={'First Name'}
          />
          <InputComponent
            iconImg={sms}
            keyboard={'default'}
            placeholder={'First Name'}
          />
          <ShareButton
            title={'Sign up'}
            style={{marginTop: hp('3')}}
            onPress={() => {
              navigation.navigate('SignupAs');
            }}
          />
          <TextComponent text={'Or'} styles={styles.or} />
          <View style={styles.signUpWith}>
            <Image source={line} resizeMode="contain" />
            <TextComponent
              text={'Sign up with'}
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
