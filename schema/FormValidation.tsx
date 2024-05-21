import * as yup from 'yup'

export const ValidationSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
})
