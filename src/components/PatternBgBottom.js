import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

import {  bottom_pattern } from '../assets/images';

export default function PatternBgBottom() {
  return (
    <View style={styles.patternBg}>
      <Image style={styles.bottomStyle} resizeMode="cover" source={bottom_pattern} />      
    </View>
  );
}

const styles = StyleSheet.create({
  patternBg: {
    flex: 1,
    position: 'relative',
    // height: '100%',
    // width: 'auto',
    zIndex: -10,
    // backgroundColor: 'red',
  },
  
  bottomStyle: {
    position: 'absolute',
    bottom: -70,
    right: 0,
  },
});
