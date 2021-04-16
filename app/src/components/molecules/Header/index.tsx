import React, {ReactElement, useEffect, useRef} from 'react';
import {AI, DIR, JC, TextAlign} from '@types';
import {COLORS, TextFamily} from '@styles/base';
import {Flex, Text} from '../../atoms';
import {
  CONTAINER_VER_TOP_PADDING,
  HEADER_HEIGHT,
  HEADER_PADDING,
} from '@styles/spacing';
import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '@icons';
import {Animated, StyleProp, TouchableOpacity} from 'react-native';

export interface Props {
  title?: string;
  right?: any;
  back?: boolean;
  transparent?: boolean;
  showShadow?: boolean;
  containerHor?: boolean;
  absolute?: boolean;
}

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Header = ({
  title = '',
  right = null,
  back = false,
  transparent = false,
  showShadow,
  containerHor = true,
  absolute = false,
}: Props) => {
  const navigation = useNavigation();

  const anim = useRef(new Animated.Value(showShadow ? 1 : 0)).current;

  const animate = (val: 0 | 1) => {
    Animated.timing(anim, {
      toValue: val,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  useEffect(() => {
    animate(showShadow ? 1 : 0);
  }, [showShadow]);

  const opacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.13],
  });

  const elevation = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 4],
  });

  const background = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
  });

  return (
    <Flex
      full
      animated
      dir={DIR.row}
      containerHor={containerHor}
      ai={AI.center}
      jc={JC.spaceBetween}
      styles={[
        {
          zIndex: 100,
          backgroundColor: transparent ? background : COLORS.MAIN_BG,
          paddingTop: CONTAINER_VER_TOP_PADDING + HEADER_PADDING,
          paddingBottom: HEADER_PADDING,
          height: HEADER_HEIGHT,
          maxHeight: HEADER_HEIGHT,
          shadowColor: '#000',
          shadowOffset: {height: 10, width: 0},
          shadowOpacity: opacity,
          shadowRadius: 4,
          elevation,
          position: absolute ? 'absolute' : 'relative',
        },
      ]}>
      <Flex styles={{width: '20%'}}>
        {back && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.goBack()}
            style={{
              width: '100%',
              alignItems: AI.flexStart,
              justifyContent: JC.flexStart,
            }}>
            <Flex full>
              <BackIcon sizeHeight={20} />
            </Flex>
          </TouchableOpacity>
        )}
      </Flex>

      <Text size={20} textAlign={TextAlign.center} family={TextFamily.SEMIBOLD}>
        {title}
      </Text>

      <Flex styles={{width: '20%'}} ai={AI.flexEnd}>
        {right && right}
      </Flex>
    </Flex>
  );
};

export default Header;
