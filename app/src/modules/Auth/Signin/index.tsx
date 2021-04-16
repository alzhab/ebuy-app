import React from 'react';
import {observer} from 'mobx-react';
import {Button, Flex, FormGenerator, HeaderScroll} from '@components';
import {AI, ButtonTypes, JC, Navigations} from '@types';
import {useForm} from 'react-hook-form';
import {LogoIcon} from '@icons';
import {Colors, COLORS} from '@styles/base';
import navigate from '@navigations/RootNavigation';
import {
  defaultValues,
  fields,
  headerProps,
  signupTitle,
  submitTitle,
} from './constants';
import {authStore} from '@stores';

const Signin = () => {
  const {
    control,
    handleSubmit,
    errors,
    formState: {isValid},
    getValues,
    reset,
  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: defaultValues(),
  });

  const submit = () => {
    const values = getValues();
    reset();
    authStore.login(values);
  };

  return (
    <>
      <HeaderScroll headerProps={headerProps} containerBottom containerHor>
        <Flex full size={0.3} ai={AI.center} jc={JC.center}>
          <LogoIcon color={COLORS.PRIMARY} sizeHeight={80} />
        </Flex>

        <Flex full size={0.5} ai={AI.center} jc={JC.center}>
          <FormGenerator control={control} errors={errors} fields={fields} />
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
          click={() => navigate(Navigations.Auth_SignUp)}
          full
          styles={{marginTop: 10}}
          color={Colors.PRIMARY}
          title={signupTitle}
        />
      </HeaderScroll>
    </>
  );
};

export default observer(Signin);
