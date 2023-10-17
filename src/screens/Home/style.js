import {StyleSheet} from 'react-native';
import { FontSize, fontFamily, fontSizes } from '../../theme/font';
import { colors } from '../../theme/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'    
  },
  text:{
    fontFamily: fontFamily.black,
    fontSize: FontSize.scale32,
    color: colors.black
  }
  
});