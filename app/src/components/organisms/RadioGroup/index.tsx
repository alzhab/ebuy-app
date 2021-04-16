import React from 'react';
import {Flex} from '../../atoms';
import {Radio} from '../../molecules';
import {FlexProps} from '../../atoms/Flex/interface';

interface IProps {
  data: {value: string; label: string}[];
  value: string;
  click: (value: string) => void;
}

const RadioGroup = (props: FlexProps & IProps) => {
  return (
    <Flex {...props}>
      {props.data.map((radio) => (
        <Radio
          key={radio.value}
          checked={props.value === radio.value}
          click={() => props.click(radio.value)}
          label={radio.label}
        />
      ))}
    </Flex>
  );
};

export default RadioGroup;
