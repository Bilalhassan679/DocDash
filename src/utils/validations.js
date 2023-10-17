import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';



const loginSchema = yup.object().shape({
    //For Login
    email: yup.string().min(3, 'Email must be valid').max(20, 'Email must be valid').
    required('Plese enter your email').
    matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Please enter valid email',),
    password: yup.string().required('Please Enter your password'),

})

//For SignUp
const SignUpSchema = yup.object().shape({
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name'),
    email: yup
      .string()
      .required('Please enter your email')
      .min(3, 'Email must be at least 3 characters')
      .max(20, 'Email must be at most 20 characters')
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        'Please enter a valid email'
      ),
    password: yup.string().required('Please enter your password'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });
const Schemas ={
    loginSchema:yupResolver(loginSchema),
    SignUpSchema:yupResolver(SignUpSchema)
}

export default Schemas