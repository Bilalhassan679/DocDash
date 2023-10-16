import {StyleSheet , Dimensions} from 'react-native';
import { fontFamily, fontSizes } from '../../theme/font';
import { colors } from '../../theme/color';
import { hp , wp } from '../../theme/responsive';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'    
      },
      centerMainView: {
        width: wp('100'),
        alignItems: 'center',
        paddingHorizontal: wp('4'),
        marginTop: hp('2'),
      },
      logoStyle:{
        marginBottom: hp('5'),
      },
      textStyle:{
        fontSize: hp('4'),
        color: colors.secondary,
        fontFamily: fontFamily.bold,
        marginBottom: hp('2')
      },
      paraStyle:{
        fontSize: hp('2'),
        color: colors.textColor,
        fontFamily: fontFamily.regular,
        marginBottom: hp('2'),
        textAlign: 'center',
        width: '100%',
        paddingHorizontal: wp('5')
      },
      btnTextStyle:{
        color: colors.primary
      },
      btnStyle:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        position: 'relative',
        borderWidth: 1,
        borderColor: 'rgba(17, 48, 95, 0.1)', 
      }
      
});