import {Dimensions, StyleSheet} from 'react-native';
import {hp, wp} from '../../theme/responsive';
import {colors} from '../../theme/color';
import {fontFamily} from '../../theme/font';

export const styles = StyleSheet.create({
   dotList: {
    flexDirection: 'row',
    width: wp('18'),
    height: hp('15'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomContainer: {   
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    
    flexWrap: 'wrap',
    paddingRight: wp('3'),
    marginHorizontal: wp('4')

  },
  centerMainView: {
    width: wp('100'),
    alignItems: 'center',
    paddingHorizontal: wp('4'),
  },
  centerHeading: {
    fontSize: hp('4.4'),
    fontFamily: fontFamily.bold,
    marginVertical: hp('2'),
    paddingHorizontal: wp('4'),
    width: wp('100'),
    textAlign: 'left',
    color: colors.secondary,
  },
  centerText: {
    fontSize: hp('2.2'),
    fontFamily: fontFamily.regular,
    paddingHorizontal: wp('4'),
    width: wp('100'),
    textAlign: 'left',
    color: colors.textColor,
  },
  dot: (currentIndex, index) => ({
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    height: Dimensions.get('window').width * 0.016,
    width:
      currentIndex == index
        ? Dimensions.get('window').width * 0.08
        : Dimensions.get('window').width * 0.04,
    backgroundColor: currentIndex == index ? colors.secondary : colors.white,
    borderWidth: currentIndex == index ? 0 : 1,
  }),
  bannerImg: {
    height: hp('60'),
    width: wp('90'),
    paddingHorizontal: wp('4'),
  },
  btnArrow:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between', 
    width: 'auto',  
  },
  arrowText:{
    fontFamily: fontFamily.medium,
    fontSize: hp('2'),
    paddingRight: wp('3')
  }
});
