import React from 'react';
import {Button, Card, Flex, ReviewCard, Text} from '@components';
import {AI, ButtonTypes, DIR, JC} from '@types';
import {COLORS, Colors} from '@styles/base';

const Header = () => (
  <Flex
    full
    ai={AI.center}
    jc={JC.spaceBetween}
    dir={DIR.row}
    styles={{
      paddingBottom: 19,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.NEUTRAL_GRAY_LIGHT,
      paddingHorizontal: 16,
    }}>
    <Text size={16}>Review</Text>

    <Button
      size={12}
      click={() => {}}
      color={Colors.PRIMARY}
      title={'See all'}
      empty
      type={ButtonTypes.EMPTY}
    />
  </Flex>
);

const ReviewsCard = ({}) => {
  return (
    <Card full padding={{top: 16, right: 0, bottom: 0, left: 0}}>
      <Header />

      <Flex
        full
        styles={{
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}>
        <ReviewCard />
        <Flex styles={{height: 40}} />
        <ReviewCard />
        <Flex styles={{height: 40}} />
        <ReviewCard />
      </Flex>
    </Card>
  );
};

export default ReviewsCard;
