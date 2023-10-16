import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme/color';
import {fontSizes} from '../theme/font';
import {hp, wp} from '../theme/responsive';
import {Controller} from 'react-hook-form';
export default function InputComponent({
  placeholder,
  style,
  keyboard,
  value,
  iconImg,
  secureTextEntry,
}) {
  return (
    // <Controller>
    <View style={styles.fieldSet}>
      <Image style={styles.iconstyle} source={iconImg} resizeMode="cover" />

      <TextInput placeholder={placeholder} style={styles.inputField} />
    </View>
    // </Controller>
  );
}

const styles = StyleSheet.create({
  fieldSet: {
    width: wp('90'),
    height: hp('7'),
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(17, 48, 95, 0.1)',
    alignItems: 'center',
    paddingHorizontal: wp('4'),
  },
  inputField: {
    flex: 1,
    fontSize: fontSizes.default,
    color: colors.secondary,
    marginLeft: wp('2'),
    padding: 5,
  },
});
