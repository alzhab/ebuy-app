import React from 'react';
import {COLORS} from '@styles/base';
import {Flex, Image} from '../../atoms';
import {Source} from 'react-native-fast-image';

interface IProps {
  img: Source | number;
  diameter: number;
}

const Avatar = (props: IProps) => {
  return (
    <Flex
      styles={{
        width: props.diameter,
        height: props.diameter,
        borderRadius: props.diameter,
        backgroundColor: COLORS.NEUTRAL_LIGHT,
        overflow: 'hidden',
      }}>
      <Image source={props.img} resizeMode={'cover'} />
    </Flex>
  );
};

export default Avatar;
