import {IField} from '../../../components/organisms/FormGenerator';
import {validators} from '@utils';

export const fields: IField[] = [
  {
    name: 'email',
    required: true,
    pattern: validators.emailPattern,
    keyboardType: 'email-address',
    label: 'Email address',
    placeholder: 'Enter email address',
  },
  {
    name: 'password',
    required: true,
    label: 'Password',
    placeholder: 'Enter password',
    secureTextEntry: true,
  },
];

export const defaultValues = () => ({
  email: '',
  password: '',
});

export const headerProps = {title: 'Sign in'};
export const submitTitle = 'Sign in';
export const signupTitle = "Don't have an account yet? Sign Up";
