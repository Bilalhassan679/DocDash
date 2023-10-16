import React from 'react';
import {Text} from 'react-native';
import { hp } from '../theme/responsive';
import { colors } from '../theme/color';

export const TextComponent = ({text, styles, onPress, numberOfLines}) => {
  return (
    <Text
      numberOfLines={numberOfLines ?? 1}
      onPress={onPress}
      style={{color: colors.black, fontSize: hp('2'), ...styles}}>
      {text}
    </Text>
  );
};