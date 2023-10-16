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
        fontSize: hp('2.5'),
        color: colors.secondary,
        fontFamily: fontFamily.semibold,
        marginBottom: hp('2')
      },
      or:{
        fontFamily: fontFamily.regular,
        fontSize: hp('1.8'),
        color: colors.placeholderColor,
        marginVertical: hp('2')
      },
      signUpWith:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp('2'),        
      },
      signUpWithText:{
        fontSize: hp('1.8'),
        fontFamily: fontFamily.medium,
        color: colors.secondary,
        marginHorizontal: hp('1')
      },
      iconStyles:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2')
      },
      scIconStyle:{
        width: wp('10'),
        paddingHorizontal: wp('8')
      }
});