import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';



const loginSchema = yup.object().shape({
    //For Email
    email: yup.string().min(3, 'Email must be valid').max(20, 'Email must be valid').
    required('Plese enter your email').
    matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Please enter valid email',),

    //For Password
    password: yup.string().required('Please Enter your password'),
})

const Schemas ={
    loginSchema:yupResolver(loginSchema)
}

export default Schemas