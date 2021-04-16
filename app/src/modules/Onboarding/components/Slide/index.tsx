import React from 'react';
import {Flex, Image, Text} from '@components';
import {AI, JC, TextAlign} from '@types';
import {scaleSize} from '@styles/mixins';
import {COLORS, Colors, TextFamily} from '@styles/base';
import {Source} from 'react-native-fast-image';

export interface ISlide {
  image: Source | number;
  title: string;
  text: string;
}

interface IProps {
  data: ISlide;
}

const Slide = (props: IProps) => {
  return (
    <Flex size={1} full containerHor styles={{backgroundColor: COLORS.MAIN_BG}}>
      <Flex full size={1} ai={AI.center} jc={JC.center}>
        <Image resizeMode={'contain'} source={props.data.image} />
      </Flex>
      <Flex full size={0.52} ai={AI.center} jc={JC.center}>
        <Text
          styles={{paddingBottom: scaleSize(15)}}
          textAlign={TextAlign.center}
          size={20}
          family={TextFamily.SEMIBOLD}
          color={Colors.PRIMARY}>
          {props.data.title}
        </Text>

        <Text
          textAlign={TextAlign.center}
          color={Colors.NEUTRAL_GRAY_DARK}
          lineHeight={22}>
          {props.data.text}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Slide;
