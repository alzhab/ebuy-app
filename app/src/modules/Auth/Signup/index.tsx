import React from 'react';
import {observer} from 'mobx-react';
import {
  Button,
  Card,
  CheckboxGroup,
  Flex,
  FormGenerator,
  HeaderScroll,
  InputContainer,
  RadioGroup,
} from '@components';
import {AI, ButtonTypes, DIR, JC, Navigations} from '@types';
import {Controller, useForm} from 'react-hook-form';
import {scaleSize} from '@styles/mixins';
import navigate from '@navigations/RootNavigation';
import {Colors} from '@styles/base';
import {
  defaultValues,
  fields,
  headerProps,
  interests,
  mailingTypes,
  signinTitle,
  submitTitle,
} from './constants';
import {authStore} from '@stores';

const Signup = () => {
  const {
    control,
    handleSubmit,
    errors,
    formState: {isValid},
    getValues,
  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: defaultValues(),
  });

  const submit = () => {
    const values = getValues();
    authStore.signup(values);
  };

  return (
    <>
      <HeaderScroll headerProps={headerProps} containerBottom containerHor>
        <Flex full size={1}>
          <FormGenerator control={control} errors={errors} fields={fields} />

          <InputContainer label={'Mostly interested in (Optional)'}>
            <Controller
              name={'interested_in'}
              control={control}
              render={({onChange, value}) => (
                <Card full styles={{marginBottom: scaleSize(20)}}>
                  <RadioGroup
                    full
                    dir={DIR.row}
                    ai={AI.center}
                    jc={JC.spaceBetween}
                    data={interests}
                    value={value}
                    click={onChange}
                  />
                </Card>
              )}
            />

            <Controller
              name={'mailing'}
              control={control}
              render={({onChange, value}) => (
                <Card full>
                  <CheckboxGroup
                    full
                    jc={JC.spaceBetween}
                    data={mailingTypes}
                    values={value}
                    click={(e) => {
                      const exist = value.includes(e);
                      if (exist) {
                        onChange(value.filter((i: string) => i !== e));
                      } else {
                        onChange([...value, e]);
                      }
                    }}
                  />
                </Card>
              )}
            />
          </InputContainer>
        </Flex>

        <Button
          type={isValid ? ButtonTypes.PRIMARY : ButtonTypes.DISABLED}
          size={16}
          click={handleSubmit(submit)}
          full
          title={submitTitle}
        />
        <Button
          type={ButtonTypes.EMPTY}
          size={16}
          click={() => navigate(Navigations.Auth_SignIn)}
          full
          styles={{marginTop: 10}}
          color={Colors.PRIMARY}
          title={signinTitle}
        />
      </HeaderScroll>
    </>
  );
};

export default observer(Signup);
