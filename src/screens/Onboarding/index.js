import React, {memo, useCallback, useRef} from 'react';
import {View, FlatList, Dimensions, Image, SafeAreaView} from 'react-native';
import useOnboardingScreen from './useOnboarding';
import {styles} from './style';
// import { keyExtractor } from '../../Utils';
import {hp, wp} from '../../theme/responsive';
import {TextComponent} from '../../components/TextComponent';
import {onBoardingData} from '../../utils/localDB';
import PatternBgTop from '../../components/PatternBgTop';
import PatternBgBottom from '../../components/PatternBgBottom';
import {Touchable} from '../../components/Touchable';

import {arrow} from '../../assets/icons';

export default function Onboarding({navigation}) {
  const {
    onBoardinData,
    currentIndex,
    onSnapToItem,
    getStart,
    flatListRef,
    handleNext,
  } = useOnboardingScreen(navigation);

  const renderItem = useCallback(
    ({item, index}) => {
      {
        console.log('alsdkjfkladsjflkadjs', item);
      }
      return (
        <View
          key={index}
          style={{
            flex: 1,
            width: Dimensions.get('window').width,
            // flexDirection: 'row',
            paddingBottom: 0,
            position: 'relative',
          }}>
          <SafeAreaView />
          <View style={styles.centerMainView}>
            <TextComponent
              numberOfLines={2}
              text={item?.heading}
              styles={styles.centerHeading}
            />
            <TextComponent
              numberOfLines={2}
              text={item?.text}
              styles={styles.centerText}
            />
            <Image
              style={styles.bannerImg}
              resizeMode="contain"
              source={item?.imageUrl}
            />
          </View>
        </View>
      );
    },
    [currentIndex],
  );

  const renderItemDots = useCallback(
    ({index}) => <View style={styles.dot(currentIndex, index)} />,
    [currentIndex],
  );

  return (
    <View style={{flex: 1, position: 'relative', width: wp('100')}}>
      <PatternBgTop />

      <FlatList
        ref={flatListRef}
        data={onBoardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // keyExtractor={keyExtractor}
        onMomentumScrollEnd={onSnapToItem}
      />

      {
        <View style={styles.bottomContainer}>
          {/* {currentIndex === 2 ? (
            <ShareButton
              title={'Get Started'}
              style={styles.getStart}
              onPress={getStart}
            />                
            ) : (
              <ShareButton
              title={'Next'}
              style={styles.getStart}
              onPress={handleNext}
              />
            )} */}
          <FlatList
            data={onBoardingData} // Use the same data for the dots
            renderItem={renderItemDots}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dotList}
            style={{alignSelf: 'flex-start', marginTop: hp('1.2')}}
          />

          <Touchable
            style={styles.btnArrow}
            onPress={() => {
              navigation.navigate('OnBoardLogin');
            }}>
            <TextComponent text={'Get Started'} styles={styles.arrowText} />
            <Image
              source={arrow}
              resizeMode="contain"
              style={{width: wp('15')}}
            />
          </Touchable>
        </View>
      }
      <PatternBgBottom />
    </View>
  );
}
