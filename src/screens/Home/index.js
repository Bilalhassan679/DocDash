import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';

import PatternBgBottom from '../../components/PatternBgBottom';
import PatternBgTop from '../../components/PatternBgTop';

export default function Home({navigation}) {
  return (
    <>
      <View style={styles.container}>
     
        <PatternBgTop />     
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate('Onboarding');
          }}>
          Home
        </Text>
          <PatternBgBottom />
     
      </View>
      
    </>
  );
}
