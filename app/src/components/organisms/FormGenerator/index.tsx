import React from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
  ValidationRule,
} from 'react-hook-form';
import {errMess} from '@utils';
import {InputProps} from '../Input/interfaces';
import {InputContainerProps} from '../../molecules/InputContainer/interfaces';
import Input from '../Input';
import DateInput from '../DateInput';
import {Text} from '../../atoms';

export interface IField extends InputContainerProps, InputProps {
  name: string;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
  rules?: Exclude<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  type?: 'input' | 'date';
}

interface IProps {
  control: Control;
  errors: FieldErrors;
  fields: IField[];
  withValid?: boolean;
}

const FormGenerator = ({control, errors, fields, withValid}: IProps) => {
  return (
    <>
      {fields.map(
        ({name, required, pattern, rules, type = 'input', ...props}) => {
          const rulesList: Exclude<
            RegisterOptions,
            'valueAsNumber' | 'valueAsDate' | 'setValueAs'
          > = {};

          if (required) {
            rulesList.required = errMess.required;
          }

          if (pattern) {
            rulesList.pattern = pattern;
          }

          const child = ({value, onChange}: {value: any; onChange: any}) => {
            switch (type) {
              case 'date':
                return (
                  <DateInput
                    {...props}
                    valid={withValid ? value && !errors[name]?.message : false}
                    error={errors[name]?.message || ''}
                    value={value}
                    setValue={onChange}
                  />
                );
              case 'input':
                return (
                  <Input
                    {...props}
                    valid={withValid ? value && !errors[name]?.message : false}
                    value={value}
                    error={errors[name]?.message || ''}
                    onChange={onChange}
                  />
                );
              default:
                return <Text>Type required</Text>;
            }
          };
          return (
            <Controller
              key={name}
              name={name}
              control={control}
              rules={{...rules, ...rulesList}}
              render={({onChange, value}) => {
                return child({onChange, value});
              }}
            />
          );
        },
      )}
    </>
  );
};

export default FormGenerator;
