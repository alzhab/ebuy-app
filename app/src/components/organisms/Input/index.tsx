import React from 'react';
import {TextInput} from 'react-native';
import {Colors, COLORS} from '@styles/base';
import {InputProps} from './interfaces';
import {TextInputMask} from 'react-native-masked-text';
import {styles} from './styles';
import {InputContainer} from '../../molecules';
import {InputContainerProps} from '../../molecules/InputContainer/interfaces';

const Input = (props: InputContainerProps & InputProps) => {
  return (
    <InputContainer {...props}>
      {props.mask ? (
        <TextInputMask
          type="custom"
          options={{mask: props.mask}}
          secureTextEntry={props.secureTextEntry}
          autoCapitalize="none"
          keyboardType={props.keyboardType || 'default'}
          style={[styles.inputStyle]}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={COLORS.NEUTRAL_GRAY}
          caretHidden={props.caretHidden}
          onChangeText={(val: string) => {
            if (props.onChange) {
              props.onChange(val);
            }
          }}
        />
      ) : (
        <TextInput
          selectionColor={COLORS.PRIMARY}
          autoCorrect={false}
          secureTextEntry={props.secureTextEntry}
          autoCapitalize="none"
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={COLORS.NEUTRAL_GRAY}
          multiline={props.textArea}
          keyboardType={props.keyboardType || 'default'}
          style={[
            styles.inputStyle,
            {
              borderColor: props.valid
                ? COLORS.SUCCESS
                : props.error
                ? COLORS.ERROR
                : COLORS.NEUTRAL_GRAY_DARK,
            },
          ]}
          caretHidden={props.caretHidden}
          onChangeText={props.onChange}
        />
      )}
    </InputContainer>
  );
};

export default Input;
