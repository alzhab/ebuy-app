import React, { useEffect } from 'react'
import { Button, Flex, FormGenerator, HeaderScroll, Loading } from '@components'
import { useForm } from 'react-hook-form'
import { defaultValues, fields, submitTitle } from './constants'
import { ButtonTypes } from '@types'
import { profileStore } from '@stores'
import { observer } from 'mobx-react'

const ProfileEdit = () => {
  const {
    control,
    handleSubmit,
    errors,
    getValues,
    formState: { isValid },
  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: defaultValues(profileStore.user),
  })

  const submit = () => {
    const values = getValues()
    profileStore.updateProfile(values)
  }

  return (
    <HeaderScroll
      containerHor
      headerProps={{ title: 'My details', back: true }}
      loading={profileStore.editLoading}
      containerBottom>
      <Flex full size={1}>
        <FormGenerator
          withValid={false}
          control={control}
          errors={errors}
          fields={fields}
        />
      </Flex>

      <Button
        type={isValid ? ButtonTypes.PRIMARY : ButtonTypes.DISABLED}
        size={16}
        click={handleSubmit(submit)}
        full
        title={submitTitle}
      />
    </HeaderScroll>
  )
}

export default observer(ProfileEdit)
