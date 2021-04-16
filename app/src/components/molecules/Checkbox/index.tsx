import React from 'react';
import {Flex, Text} from '../../atoms';
import {AI, DIR, JC} from '@types';
import {TouchableOpacity} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {COLORS} from '@styles/base';
import {FlexProps} from '../../atoms/Flex/interface';

interface IProps {
  checked: boolean;
  click: () => void;
  label: string;
}

const Radio = (props: FlexProps & IProps) => {
  return (
    <TouchableOpacity onPress={props.click}>
      <Flex dir={DIR.row} ai={AI.center} jc={JC.spaceBetween} {...props}>
        <Text size={16}>{props.label}</Text>
        <Flex
          styles={{
            width: scaleSize(20),
            height: scaleSize(20),
            borderRadius: scaleSize(3),
            backgroundColor: props.checked
              ? COLORS.PRIMARY
              : COLORS.NEUTRAL_GRAY_DARK,
          }}
        />
      </Flex>
    </TouchableOpacity>
  );
};

export default Radio;
