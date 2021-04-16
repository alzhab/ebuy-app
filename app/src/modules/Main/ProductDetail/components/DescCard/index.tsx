import React from 'react';
import {Card, Flex, Text} from '@components';
import {AI, DIR, JC} from '@types';
import {StarIcon} from '@icons';
import {Colors, COLORS, TextFamily} from '@styles/base';
import Rating from '../../../../../components/organisms/Rating';

const InfoCard = () => {
  return (
    <Card full padding={{top: 16}} styles={{marginBottom: 16}}>
      <Text size={16} styles={{marginBottom: 11}}>
        Description
      </Text>

      <Text lineHeight={22} size={15} color={Colors.NEUTRAL_GRAY_DARK}>
        Nike, originally known as Blue Ribbon Sports (BRS), was founded by
        University of Oregon track athlete Phil Knight and his coach, Bill
        Bowerman, on January 25, 1964.[11] The company initially operated in
        Eugene, Oregon as a distributor for Japanese shoe maker Onitsuka Tiger,
        making most sales at track meets out of Knight's
      </Text>
    </Card>
  );
};

export default InfoCard;
