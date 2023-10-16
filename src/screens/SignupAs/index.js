import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './style';
import InputComponent from '../../components/InputComponent';
import PatternBgTop from '../../components/PatternBgTop';
import PatternBgBottom from '../../components/PatternBgBottom';
import {TextComponent} from '../../components/TextComponent';
import ShareButton from '../../components/ShareButton';
import {hp} from '../../theme/responsive';

import { logo } from '../../assets/images';


export default function SignupAS() {
    return (
        <View style={styles.container}>
          <PatternBgTop />
          <ScrollView>
            <View style={styles.centerMainView}>
              <Image source={logo} resizeMode="contain" style={styles.logoStyle} />
              <TextComponent text={'Signup as a ?'} styles={styles.textStyle} />
              <TextComponent text={'Choose the options below that you are signing up as a...'} styles={styles.paraStyle} numberOfLines={2} />
              
              <ShareButton title={'Parent'} style={{marginVertical: hp('3')}} />
              <ShareButton title={'Teenager'} style={styles.btnStyle} textStyle={styles.btnTextStyle}/>
             
            </View>
          </ScrollView>
          <PatternBgBottom />
        </View>
      );
}