import { IField } from '../../../../../components/organisms/FormGenerator'
import { validators } from '@utils'
import { ICustomer } from '../../../../../api/customers.api'
import moment from 'moment'

export const fields: IField[] = [
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
    name: 'email',
    required: true,
    pattern: validators.emailPattern,
    keyboardType: 'email-address',
    label: 'Email address',
    placeholder: 'Enter email address',
  },
  {
    name: 'birth_date',
    required: true,
    label: 'Date of birth',
    type: 'date',
  },
]

export const defaultValues = (user: ICustomer | null) => ({
  email: user?.email || '',
  first_name: user?.first_name || '',
  last_name: user?.last_name || '',
  birth_date: moment(user?.birth_date).toDate() || undefined,
})

export const submitTitle = 'Save changes'
