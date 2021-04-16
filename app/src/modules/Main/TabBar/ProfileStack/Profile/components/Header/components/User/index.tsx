import React, {useEffect, useRef} from 'react';
import {Avatar, Button, Flex, Text} from '@components';
import {scaleSize} from '@styles/mixins';
import {ButtonTypes} from '@types';
import {PencilIcon} from '@icons';
import {Colors, COLORS, TextFamily} from '@styles/base';
import {Source} from 'react-native-fast-image';
import {Animated} from 'react-native';
import {pickImage} from '@utils';
import {IImage} from '../../../../../../../../../api/customers.api';

interface IProps {
  img: Source | number;
  fullname: string;
  edit: (image: IImage) => void;
  diameter: number;
}

const User = (props: IProps) => {
  const diameter = useRef(new Animated.Value(props.diameter)).current;

  const animate = () => {
    Animated.timing(diameter, {
      useNativeDriver: true,
      toValue: props.diameter,
      duration: 0,
    }).start();
  };

  useEffect(() => {
    animate();
  }, [props.diameter]);

  const opacity = diameter.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
  });

  const scale = diameter.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
  });

  const pickImageHandler = () => {
    pickImage('library', (res) => {
      props.edit(res);
    });
  };

  return (
    <>
      <Flex
        animated
        styles={{
          width: props.diameter,
          height: props.diameter,
          overflow: 'hidden',
          position: 'relative',
          marginBottom: scaleSize(12),
          opacity,
          transform: [{scale}],
        }}>
        <Avatar img={props.img} diameter={props.diameter} />

        <Button
          styles={{
            width: props.diameter * 0.4,
            height: props.diameter * 0.4,
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          click={pickImageHandler}
          type={ButtonTypes.CIRCLE}>
          <PencilIcon sizeHeight={18} color={COLORS.PRIMARY} />
        </Button>
      </Flex>

      <Text
        animated
        styles={{marginTop: 10, transform: [{scale}]}}
        family={TextFamily.BOLD}
        size={20}
        color={Colors.NEUTRAL_LIGHT}>
        {props.fullname}
      </Text>
    </>
  );
};

export default User;
