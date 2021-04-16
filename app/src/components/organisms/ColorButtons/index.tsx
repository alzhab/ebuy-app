import React from 'react';
import {ButtonTypes} from '@types';
import {boxShadow} from '@styles/mixins';
import {Button} from '@components';

const ColorButtons = ({colors}: {colors: string[]}) => {
  return (
    <>
      {colors.map((color) => (
        <Button
          key={color}
          click={() => {}}
          empty
          type={ButtonTypes.EMPTY}
          styles={[
            boxShadow(),
            {
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: color,
              marginRight: 16,
            },
          ]}
        />
      ))}
    </>
  );
};

export default ColorButtons;
