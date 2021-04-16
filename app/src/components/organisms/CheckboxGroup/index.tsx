import React from 'react';
import {Flex} from '../../atoms';
import {Checkbox} from '../../molecules';
import {FlexProps} from '../../atoms/Flex/interface';

interface IProps {
  data: {value: string; label: string}[];
  values: string[];
  click: (value: string) => void;
}

const CheckboxGroup = (props: FlexProps & IProps) => {
  return (
    <Flex {...props}>
      {props.data.map((checkbox, index, arr) => (
        <Checkbox
          full
          styles={{marginBottom: index === arr.length - 1 ? 0 : 16}}
          key={checkbox.value}
          checked={props.values.includes(checkbox.value)}
          click={() => props.click(checkbox.value)}
          label={checkbox.label}
        />
      ))}
    </Flex>
  );
};

export default CheckboxGroup;
