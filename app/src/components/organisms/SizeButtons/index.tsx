import React from 'react';
import {ButtonTypes} from '@types';
import {boxShadow} from '@styles/mixins';
import {Button} from '@components';
import {Colors, COLORS} from '@styles/base';

const SizeButtons = ({sizes}: {sizes: string[]}) => {
  return (
    <>
      {sizes.map((size) => (
        <Button
          key={size}
          click={() => {}}
          empty
          title={size}
          color={Colors.NEUTRAL_GRAY_DARK}
          type={ButtonTypes.EMPTY}
          styles={[
            boxShadow(),
            {
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: COLORS.MAIN_BG,
              marginRight: 16,
            },
          ]}
        />
      ))}
    </>
  );
};

export default SizeButtons;
