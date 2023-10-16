import {StyleSheet} from 'react-native';
import { fontFamily, fontSizes } from '../../theme/font';
import { colors } from '../../theme/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'    
  },
  text:{
    fontFamily: fontFamily.black,
    fontSize: fontSizes.excepLarge,
    color: colors.black
  }
  
});