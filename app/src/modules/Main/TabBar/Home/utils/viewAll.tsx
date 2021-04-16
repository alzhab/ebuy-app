import {Button} from '@components';
import {Colors} from '@styles/base';
import {ButtonTypes} from '@types';
import React from 'react';

const viewAll = (click: () => void) => {
  return (
    <Button
      size={12}
      click={click}
      color={Colors.PRIMARY}
      title={'View all'}
      empty
      type={ButtonTypes.EMPTY}
    />
  );
};

export default viewAll
