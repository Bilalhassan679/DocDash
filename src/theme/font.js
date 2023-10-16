import {Dimensions, Platform, Image, Text} from 'react-native';
const {width, height} = Dimensions.get('window');

 const fontFamily = {
    light: 'Montserrat-Light',
    medium: 'Montserrat-Medium',
    semibold: 'Montserrat-SemiBold',
    regular: 'Montserrat-Regular',
    bold: 'Montserrat-Bold',
    black: 'Montserrat-Black',
    }
    
    
/** FontSize **/
 const FontSize = {
  scale12: Math.round(width / 36),
  scale14: Math.round(width / 31.5),
  scale16: Math.round(width / 27),
  scale18: Math.round(width / 24),
  scale20: Math.round(width / 21.5),
  scale22: Math.round(width / 19.5), // Added scale22
  scale24: Math.round(width / 18),
  scale32: Math.round(width / 13.5),
  small: 8,
  medium: 10,
  regular: 12,
  default: 14,
  large: 16,
  xlarge: 18,
  xxlarge: 20,
  xxxlarge: 22,
};


export {fontFamily,FontSize}