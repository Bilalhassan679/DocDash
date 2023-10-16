import {StyleSheet , Dimensions} from 'react-native';
import { fontFamily, fontSizes } from '../../theme/font';
import { colors } from '../../theme/color';
import { hp , wp } from '../../theme/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    // flexDirection: 'row',
    paddingBottom: 0,
    position: 'relative',  
  },
  centerMainView: {
    width: wp('100'),
    alignItems: 'center',
    marginHorizontal: wp('4'),
  },
  centerHeading: {
    fontSize: hp('4.4'),
    fontFamily: fontFamily.bold,
    marginTop: hp('2'),
    // paddingHorizontal: wp('2'),
    width: wp('100'),
    textAlign: 'left',
    color: colors.secondary,
  },
 
  bannerImg: {
    height: hp('45'),
    width: wp('90'),
    // paddingHorizontal: wp('2'),
  },
  haveAcc:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1.5'),
    marginHorizontal: wp('4')
  },
  signUpWith:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: hp('3.5'),    
  },
  iconStyles:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  haveAccText:{
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    fontSize: hp('1.8'),
    marginRight: 5
  },
  haveAccTextSignup:{
    fontFamily: fontFamily.regular,
    color: colors.primary,
    fontSize: hp('1.8'),
    textDecorationColor: colors.primary,
    textDecorationLine: 'underline'
  },
  signUpWithText:{
    fontSize: hp('1.6'),
    fontFamily: fontFamily.regular,
    color: colors.secondary
  },
  scIconStyle:{
    width: wp('10'),
    paddingHorizontal: wp('8')
  }
  
});