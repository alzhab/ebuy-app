import React from 'react';
import {Card, Flex, Text, Rating} from '@components';
import {AI, DIR, JC} from '@types';
import {TextFamily} from '@styles/base';

const InfoCard = () => {
  return (
    <Card full padding={{top: 16}} styles={{marginBottom: 16}}>
      <Text size={18} styles={{marginBottom: 16}}>
        Women's hoodie
      </Text>

      <Flex full dir={DIR.row} ai={AI.center} jc={JC.spaceBetween}>
        <Rating rating={4} />

        <Text size={16} family={TextFamily.SEMIBOLD}>
          $27.00
        </Text>
      </Flex>
    </Card>
  );
};

export default InfoCard;
