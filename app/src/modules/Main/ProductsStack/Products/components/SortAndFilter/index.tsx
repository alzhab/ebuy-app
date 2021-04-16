import React from 'react';

import {AI, ButtonTypes, DIR, JC, Navigations} from '@types';
import {Button, Flex} from '@components';
import {COLORS, TextFamily} from '@styles/base';
import {FilterIcon, SortIcon} from '@icons';
import navigate from '@navigations/RootNavigation';

const SortAndFilter = ({sort}: {sort: () => void}) => {
  const buttonProps = {
    styles: {width: '48%', paddingVertical: 10},
    type: ButtonTypes.BORDERED,
    size: 18,
    family: TextFamily.SEMIBOLD,
  };

  return (
    <Flex
      dir={DIR.row}
      full
      jc={JC.spaceBetween}
      ai={AI.center}
      styles={{marginBottom: 20}}>
      <Button
        icon={<SortIcon sizeHeight={15} color={COLORS.PRIMARY} />}
        click={sort}
        title={'Sort'}
        {...buttonProps}
      />

      <Button
        icon={<FilterIcon sizeHeight={15} color={COLORS.PRIMARY} />}
        click={() => navigate(Navigations.Filter)}
        title={'Filter'}
        {...buttonProps}
      />
    </Flex>
  );
};

export default SortAndFilter;
