import React from 'react';
import {AI, JC, TextAlign} from '@types';
import {AnimateItTiming, Flex, Image, Text} from '@components';
import {scaleSize} from '@styles/mixins';
import {Colors, TextFamily, TextSize} from '@styles/base';

const Empty = () => {
  return (
    <AnimateItTiming
      style={{flex: 1, width: '100%'}}
      interpolations={[{name: 'opacity', dir: 'both', outputRange: [0, 1]}]}>
      <Flex full ai={AI.center} jc={JC.center} size={1}>
        <Flex full size={1} ai={AI.center} jc={JC.center}>
          <Flex styles={{width: '70%', height: scaleSize(200)}}>
            <Image
              source={require('@assets/images/NoSearch.png')}
              resizeMode={'contain'}
            />
          </Flex>
        </Flex>

        <Flex full size={0.3} ai={AI.center}>
          <Text
            styles={{marginTop: scaleSize(20)}}
            textAlign={TextAlign.center}
            color={Colors.NEUTRAL_GRAY_DARK}
            family={TextFamily.SEMIBOLD}
            size={TextSize.large}>
            No Result
          </Text>
        </Flex>
      </Flex>
    </AnimateItTiming>
  );
};

export default Empty;
