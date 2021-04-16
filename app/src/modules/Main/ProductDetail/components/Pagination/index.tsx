import React from 'react';
import {COLORS} from '@styles/base';
import {Pagination} from 'react-native-snap-carousel';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';

const MyPagination = ({
  activeIndex,
  length,
}: {
  activeIndex: number;
  length: number;
}) => {
  return (
    <Pagination
      dotsLength={length}
      activeDotIndex={activeIndex}
      inactiveDotScale={1}
      dotStyle={{backgroundColor: COLORS.PRIMARY}}
      inactiveDotStyle={{backgroundColor: COLORS.NEUTRAL_GRAY}}
      dotContainerStyle={{marginHorizontal: 4}}
      containerStyle={{
        paddingHorizontal: 0,
        paddingVertical: 20,
        marginLeft: CONTAINER_HOR_PADDING,
      }}
    />
  );
};

export default MyPagination;
