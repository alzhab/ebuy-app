import React from 'react';
import {AI, ButtonTypes, DIR} from '@types';
import {Flex, Text} from '../../atoms';
import {Button} from '../../molecules';
import {StarIcon} from '@icons';
import {COLORS} from '@styles/base';

interface IProps {
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

const Star = ({isActive}: {isActive: boolean}) => {
  return (
    <Button
      click={() => {}}
      empty
      type={ButtonTypes.EMPTY}
      styles={{marginRight: 7}}>
      <StarIcon
        color={COLORS.SEMATIC_YELLOW}
        sizeHeight={14}
        active={isActive}
      />
    </Button>
  );
};

const Rating = ({rating}: IProps) => {
  return (
    <Flex dir={DIR.row} ai={AI.center}>
      {Array(5)
        .fill('')
        .map((_, index) => {
          const isActive = index < rating;

          return <Star isActive={isActive} key={index.toString()} />;
        })}
      <Text size={16}>4.9</Text>
    </Flex>
  );
};

export default Rating;
