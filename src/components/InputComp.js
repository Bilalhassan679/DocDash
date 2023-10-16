import React, {useCallback, useRef, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import { colors } from '../theme/color';
import {Touchable} from './Touchable';
import { hp , wp } from '../theme/responsive';
import { eye , eyeOff } from '../assets/icons';
import { TextComponent } from './TextComponent';

export const InputComponent = ({
  minLength,
  placeholder,
  isRequired,
  isSecure,
  control,
  name,
  errors,
  type,
  autoCapitalize = 'none',
  defaultValue = '',
  isDisabled,
  maxLength,
  editable,
  viewStyle,
  isImage,
  forPasswordStyle,
  textStyle,
  inputIconStyle,
  inputLines,
  multiline,
  inputLength,
}) => {
  const [show, setShow] = useState(!isSecure);
  const handleClick = () => setShow(!show);
  const keyboardType = ['number', 'reset_code'].includes(name)
    ? 'phone-pad'
    : 'default';
  // const [countLine, setLines] = useState();
  // const textLengthRef = useRef(0);
  // const TextCount = useCallback(() => {
  //   return (
  //     <TextComponent
  //       styles={styles.textInput}
  //       text={`${textLengthRef.current.length}/200`}
  //     />
  //   );
  // }, [textLengthRef]);
  // const {getValues} = useForm();
  const [length, setLength] = useState('');
  return (
    <>
      <Controller
        render={({field: {onChange, value}}) => (
          setLength(value),
          (
            // (textLengthRef.current = value),
            // console.log(value, textLengthRef.current.length, 'asdkjasldjk'),
            <View style={{...styles.textfield, ...viewStyle}}>
              {isImage && (
                <Image
                  source={isImage}
                  style={{
                    resizeMode: 'contain',
                    ...styles.inputIcon,
                    ...inputIconStyle,
                  }}
                />
              )}
              <TextInput
                type={type}
                maxLength={maxLength}
                style={{...forPasswordStyle}}
                numberOfLines={inputLines}
                multiline={multiline}
                {...{
                  value,
                  isDisabled,
                  selectionColor: colors.textColor,
                  placeholder,
                  keyboardType,
                  style: {...styles.input(isSecure), ...textStyle},
                  secureTextEntry: !show,
                  onChangeText: onChange,
                  placeholderTextColor:  colors.textColor,
                  fontSize: hp('2'),
                  autoCapitalize,
                  autoCorrect: false,
                  spellCheck: false,
                  editable,
                }}
              />

              {isSecure && (
                <Touchable style={styles.eyeContainer} onPress={handleClick}>
                  <Image
                    source={show ? eye : eyeOff}
                    style={{
                      resizeMode: 'contain',
                      tintColor:  colors.textColor,
                    }}
                  />
                </Touchable>
              )}
            </View>
          )
        )}
        {...{
          name,
          control,
          defaultValue,
          rules: {required: Boolean(isRequired), minLength},
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
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
              styles={{textAlign: 'right', color: colors.primary}}
              text={`${length.length}/200`}
            />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    textAlign: 'right',
    fontSize: hp('1.5'),
    color: colors.textColor,
  },
  textfield: {
    width: '100%',
    borderWidth: 1,
    height: hp('7'),
    borderRadius: 15,
    marginVertical: hp('1'),
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: colors.placeholderColor,
    marginTop: hp('2.5'),
    backgroundColor: 'transparent',
  },
  input: isSecure => ({
    height: '100%',
    width: isSecure ? '75%' : '86%',
    borderRadius: 2,
    // textAlign: 'left',
    color: colors.black,
    paddingHorizontal: wp('2'),
    paddingLeft: wp('3'),
    fontWeight: '600',
  }),
  eyeContainer: {
    width: 30,
    height: 30,
    // top: '30%',
    right: '1%',
    marginRight: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: colors.secondary,
  },
  inputIcon: {
    marginLeft: hp('2'),
    height: hp('3'),
    width: wp('6'),
  },
});