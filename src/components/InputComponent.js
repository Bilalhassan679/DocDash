import { View, Text, StyleSheet, TextInput, Image, Touchable, Pressable } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../theme/color';
import { FontSize } from '../theme/font';
import { hp, wp } from '../theme/responsive';
import { Controller } from 'react-hook-form';
import { TextComponent } from './TextComponent';
import {eye, eyeOff} from '../assets/icons';
export default function InputComponent({
  name,
  errors,
  control,
  minLength,
  placeholder,
  style,
  keyboard,
  value,
  iconImg,
  secureTextEntry,
  multiline,
  numberOfLines,
  isRequired,
  defaultValue = '',
  inputLength,
  isSecure

}) {
  const [show, setShow] = useState(!isSecure);
  return (
      <Controller
        {...{
          name,
          control,
          defaultValue,
        }}
        render={({ field: { onChange, value } }) => (
          (
            <>

            <View style={styles.fieldSet}>
              <Image style={styles.iconstyle} source={iconImg} resizeMode="cover" />
              <TextInput
                placeholderTextColor={colors.placeholderColor}
                numberOfLines={numberOfLines}
                multiline={multiline}
                placeholder={placeholder}
                style={styles.inputField}
                onChangeText={onChange}
                value={value}
                secureTextEntry= {!show}

              />
                 {isSecure && (
                <Pressable style={styles.eyeContainer} onPress={()=>setShow(prev=>!prev)}>
                  <Image
                    source={show ? eye : eyeOff}
                    style={{
                      resizeMode: 'contain',
                      tintColor: colors.placeholderColor,
                    }}
                  />
                </Pressable>
              )}
            </View>

        
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
          marginHorizontal:wp('2.5'),
    marginBottom:hp('2'),


          // width: Platform.OS == 'ios' ? width * 0.875 : Sizes.width * 0.9,
          // width: Sizes.width * 0.9,
        }}>
        <View>
          {errors[name]?.message && (
            <Text style={[styles.error]}>{errors[name]?.message}</Text>
          )}
        </View>

      {inputLength && (
          <View style={{justifyContent: 'flex-end'}}>
            <TextComponent
              styles={{textAlign: 'right', color: colors.placeholderColor,fontSize:FontSize.scale14}}
              text={`${value.length}/200`}
            />
          </View>
        )}
      </View>
  </>
  )
  )}

      />


  );
}

const styles = StyleSheet.create({
  fieldSet: {
    width: wp('90'),
    height: hp('7'),
    flexDirection: 'row',
    marginBottom: hp('1'),
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(17, 48, 95, 0.1)',
    alignItems: 'center',
    paddingHorizontal: wp('4'),
  },
  inputField: {
    flex: 1,
    fontSize: FontSize.scale18,
    color: colors.secondary,
    marginLeft: wp('2'),
    padding: 5,
  },
  error: {
    flex:1,
    color: colors.red,
    fontSize:FontSize.scale14,
  }
});

