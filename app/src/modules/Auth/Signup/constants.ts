import {IField} from '../../../components/organisms/FormGenerator';
import {validators} from '@utils';

export const fields: IField[] = [
  {
    name: 'email',
    required: true,
    pattern: validators.emailPattern,
    keyboardType: 'email-address',
    label: 'Email address',
    help: "We'll send your order confirmation here",
    placeholder: 'Enter email address',
  },
  {
    name: 'first_name',
    required: true,
    placeholder: 'Enter first name',
    label: 'First name',
  },
  {
    name: 'last_name',
    required: true,
    placeholder: 'Enter last name',
    label: 'Last name',
  },
  {
    name: 'password',
    required: true,
    label: 'Password',
    placeholder: 'Enter password',
    help: 'Must be 5 or more characters',
    secureTextEntry: true,
    rules: {minLength: {value: 5, message: 'Must be 5 or more characters'}},
  },
  {
    name: 'birth_date',
    required: true,
    label: 'Date of birth',
    help: 'You need to be 16 or over to use Ebuy',
    type: 'date',
  },
];

export const mailingTypes = [
  {value: 'discount', label: 'Discounts and sales'},
  {value: 'new', label: 'New stuff'},
  {value: 'exclusive', label: 'Your exclusives'},
  {value: 'partners', label: 'App partners'},
];

export const interests = [
  {value: 'woman', label: 'Womenswear'},
  {value: 'men', label: 'Menswear'},
];

export const defaultValues = () => ({
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  birth_date: null,
  interested_in: null,
  mailing: [],
});

export const headerProps = {title: 'Sign up', back: true};
export const submitTitle = 'Sign up';
export const signinTitle = 'Already have an account? Sign in';
