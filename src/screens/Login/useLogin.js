import { View, Text } from 'react-native'
import React from 'react'

const {default: useFormHook} = require('../../Hooks/useFormHook');
const {default: Schemas} = require('../../utils/validations');
const useLogin = (navigate) => {
  const {handleSubmit, errors, reset, control, getValues}=useFormHook(Schemas.loginSchema)


  return {errors, control}
}

export default useLogin