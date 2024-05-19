import * as yup from 'yup'

const passwordRules =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const newsletterValidation = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(passwordRules, {
      message: 'Password must contain upper and lower case letters, numbers and special characters',
    })
    .required('Please enter your password'),
})
