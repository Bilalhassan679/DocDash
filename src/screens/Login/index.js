import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './style';
import InputComponent from '../../components/InputComponent';
import PatternBgTop from '../../components/PatternBgTop';
import PatternBgBottom from '../../components/PatternBgBottom';
import {TextComponent} from '../../components/TextComponent';
import ShareButton from '../../components/ShareButton';
import {hp} from '../../theme/responsive';
import {sms, lock} from '../../assets/icons';
import {logo} from '../../assets/images';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView />

      <PatternBgTop />
      <ScrollView>
        <View style={styles.centerMainView}>
          <Image source={logo} resizeMode="contain" style={styles.logoStyle} />
          <TextComponent
            onPress={() => navigation.navigate('Home')}
            text={'Login'}
            styles={styles.textStyle}
          />

          <InputComponent
            iconImg={sms}
            keyboard={'email-address'}
            placeholder={'Email Address'}
          />
          <InputComponent
            iconImg={lock}
            keyboard={'visible-password'}
            placeholder={'Password'}
          />

          <TextComponent
            text={'Forget Password?'}
            styles={styles.forgetStyle}
          />
          <ShareButton title={'Login'} style={{marginTop: hp('3')}} />
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
        </View>
      </ScrollView>
      <PatternBgBottom />
    </View>
  );
}
