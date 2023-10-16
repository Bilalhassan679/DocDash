import {StyleSheet, Dimensions} from 'react-native';
import {fontFamily, fontSizes} from '../../theme/font';
import {colors} from '../../theme/color';
import {hp, wp} from '../../theme/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  centerMainView: {
    width: wp('100'),
    alignItems: 'center',
    paddingHorizontal: wp('4'),
    marginTop: hp('2'),
  },
  logoStyle: {
    marginBottom: hp('5'),
  },
  textStyle: {
    fontSize: hp('2.5'),
    color: colors.secondary,
    fontFamily: fontFamily.semibold,
    marginBottom: hp('2'),
  },
  forgetStyle: {
    width: '100%',
    textAlign: 'right',
    marginVertical: hp('1'),
    color: colors.secondary,
    fontFamily: fontFamily.regular,
    fontSize: hp('1.6'),
  },
  haveAcc: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1.5'),
  },
  haveAccText: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    fontSize: hp('1.8'),
    marginRight: 5,
  },
  haveAccTextSignup: {
    fontFamily: fontFamily.regular,
    color: colors.primary,
    fontSize: hp('1.8'),
    textDecorationColor: colors.primary,
    textDecorationLine: 'underline',
  },
});
