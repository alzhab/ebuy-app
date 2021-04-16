import React from 'react';
import {AI, ButtonTypes, DIR, JC} from '@types';
import {Avatar, Button, Flex, Rating, Text} from '@components';
import {COLORS, Colors, TextFamily} from '@styles/base';
import {ClockIcon, HeartIcon} from '@icons';

const Review = () => {
  return (
    <Flex full dir={DIR.row} ai={AI.flexStart} jc={JC.spaceBetween}>
      <Flex styles={{width: '15%'}}>
        <Avatar img={require('@assets/images/profile.png')} diameter={40} />
      </Flex>

      <Flex styles={{width: '85%'}}>
        <Flex
          full
          dir={DIR.row}
          ai={AI.center}
          jc={JC.spaceBetween}
          styles={{marginBottom: 10}}>
          <Text
            size={14}
            styles={{}}
            family={TextFamily.SEMIBOLD}
            color={Colors.NEUTRAL_GRAY_DARK}>
            Jack Bibber
          </Text>

          <Button empty type={ButtonTypes.EMPTY} click={() => {}}>
            <HeartIcon color={COLORS.NEUTRAL_GRAY_DARK} sizeHeight={20} />
          </Button>
        </Flex>

        <Rating rating={5} />

        <Text
          size={12}
          color={Colors.NEUTRAL_GRAY_DARK}
          lineHeight={20}
          styles={{marginVertical: 10}}>
          Nike is a leading sports shoes brand in the world, with a youthful and
          dynamic
        </Text>

        <Flex full dir={DIR.row} ai={AI.center} jc={JC.flexEnd}>
          <ClockIcon color={COLORS.NEUTRAL_GRAY_DARK} sizeHeight={14} />
          <Text styles={{marginLeft: 8}} color={Colors.NEUTRAL_GRAY_DARK}>
            09:30 - 23/09/2020
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Review;
