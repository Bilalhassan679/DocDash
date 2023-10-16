import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';


import { top_pattern } from '../assets/images';

export default function PatternBgTop() {
  return (
    <View style={styles.patternBg}>
      <Image style={styles.topStyle} resizeMode="cover" source={top_pattern} />      
    </View>
  );
}

const styles = StyleSheet.create({
  patternBg: {
    // flex: 1,
    position: 'relative',
    // height: '100%',
    // width: 'auto',
    zIndex: -10,
    // backgroundColor: 'red',
  },
  topStyle: {
    position: 'absolute',
    top: -70,
    left: 0,
  },
  
});
