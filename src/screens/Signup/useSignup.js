import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Schemas from '../../utils/validations'
import useFormHook from '../../Hooks/useFormHook'

const useSignup = () => {

  const {handleSubmit, errors, reset, control, getValues}=useFormHook(Schemas.SignUpSchema)

  return{errors, control}
}

export default useSignup
