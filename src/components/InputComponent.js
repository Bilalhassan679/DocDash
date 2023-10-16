import { View, Text  ,StyleSheet , TextInput ,Image } from 'react-native'
import React , {useState } from 'react'
import { colors } from '../theme/color';
import { fontSizes } from '../theme/font';
import { wp } from '../theme/responsive';




export default function InputComponent({placeholder , style , keyboard , value , iconImg , secureTextEntry}) {
    const [text, onChangeText] = useState('');

  return (
    <View style={styles.fieldSet}>
  
    <TextInput
        style={[styles.inputField , style]}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        keyboardType={keyboard}
        placeholderTextColor={colors.placeholderColor}
        secureTextEntry={secureTextEntry}
      />
      <Image style={styles.iconstyle} source={iconImg}  resizeMode="cover" />
</View>
  )
}

const styles = StyleSheet.create({
    fieldSet:{      
      width: '100%',
        marginBottom: 15,
        padding: 5,     
        paddingLeft: 40,
        borderRadius: 15,
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        position: 'relative',
        borderWidth: 1,
        borderColor: 'rgba(17, 48, 95, 0.1)',       
    },   
    inputField:{
       fontSize: fontSizes.default,
       color: colors.secondary, 
    },
    iconstyle:{
        position: 'absolute',
        left: 8,
        top: 18
    }
});