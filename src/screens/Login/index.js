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
import useLogin from './useLogin';

export default function Login({navigation}) {

  const {errors,control}=useLogin(navigation);


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
            style={styles.email}
            name={'email'}
            errors={errors}
            control={control}
            iconImg={sms}
            keyboard={'email-address'}
            placeholder={'Email Address'}

          />
          <InputComponent
            style={styles.password}
            name={'password'}
            errors={errors}
            control={control}
            iconImg={lock}
            placeholder={'Password'}
            isSecure={true}
            // defaultValue={__DEV__ ? 'Test@123' : ''}

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
