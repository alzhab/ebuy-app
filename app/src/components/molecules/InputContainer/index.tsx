import React from 'react';
import {scaleSize} from '@styles/mixins';
import {Colors, TextSize} from '@styles/base';
import {AnimateItTiming, Flex, Text} from '../../atoms';
import {InputContainerProps} from './interfaces';
import {styles} from './styles';

const InputContainer = (props: InputContainerProps) => {
  return (
    <Flex styles={[styles.inputBox]}>
      <Text
        styles={{marginBottom: 10}}
        size={16}
        color={
          props.valid
            ? Colors.SUCCESS
            : props.error
            ? Colors.ERROR
            : Colors.NEUTRAL_GRAY_DARK
        }>
        {props.label}
      </Text>

      {props.children}

      {props.help && !props.error ? (
        <Text
          styles={{marginTop: 15}}
          size={12}
          color={Colors.NEUTRAL_GRAY_DARK}>
          {props.help}
        </Text>
      ) : null}

      {props.error ? (
        <Text styles={{marginTop: 15}} size={12} color={Colors.ERROR}>
          {props.error}
        </Text>
      ) : null}
    </Flex>
  );
};

export default InputContainer;
